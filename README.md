# Tufte-Style Blog

A static site blog featuring long-form classic typography inspired by Edward Tufte's design principles.

## Features

- **Typography**: Source Serif 4 font (gwern.net style) at 1.15rem with classic typographic rules
- **Markdown Processing**: Automatic conversion from `.md` files to HTML pages
- **Paragraph Indentation**: 1.5em indent for all paragraphs
- **Smart Indentation**: First paragraph after headings and blockquotes has no indent
- **Emphasis**: Uses italics and small caps instead of bold text
- **Abstract Box**: Special styling for abstracts with light borders and subtle backgrounds
- **Editorial Box**: Container for commentary and notes with subtle background
- **Color Scheme**: Grayscale dark mode for comfortable reading
- **Responsive**: Adapts gracefully to mobile devices

## Quick Start

1. **Add your content**: Create `.md` files in the `content/` folder
2. **Build the site**: Run `python3 build.py`
3. **View your posts**: Check the `posts/` folder for generated HTML files

## Writing Content

### Markdown Support

- **Headers**: `# Title`, `## Section`, `### Subsection`
- **Emphasis**: `*italics*`, `**small caps**`
- **Links**: `[text](url)`
- **Code**: `inline code`, ````code blocks````
- **Lists**: `- item`, `* item`, `+ item`
- **Blockquotes**: `> quoted text`
- **Hover Popups**: `[[hover text|popup content]]` - shows popup on hover

### Special Classes & Semantic Containers

You can use HTML directly in your Markdown to add semantic containers:

**Abstract Box:**
```html
<div class="abstract-box">
Your abstract text here. "Abstract" label appears automatically.
</div>
```

**Editorial/Commentary:**
```html
<div class="editorial">
Your commentary or notes. "Commentary" label appears automatically.
</div>
```

**Aside** (tangential content):
```html
<div class="aside">
Side discussion or tangential information.
</div>
```

**Note** (informational):
```html
<div class="note">
Important clarification or additional information.
</div>
```

**Epigraph** (opening quote, right-aligned):
```html
<div class="epigraph">
<p>A profound opening quote.</p>
<p>— Author Name</p>
</div>
```

**Warning** (cautions):
```html
<div class="warning">
Important warning or caution for readers.
</div>
```

## Typography Rules

### Paragraphs
- Every paragraph is indented by 1.5em
- Top and bottom margins are set to 0
- First paragraph after headings (h1-h6) or blockquotes has no indent
- Text is justified for a classic book-like appearance

### Emphasis
- **Italics** (`<em>` or `<i>`) for gentle emphasis
- **Small caps** (`<strong>` or `<b>`) for stronger emphasis without bold
- Avoids bold text to maintain even typographic color

### Fonts
- Primary: Georgia (system font, gwern.net style)
- Fallback: Libre Baskerville, Palatino, Palatino Linotype, serif
- Size: 1.15rem for optimal long-form readability

## Project Structure

```
tufte-blog/
├── content/            # Your Markdown files (.md)
├── posts/              # Generated HTML pages
├── css/
│   └── style.css       # Main stylesheet
├── build.py            # Build script
├── index.html          # Homepage
├── paste-template.html # HTML template for manual editing
└── README.md           # This file
```

## Tufte Design Principles

This design follows Edward Tufte's principles:
- Wide margins for sidenotes and marginalia
- High-quality typography
- Integration of text and supporting elements
- Minimal visual noise
- Respect for the reader's intelligence

## Customization

To modify colors, edit the CSS variables in `style.css`:

```css
:root {
  --bg-primary: #1a1a1a;
  --text-primary: #e0e0e0;
  /* etc. */
}
```

## License

Free to use and modify as you wish.
