#!/usr/bin/env python3
"""
Tufte Blog Builder
Converts Markdown files from /content to HTML pages
"""

import os
import re
import shutil
from datetime import datetime
from pathlib import Path

class BlogBuilder:
    def __init__(self):
        # Use directory containing build.py as project root (so it works from any cwd)
        self.project_root = Path(__file__).resolve().parent
        self.content_dir = self.project_root / "content"
        self.posts_dir = self.project_root / "posts"
        self.template_path = self.project_root / "posts" / "post-template.html"

    def load_template(self):
        """Load the HTML template"""
        try:
            with open(self.template_path, 'r', encoding='utf-8') as f:
                return f.read()
        except FileNotFoundError:
            print("❌ Template not found. Make sure post-template.html exists.")
            return None

    def _build_post_mapping(self):
        """Build title -> post URL mapping from all content files (for internal links)."""
        mapping = {}
        for md_file in self.content_dir.glob("*.md"):
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            title = self.extract_title_from_markdown(content)
            if not title or title == "Untitled Post":
                title = md_file.stem
            base_name = md_file.stem
            safe_title = re.sub(r'[^\w\-]', '', title.lower().replace(' ', '-'))
            if len(safe_title) < 5:
                safe_title = re.sub(r'[^\w\-]', '', base_name.lower())
            slug = safe_title[:40]
            mapping[title.strip()] = f"{slug}.html"
        return mapping

    def _resolve_internal_links(self, markdown_text, post_mapping):
        """Replace [[post:Title]] and [[post:Title|Link text]] with markdown links."""
        def replacer(m):
            title = m.group(1).strip()
            link_text = m.group(2).strip() if m.group(2) else title
            url = post_mapping.get(title)
            if not url:
                # Fallback: compute slug from given title (in case of minor mismatch)
                slug = re.sub(r'[^\w\-]', '', title.lower().replace(' ', '-'))[:40]
                url = f"{slug}.html" if len(slug) >= 2 else "#"
            return f"[{link_text}]({url})"
        return re.sub(r'\[\[post:\s*([^\]\|]+)(?:\|([^\]]+))?\]\]', replacer, markdown_text)

    def convert_markdown_to_html(self, markdown_text):
        """Convert basic Markdown to HTML"""

        # Strip title/date comment lines from the start so first paragraph is wrapped in <p> (and second gets indent)
        lines = markdown_text.split('\n')
        while lines and re.match(r'^\s*<!--\s*(?:title|date)\s*:.*?-->\s*$', lines[0], re.IGNORECASE):
            lines.pop(0)
        markdown_text = '\n'.join(lines)

        # Hover popups FIRST (before bold/italic) so * and ** inside popup content stay raw
        def _popup_replacer(m):
            visible, content = m.group(1), m.group(2)
            content = content.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
            content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
            content = content.replace('\n', '<br>')
            return f'<span class="popup">{visible}<span class="popup-body">{content}</span></span>'
        markdown_text = re.sub(r'\[\[([^\]|]+)\|([\s\S]*?)\]\]', _popup_replacer, markdown_text)

        # Headers (allow with or without space after #)
        markdown_text = re.sub(r'^###\s*(.*)$', r'<h3>\1</h3>', markdown_text, flags=re.MULTILINE)
        markdown_text = re.sub(r'^##\s*(.*)$', r'<h2>\1</h2>', markdown_text, flags=re.MULTILINE)
        markdown_text = re.sub(r'^#\s*(.*)$', r'<h1>\1</h1>', markdown_text, flags=re.MULTILINE)

        # Bold and italic (. can span newlines so *...* works in multi-line containers)
        markdown_text = re.sub(r'\*\*\*(.*?)\*\*\*', r'<strong><em>\1</em></strong>', markdown_text, flags=re.DOTALL)
        markdown_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', markdown_text, flags=re.DOTALL)
        markdown_text = re.sub(r'\*(.*?)\*', r'<em>\1</em>', markdown_text, flags=re.DOTALL)

        # Images (must be before links so ![alt](url) is not treated as link)
        markdown_text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'<img src="\2" alt="\1" class="content-image">', markdown_text)

        # Links
        markdown_text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', markdown_text)

        # Code blocks (basic)
        markdown_text = re.sub(r'```(.*?)```', r'<pre><code>\1</code></pre>', markdown_text, flags=re.DOTALL)

        # Inline code
        markdown_text = re.sub(r'`([^`]+)`', r'<code>\1</code>', markdown_text)

        # Blockquotes
        markdown_text = re.sub(r'^> (.*)$', r'<blockquote><p>\1</p></blockquote>', markdown_text, flags=re.MULTILINE)

        # Lists (basic) — don't treat * as list when line looks like *emphasis* (e.g. in containers)
        lines = markdown_text.split('\n')
        in_list = False
        html_lines = []

        for line in lines:
            is_list_line = re.match(r'^\s*[-*+]\s', line)
            if is_list_line and re.match(r'^\s*\*', line) and re.search(r'\*[^\s*].*\*', line):
                is_list_line = False  # *...* emphasis, not a list item
            if is_list_line:
                if not in_list:
                    html_lines.append('<ul>')
                    in_list = True
                item = re.sub(r'^\s*[-*+]\s+', '', line)
                html_lines.append(f'<li>{item}</li>')
            else:
                if in_list:
                    html_lines.append('</ul>')
                    in_list = False
                html_lines.append(line)

        if in_list:
            html_lines.append('</ul>')

        markdown_text = '\n'.join(html_lines)

        # Paragraphs (must be done last)
        # First ensure proper separation between HTML elements and text
        markdown_text = re.sub(r'(<[^>]+>)\s*\n\s*([^\n])', r'\1\n\n\2', markdown_text)

        # Split on paragraph breaks. 1 blank = indent; 2 blank = 1 div; 3 blank = 2 divs; etc.
        parts = re.split(r'(\n\s*\n+)', markdown_text)
        paragraphs = []
        after_break_level = 0  # 0=none, 1=one division, 2=two, ...
        prev_had_math = False

        inline_only_tags = ('strong', 'em', 'b', 'i', 'a', 'span', 'code')

        def block_has_math(b):
            return '$$' in b or r'\(' in b or r'\[' in b

        def make_break_cls(level, for_inline=False):
            if level <= 0:
                return ' class="no-indent"' if prev_had_math else ''
            base = ' class="no-indent"' if prev_had_math else ''
            if level == 1:
                return base.replace('class="no-indent"', 'class="after-break' + (' no-indent' if prev_had_math else '') + '"')
            return base + f' style="margin-top: {1.5 * level}em"'

        for i, part in enumerate(parts):
            if re.match(r'^\n\s*\n+$', part):
                n = part.count('\n')
                after_break_level = max(0, n - 2)
                continue
            block = part.strip()
            if block:
                if not block.startswith('<'):
                    cls = ''
                    if after_break_level == 1:
                        cls = ' class="after-break' + (' no-indent' if prev_had_math else '') + '"'
                    elif after_break_level > 1:
                        cls = ' class="no-indent" style="margin-top: ' + str(1.5 * after_break_level) + 'em"'
                    elif prev_had_math:
                        cls = ' class="no-indent"'
                    paragraphs.append(f'<p{cls}>{block}</p>')
                    prev_had_math = block_has_math(block)
                else:
                    first_tag = re.match(r'^<(\w+)', block)
                    tag = first_tag.group(1).lower() if first_tag else ''
                    if tag in inline_only_tags:
                        cls = ''
                        if after_break_level == 1:
                            cls = ' class="no-indent after-break"'
                        elif after_break_level > 1:
                            cls = ' class="no-indent" style="margin-top: ' + str(1.5 * after_break_level) + 'em"'
                        elif prev_had_math:
                            cls = ' class="no-indent"'
                        paragraphs.append(f'<p{cls}>{block}</p>')
                        prev_had_math = block_has_math(block)
                    else:
                        paragraphs.append(block)
                        prev_had_math = False
            after_break_level = 0

        return '\n\n'.join(paragraphs)

    def extract_title_from_markdown(self, markdown_content):
        """Extract title from raw markdown content"""
        lines = markdown_content.strip().split('\n')

        # Look for title directive first: <!-- title: Your Title -->
        for line in lines[:10]:
            # Strip leading/trailing whitespace before matching
            line = line.strip()
            title_match = re.search(r'<!--\s*title:\s*(.*?)\s*-->', line, re.IGNORECASE)
            if title_match:
                return title_match.group(1).strip()

        return None

    def extract_date_from_markdown(self, markdown_content):
        """Extract date from raw markdown content"""
        lines = markdown_content.strip().split('\n')

        # Look for date directive: <!-- date: January 15, 2026 --> or <!-- date: 17/12-2025 -->
        for line in lines[:10]:
            # Strip leading/trailing whitespace before matching
            line = line.strip()
            date_match = re.search(r'<!--\s*date:\s*(.*?)\s*-->', line, re.IGNORECASE)
            if date_match:
                return date_match.group(1).strip()

        return None

    def parse_post_date_for_sort(self, date_str, fallback_timestamp=None):
        """Parse post date string to a comparable value for sorting. Returns (datetime, used_fallback)."""
        if not date_str:
            if fallback_timestamp is not None:
                return (datetime.fromtimestamp(fallback_timestamp), True)
            return (datetime.min, True)
        date_str = date_str.strip()
        # DD/MM-YYYY or DD/MM-Y (e.g. 17/12-2025)
        m = re.match(r'(\d{1,2})/(\d{1,2})-(\d{4})$', date_str)
        if m:
            try:
                d, mo, y = int(m.group(1)), int(m.group(2)), int(m.group(3))
                if 1 <= mo <= 12 and 1 <= d <= 31:
                    return (datetime(y, mo, d), False)
            except (ValueError, TypeError):
                pass
        # January 15, 2026
        for fmt in ('%B %d, %Y', '%b %d, %Y', '%Y-%m-%d', '%d.%m.%Y'):
            try:
                return (datetime.strptime(date_str, fmt), False)
            except ValueError:
                continue
        if fallback_timestamp is not None:
            return (datetime.fromtimestamp(fallback_timestamp), True)
        return (datetime.min, True)

    def extract_metadata(self, content):
        """Extract title and other metadata from content"""
        lines = content.strip().split('\n')

        # Look for title directive first: <!-- title: Your Title -->
        title = None
        for line in lines[:5]:
            title_match = re.search(r'<!--\s*title:\s*(.*?)\s*-->', line, re.IGNORECASE)
            if title_match:
                title = title_match.group(1).strip()
                break

        # If no title directive, look for first H1 or substantial paragraph
        if not title:
            title = "Untitled Post"
            for line in lines[:10]:
                line = line.strip()
                if line.startswith('<h1>'):
                    title = re.sub(r'<[^>]+>', '', line)
                    break
                elif line and len(line) > 10 and not line.startswith('<'):
                    # Remove HTML tags and use as title
                    clean_line = re.sub(r'<[^>]+>', '', line)
                    if len(clean_line) > 10:
                        title = clean_line[:60]
                        break

        date_str = datetime.now().strftime("%d/%m-%Y")
        text_content = re.sub(r'<[^>]+>', '', content)
        word_count = len(text_content.split())
        reading_time = max(1, round(word_count / 160))

        return {
            'title': title,
            'date': date_str,
            'word_count': word_count,
            'reading_time': reading_time
        }

    def build_post(self, markdown_file):
        """Convert a single Markdown file to HTML"""

        try:
            # Read markdown
            with open(markdown_file, 'r', encoding='utf-8') as f:
                markdown_content = f.read()

            print(f"📖 Processing: {markdown_file}")

            # Only load math scripts on posts that contain math
            has_math = '$$' in markdown_content or r'\(' in markdown_content or r'\[' in markdown_content

            # Extract title and date from raw markdown first
            title = self.extract_title_from_markdown(markdown_content)
            date = self.extract_date_from_markdown(markdown_content)

            # Resolve internal post links [[post:Title]] or [[post:Title|Link text]]
            markdown_content = self._resolve_internal_links(markdown_content, self._build_post_mapping())

            # Convert to HTML
            html_content = self.convert_markdown_to_html(markdown_content)

            # Fix image paths for posts (posts live in posts/, images in images/)
            html_content = re.sub(r'src="images/', r'src="../images/', html_content)

            # Extract metadata (or use extracted title)
            metadata = self.extract_metadata(html_content)
            if title and title != "Untitled Post":
                metadata['title'] = title
            if date:
                metadata['date'] = date

            # Load template
            template = self.load_template()
            if not template:
                return False

            # Build final HTML
            blog_post = template.replace("Post Title - Tufte-Style Blog", f"{metadata['title']} - Tufte-Style Blog")
            blog_post = blog_post.replace("Your Post Title Here", metadata['title'])
            blog_post = blog_post.replace("{{ARTICLE_DATE}}", metadata['date'] + f" · {metadata['reading_time']} min read")

            # Inject KaTeX only when post has math (keeps other posts fast)
            katex_snippet = '''  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" crossorigin="anonymous"
    onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '\\\\[', right: '\\\\]', display: true}, {left: '\\\\(', right: '\\\\)', display: false}]});"></script>''' if has_math else ''
            blog_post = blog_post.replace("{{MATH_SCRIPTS}}", katex_snippet)

            # Replace content (escape backslashes so re.sub doesn't treat \s etc. in content as regex escapes)
            content_section = f'<section class="content">\n{html_content.replace(chr(92), chr(92)*2)}\n</section>'
            blog_post = re.sub(r'<section class="content">.*?</section>', content_section, blog_post, flags=re.DOTALL)

            # Generate output filename (use original filename as base to avoid collisions)
            base_name = markdown_file.stem  # Get filename without extension
            safe_title = re.sub(r'[^\w\-]', '', metadata['title'].lower().replace(' ', '-'))
            # If title is too short or would collide, use base filename
            if len(safe_title) < 5:
                safe_title = re.sub(r'[^\w\-]', '', base_name.lower())
            # Limit length but keep it unique
            safe_title = safe_title[:40]
            output_file = self.posts_dir / f"{safe_title}.html"

            # Ensure posts directory exists
            self.posts_dir.mkdir(exist_ok=True)

            # Write file
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(blog_post)

            print(f"✅ Generated: {output_file}")
            return True

        except Exception as e:
            print(f"❌ Error processing {markdown_file}: {e}")
            return False

    def build_all(self):
        """Build all Markdown files in content directory"""

        if not self.content_dir.exists():
            print(f"❌ Content directory not found: {self.content_dir}")
            return

        markdown_files = list(self.content_dir.glob("*.md"))

        if not markdown_files:
            print(f"❌ No .md files found in {self.content_dir}")
            print("Add some Markdown files to get started!")
            return

        print(f"🔄 Building {len(markdown_files)} posts...")

        success_count = 0
        posts_info = []
        
        for md_file in markdown_files:
            if self.build_post(md_file):
                success_count += 1
                # Collect post info for index
                with open(md_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                title = self.extract_title_from_markdown(content)
                date = self.extract_date_from_markdown(content)
                html_content = self.convert_markdown_to_html(content)
                metadata = self.extract_metadata(html_content)
                if title:
                    metadata['title'] = title
                if date:
                    metadata['date'] = date
                
                # Generate URL-safe filename (use original filename as base to avoid collisions)
                base_name = md_file.stem  # Get filename without extension
                safe_title = re.sub(r'[^\w\-]', '', metadata['title'].lower().replace(' ', '-'))
                # If title is too short or would collide, use base filename
                if len(safe_title) < 5:
                    safe_title = re.sub(r'[^\w\-]', '', base_name.lower())
                # Limit length but keep it unique
                safe_title = safe_title[:40]
                posts_info.append({
                    'title': metadata['title'],
                    'url': f"posts/{safe_title}.html",
                    'date': metadata['date'],
                    'reading_time': metadata['reading_time'],
                    'file_mtime': md_file.stat().st_mtime
                })

        print(f"\n✅ Built {success_count}/{len(markdown_files)} posts")
        
        # Generate index page
        self.build_index(posts_info)
        print(f"📁 Check the {self.posts_dir} directory")

    def build_index(self, posts_info):
        """Generate index.html with list of all posts"""
        
        # Sort posts by displayed post date (newest first); fall back to file mtime if no/unknown date
        def sort_key(post):
            dt, _ = self.parse_post_date_for_sort(post['date'], post['file_mtime'])
            return dt
        posts_info.sort(key=sort_key, reverse=True)
        
        # Generate post list HTML
        post_list_html = ""
        for post in posts_info:
            post_list_html += f'''      <div class="post-entry">
        <h2><a href="{post['url']}">{post['title']}</a></h2>
        <div class="article-meta">{post['date']} · {post['reading_time']} min read</div>
      </div>

'''
        
        # Create index HTML
        index_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>codexerrata</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400;1,8..60,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <article>
    <section class="content">
      <h1 class="site-title">Codex <span class="errata">Errata</span></h1>
      <p>Det här är min blogg. Det smärtar mig att behöva använda den termen, så nära associerat med Blondinbella, Jockiboi, och resten av bloggvärldens literära genier, men att kalla det något mer pretentiöst vore oärligt; dessa texter är inte polerade och välbetänkta. Snarare än att jag skriver ut redan prövade och granskade idéer är själva skrivandet prövningen och granskningsprocessen. </p>

      <p>Inte heller vill jag att texterna ska ses som nödvändigt representativa för mina åsikter. Något skrivs för att det är intressant, inte för att det är sant. </p>

      <hr>

{post_list_html}    </section>
  </article>

  <footer>
  </footer>
</body>
</html>'''
        
        with open(self.project_root / 'index.html', 'w', encoding='utf-8') as f:
            f.write(index_html)
        
        print("📄 Generated index.html")

    def watch_and_build(self):
        """Watch for changes and rebuild (basic implementation)"""
        print("👀 Watching for changes... (Ctrl+C to stop)")
        print("Add/edit .md files in content/ and run build.py again")

def main():
    import sys

    builder = BlogBuilder()

    if len(sys.argv) > 1:
        if sys.argv[1] == 'watch':
            builder.watch_and_build()
        else:
            # Build specific file
            md_file = Path(sys.argv[1])
            if md_file.exists():
                builder.build_post(md_file)
            else:
                print(f"❌ File not found: {md_file}")
    else:
        # Build all
        builder.build_all()

if __name__ == "__main__":
    main()