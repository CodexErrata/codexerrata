# Writing Guide — How to Do Everything

A short reference for writing and publishing posts on this blog.

---

## 1. Creating a New Blog Post

1. **Create a new file** in the `content/` folder.
2. **Name it** something like `my-post-name.md` (use lowercase, hyphens, no spaces). The filename is used for the URL (e.g. `my-post-name` → `posts/my-post-name.html`).
3. **At the very top**, add the title and optional date:

```markdown
<!-- title: My Post Title -->
<!-- date: 26/01-2026 -->
```

4. **Write your content** below (plain text, markdown, and HTML as needed).
5. **Save the file** (⌘ + S).
6. **Build the site:** in Terminal, run:

```bash
cd /Users/Thompson/tufte-blog
python3 build.py
```



- **Title:** Required. Use exactly one `<!-- title: Your Title -->` line at the top.
- **Date:** Optional. Use `<!-- date: DD/MM-YYYY -->` (e.g. `26/01-2026`). If you omit it, the build uses today’s date in the same format.


---

## 2. Container (Box Around Text)

Use a **container** to put a block of text in a light box with a border.

**Syntax:** paste this in your markdown, with a blank line before and after:

```html
<div class="container">
Your text here. It can be several lines.
No label is added — just the box.
</div>
```

**Important:** Keep a blank line between the container and the surrounding paragraphs so the build doesn’t wrap it incorrectly.

---

## 3. Quotes (Blockquote with Attribution)

Use this when you want a proper quote with curly quotation marks and an author line.

**Syntax:** use HTML only (not the `> ` markdown style):

```html
<blockquote>
<p>The details are not the details. They make the design.</p>
<footer>— Charles Eames</footer>
</blockquote>
```

- The quote appears in typewriter font, 70% width, with large curly quotes.
- The `<footer>` line is shown in white, right-aligned, as the attribution.

---

## 4. Italics (Cursive / Emphasis)

- **In markdown:** wrap the word or phrase in single asterisks: `*like this*`.
- **In HTML:** use `<em>like this</em>` or `<i>like this</i>`.

Example: `*This is italic*` → *This is italic*.

---

## 5. Small Caps (No Bold)

Bold is turned into small caps in the design. To get that effect:

- **In markdown:** use double asterisks: `**like this**`.
- **In HTML:** use `<strong>like this</strong>` or `<b>like this</b>`.

Example: `**Small caps**` → SMALL CAPS (styled as small caps).

---

## 6. Hover Popup (Tooltip on a Word or Phrase)

Use this so that when the reader hovers over a word or phrase, a short explanation appears.

**Syntax:** `[[visible text|text that appears on hover]]`

- **Line breaks:** Put a real new line in the tooltip text (after the `|`) and it will show as a line break in the popup.
- **Italic in popup:** Use `*like this*` in the tooltip text.
- **Small caps in popup:** Use `**like this**` in the tooltip text.

**Example (single line):**

```markdown
The term [[mimetisk teori|Girards teori om att begär imiterar andras begär]] is central.
```

    **Example (with line break and italic):**

```markdown
[[word|First line of tooltip.
Second line with *italic* here.]]
```

- The part before `|` is what readers see and hover over.
- The part after `|` is the tooltip; newlines, `*italic*`, and `**small caps**` work there.

---

## 7. Headers

- `# Heading` → top-level heading (H1)
- `## Heading` → section (H2)
- `### Heading` → subsection (H3)

You can write `##Heading` with no space; it still works.

---

## 8. Links

**External links** — standard markdown:

```markdown
[link text](https://example.com)
```

**Internal links to other posts** — use the post title (must match exactly):

```markdown
[[post:Jerusalem och Aten]]
```

With custom link text:

```markdown
[[post:Jerusalem och Aten|read that essay]]
```

The build resolves these to the correct post URL automatically.

---

## 9. Images

1. **Put image files** in the `images/` folder (at the same level as `content/`).
2. **In your markdown**, use:

```markdown
![Short description of the image](images/your-image.jpg)
```

- The part in square brackets is the **alt text** (for accessibility and if the image doesn’t load).
- The path must start with `images/` and match the filename in the `images/` folder (e.g. `images/photo.png`, `images/diagram.svg`).
- Supported formats: JPG, PNG, GIF, WebP, SVG, etc.

**Example:** If you have `images/sketch.png`, write:

```markdown
![A rough sketch of the idea](images/sketch.png)
```

Images are shown at full width (up to the column), centered, with a thin border.

---

## 10. Lists

Start a line with `- `, `* `, or `+ ` and a space:

```markdown
- First item
- Second item
```

---

## 11. Code

- **Inline code:** wrap in backticks: `` `code` ``.
- **Code block:** use three backticks on their own lines around the code:

````markdown
```
def hello():
    print("hello")
```
````

---

## 12. Horizontal Rule

A line with only three hyphens becomes a horizontal line:

```markdown
---
```

---

## 13. Checklist Before Publishing

1. **Title** at top: `<!-- title: Your Post Title -->`
2. **Date** (optional): `<!-- date: DD/MM-YYYY -->`
3. **Save** the `.md` file (⌘ + S)
4. **Run** `python3 build.py` in the project folder
5. **Refresh** the blog in your browser

---

## File Locations

| What              | Where |
|-------------------|--------|
| Your posts        | `content/*.md` |
| Images            | `images/` (put files here, reference as `images/filename.jpg`) |
| Generated site    | `index.html` and `posts/*.html` |
| Styles            | `css/style.css` |
| Build script      | `build.py` |

---

## Quick Reference

| Want this        | Do this |
|------------------|--------|
| New post         | New `.md` in `content/` with `<!-- title: ... -->` at top, then `python3 build.py` |
| Container        | `<div class="container">...</div>` with blank lines around it |
| Quote + author   | `<blockquote><p>...</p><footer>— Name</footer></blockquote>` |
| Italics          | `*text*` or `<em>text</em>` |
| Small caps       | `**text**` or `<strong>text</strong>` |
| Hover popup      | `[[visible\|tooltip]]` |
| Section title    | `## Section title` |
| Link             | `[text](url)` |
| Image            | `![alt text](images/filename.jpg)` — put files in `images/` folder |
| Date format      | `DD/MM-YYYY` (e.g. `26/01-2026`) |
