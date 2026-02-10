# Google Docs to Tufte Blog Converter

A Python script to automatically convert your Google Docs HTML exports into clean Tufte-style blog posts.

## How to Use

### Step 1: Export from Google Docs

1. Open your Google Doc
2. Go to **File** → **Download** → **Web Page (.html)**
3. Save the HTML file to your computer

### Step 2: Run the Converter

#### Convert Single File:
```bash
python3 convert_google_docs.py path/to/your-doc.html
```

#### Convert Multiple Files:
```bash
python3 convert_google_docs.py /path/to/folder/with/html/files/
```

### Step 3: Check Your New Blog Post

The script will create files in the `posts/` folder with proper Tufte formatting.

## What the Script Does

✅ **Cleans Google Docs formatting** - Removes extra styles and metadata
✅ **Extracts titles** - Uses first heading or first line as title
✅ **Creates proper paragraphs** - Splits content into `<p>` tags
✅ **Applies Tufte styling** - Uses your blog's CSS classes
✅ **Generates meta info** - Adds reading time and date
✅ **Maintains headings** - Converts Google Docs headings to HTML

## Batch Processing Multiple Posts

If you have many Google Docs posts:

```bash
# Put all your exported HTML files in a folder called 'google_exports'
mkdir google_exports
# Move all your .html files there
mv *.html google_exports/

# Convert all at once
python3 convert_google_docs.py google_exports/
```

## Manual Editing (Optional)

After conversion, you can:
- Edit the title in the HTML
- Add emphasis: `<em>italics</em>` or `<strong>small caps</strong>`
- Add editorial boxes: `<div class="editorial">notes</div>`
- Add abstracts: `<div class="abstract-box">summary</div>`

## Requirements

- Python 3.6+
- BeautifulSoup4 (`pip install beautifulsoup4`)

## Troubleshooting

**Script not working?**
```bash
pip install beautifulsoup4
python3 convert_google_docs.py --help
```

**Content not formatting correctly?**
- Try exporting from Google Docs again
- Check that you're using "Web Page (.html)" format
- The script works best with simple text documents

**Want custom formatting?**
The script is in `convert_google_docs.py` - you can modify it to handle specific formatting needs.