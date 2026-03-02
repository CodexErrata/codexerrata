# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static blog ("Codex Errata") with a Tufte-inspired typographic design. Content is written in Markdown in `content/`, and `build.py` converts it to HTML in `posts/`. The site is Swedish-language.

## Build Command

```bash
python3 build.py
```

This builds all `.md` files in `content/` → `posts/*.html` and regenerates `index.html`. No dependencies beyond the Python standard library.

To build a single post:
```bash
python3 build.py content/my-post.md
```

## Architecture

**Source of truth:** `content/*.md` — these are the authored posts.
**Generated output:** `posts/*.html` and `index.html` — both are rebuilt by `build.py` and should not be manually maintained long-term.

**Build pipeline (`build.py`):**
1. Reads all `.md` files from `content/`
2. Extracts `<!-- title: ... -->` and `<!-- date: DD/MM-YYYY -->` directives from the top of each file
3. Converts Markdown to HTML (custom converter — no external libraries)
4. Fills `posts/post-template.html` with the post content
5. Generates `posts/<slug>.html` (slug = first 40 chars of title, lowercased, non-word chars stripped)
6. Rebuilds `index.html` with all posts sorted newest-first

**Post template:** `posts/post-template.html` — uses literal string replacement (not Jinja/templating engine). Placeholders: `{{TITLE}}`, `{{ARTICLE_DATE}}`, `{{MATH_SCRIPTS}}`.

**Styling:** Single CSS file at `css/style.css`. Posts link to `../css/style.css`; index links to `css/style.css`.

**Math:** KaTeX is injected automatically only into posts that contain `$$`, `\(`, or `\[`.

## Content Format

Each `.md` file starts with HTML comment directives:
```markdown
<!-- title: Post Title Here -->
<!-- date: 26/01-2026 -->
```

The date format is `DD/MM-YYYY`. If omitted, today's date is used.

## Custom Markdown Extensions

The Markdown converter supports these beyond standard syntax:

| Syntax | Output |
|--------|--------|
| `[[visible\|tooltip text]]` | Hover popup |
| `[[post:Title]]` | Internal link to another post by title |
| `[[post:Title\|link text]]` | Internal link with custom text |
| `**text**` | Small caps (not bold — CSS converts `<strong>` to small caps) |
| `*text*` | Italics |
| Extra blank lines between paragraphs | Increased top margin (each extra blank = +1.5em) |

## HTML Containers (used directly in Markdown)

Blank lines must surround HTML blocks:

```html
<div class="container">boxed text</div>
<blockquote><p>Quote</p><footer>— Author</footer></blockquote>
```

## Slug/URL Generation

The output filename is derived from the post title: lowercase, spaces→hyphens, non-`\w` chars removed, truncated to 40 chars. If that slug is shorter than 5 chars, the `.md` filename stem is used instead. This means **renaming a content file or changing its title can change the output URL**.

## Images

Place image files in `images/`. Reference in Markdown as `images/filename.jpg`. The build rewrites these to `../images/` for posts automatically.
