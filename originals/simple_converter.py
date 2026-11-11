#!/usr/bin/env python3
"""
Simple Google Docs to Blog Converter
No external dependencies required
"""

import os
import re
from datetime import datetime
from pathlib import Path

def clean_google_docs_text(text):
    """Clean Google Docs text and convert to HTML paragraphs"""

    # Split by double line breaks (paragraphs)
    paragraphs = re.split(r'\n\s*\n', text.strip())

    # Clean up each paragraph
    html_paragraphs = []
    for para in paragraphs:
        para = para.strip()
        if para:
            # Remove extra whitespace and line breaks
            para = re.sub(r'\s+', ' ', para)
            # Skip if it's just whitespace
            if para.strip():
                html_paragraphs.append(f"<p>\n{para}\n</p>")

    return '\n\n'.join(html_paragraphs)

def extract_title(text):
    """Extract title from first line or first meaningful paragraph"""
    lines = text.strip().split('\n')

    for line in lines[:3]:  # Check first 3 lines
        line = line.strip()
        if line and len(line) > 10:  # Must be substantial
            # Remove markdown-style formatting
            line = re.sub(r'^[#*•\-]+\s*', '', line)
            return line

    return "Untitled Post"

def create_blog_post(title, content, template_path="posts/post-template.html"):
    """Create blog post from template"""

    # Load template
    try:
        with open(template_path, 'r', encoding='utf-8') as f:
            template = f.read()
    except FileNotFoundError:
        print("❌ Template not found. Make sure post-template.html exists.")
        return None

    # Generate meta info
    date_str = datetime.now().strftime("%B %d, %Y")
    word_count = len(content.split())
    reading_time = max(1, round(word_count / 200))
    meta = f"{date_str} · {reading_time} min read"

    # Replace in template
    blog_post = template.replace("Post Title - Tufte-Style Blog", f"{title} - Tufte-Style Blog")
    blog_post = blog_post.replace("Your Post Title Here", title)
    blog_post = blog_post.replace("Date · Reading time", meta)

    # Replace content
    content_section = f'<section class="content">\n{content}\n</section>'
    blog_post = re.sub(r'<section class="content">.*?</section>', content_section, blog_post, flags=re.DOTALL)

    return blog_post

def convert_google_docs_file(input_file, output_file=None):
    """Convert a Google Docs HTML export to blog post"""

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract text content (simple approach)
        # Remove HTML tags but keep structure
        content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)
        content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
        content = re.sub(r'<[^>]+>', '\n', content)  # Replace tags with newlines

        # Clean up whitespace
        content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)

        # Extract title
        title = extract_title(content)

        # Clean content
        clean_content = clean_google_docs_text(content)

        # Create blog post
        blog_post = create_blog_post(title, clean_content)

        if blog_post:
            # Generate output filename
            if not output_file:
                base_name = Path(input_file).stem
                output_file = f"posts/{base_name}-converted.html"

            # Ensure posts directory exists
            os.makedirs("posts", exist_ok=True)

            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(blog_post)

            print(f"✅ Converted: {input_file}")
            print(f"📄 Output: {output_file}")
            print(f"📖 Title: {title}")
            return True

    except Exception as e:
        print(f"❌ Error converting {input_file}: {e}")
        return False

def main():
    import sys

    if len(sys.argv) < 2:
        print("Usage: python3 simple_converter.py <google_docs_file.html> [output_file.html]")
        print("Or: python3 simple_converter.py <directory_with_html_files>")
        return

    input_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else None

    path = Path(input_path)

    if path.is_file():
        convert_google_docs_file(input_path, output_path)
    elif path.is_dir():
        html_files = list(path.glob("*.html"))
        if not html_files:
            print(f"No HTML files found in {input_path}")
            return

        print(f"Converting {len(html_files)} files...")
        for html_file in html_files:
            convert_google_docs_file(str(html_file))
    else:
        print(f"Path not found: {input_path}")

if __name__ == "__main__":
    main()