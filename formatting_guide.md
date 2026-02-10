# Preserving Google Docs Formatting

## 🎯 Best Methods (Preserves Italics, Bold, Paragraphs)

### Method 1: Direct HTML Paste (Recommended)

1. **Open Google Docs** in Chrome/Firefox
2. **File** → **Download** → Look for **"Web page (.html)"**
   - If you don't see it, try: **File** → **Publish to web** → **Publish**
   - Copy the published URL and use: `curl -o my-post.html "YOUR_URL"`

3. **Use the HTML converter:**
   ```bash
   python3 simple_converter.py your-post.html
   ```

### Method 2: Manual Copy-Paste (Most Control)

1. **Open** `paste-template.html` in Cursor
2. **In Google Docs:**
   - Select all (`Cmd+A`)
   - Copy (`Cmd+C`)
3. **In Cursor:**
   - Replace the `<!-- PASTE YOUR GOOGLE DOCS CONTENT HERE -->` section
   - Paste (`Cmd+V`)
4. **Save and preview**

**What this preserves:**
- ✅ Paragraph breaks
- ✅ Italics (`<em>`)
- ✅ Bold text (converted to `<strong>` small caps)
- ✅ Links
- ✅ All Google Docs formatting

### Method 3: Interactive Converter

```bash
python3 quick_publish.py
```

Then paste your content when prompted.

## 🔧 Formatting Conversion

When you paste from Google Docs, the formatting becomes:

| Google Docs | HTML Output |
|-------------|-------------|
| *Italics* | `<em>Italics</em>` |
| **Bold** | `<strong>Small caps</strong>` |
| Paragraph break | `<p>New paragraph</p>` |
| [Link](url) | `<a href="url">Link</a>` |

## 📋 Step-by-Step for Method 2

1. **Export from Google Docs:**
   ```bash
   # If HTML export works:
   # File → Download → Web page (.html)
   ```

2. **Open template:**
   ```bash
   open paste-template.html
   ```

3. **Copy from Google Docs:**
   - `Cmd+A` (select all)
   - `Cmd+C` (copy)

4. **Paste in template:**
   - Replace the placeholder text
   - `Cmd+S` (save)

5. **Preview:**
   - Drag file into browser

## 🎨 Advanced Formatting

After pasting, you can add:

```html
<div class="editorial">
  Editorial commentary here
</div>

<div class="abstract-box">
  Abstract or summary here
</div>

<h2>Section Heading</h2>

<blockquote>
  <p>Quoted text here</p>
</blockquote>
```

## 🛠️ Troubleshooting

**"HTML export not found?"**
- Use Chrome/Firefox, not Safari
- Try the "Publish to web" method

**Formatting looks wrong?**
- The paste method preserves everything
- Check that you're copying from Google Docs correctly

**Want to batch convert multiple posts?**
- Use Method 1 with multiple HTML files
- Run: `python3 simple_converter.py folder_with_html_files/`

## 📁 Files Created

- `paste-template.html` - Template for manual pasting
- `quick_publish.py` - Interactive converter
- `formatting_guide.md` - This guide

**Try Method 2 first** - it's the most reliable way to preserve all your formatting!