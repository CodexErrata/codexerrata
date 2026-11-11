# Codex Errata — editorial edition

The Codex Errata blog, with a Works in Progress–inspired magazine design. It replaces the earlier Tufte-style version, which is preserved in `originals/` and in git history on `main`.

## Open the blog

Open `dist/index.html` in a web browser. The finished website is in `dist/`; topic browsing, illustrations, and mathematical notation use local files. Nothing has been published online.

For a local web preview, run this from this folder:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Then visit `http://127.0.0.1:4173`. Press Control-C in that terminal when finished.

## What was imported

- **8 published essays:** the pieces linked from the original homepage, rendered from their current Markdown sources.
- **8 manuscripts:** unlisted source texts, unfinished notes, and the empty “Om amerikansk hegemoni” file. They remain in the project and retain their generated article pages.
- **20 historical article pages:** all previous HTML article versions, including the existing sample articles. The original post template is preserved as a source file, not presented as an essay.
- **58 original files:** an exact copy of all original project files outside generated output, version-control metadata, caches, and operating-system metadata. This includes source manuscripts, HTML, sample text, writing guides, original code, and the three original charts.

`originals/` preserves the imported files byte for byte. `import-checksums.json` records their SHA-256 hashes. `import-report.json` maps the imported articles to their new pages. Duplicate and historical versions remain labeled in their generated pages; they are not silently discarded. The reader-facing archive page has been removed.

The original homepage and the current source do not always agree: for example, the source title for “Kain och Abel” still includes “(work in progress)”. The new edition keeps the current source title and content. Dates such as `24-8/-2026` are displayed as `24 augusti 2026`; the original date directives remain intact. Reading times are recalculated at 180 words per minute.

## Edit and rebuild

Edit the files under `content/` and `drafts/`, then run:

```sh
python3 build.py
```

The build uses Python's standard library and requires no installation. The custom Markdown renderer from the original blog is retained under `lib/` so internal links, hover notes, small caps, and content containers keep working. `catalog.json` controls paths, categories, status, illustration choice, and fallback titles. The Markdown title takes precedence. Add a catalog entry when adding a new manuscript. The `originals/` folder is a preserved snapshot, not the editable source.

## Titles, dates, and preview sentences

Add the following comment directives at the very beginning of a Markdown file:

```markdown
<!-- title: Nollsummespel -->
<!-- date: 2/2-2026 -->
<!-- description: Vissa branscher blir rikare utan att världen blir det. -->

The article starts here.
```

`description` is the short sentence shown under the title on the homepage and in related-article previews. It also supplies the article's HTML description metadata. It never appears in the article body. Use plain text, not Markdown formatting or HTML; quotes, ampersands, and Swedish characters are supported. Keep it to one short sentence. A longer directive can span lines; whitespace is collapsed into a single line.

Fields are case-insensitive and can appear in any order within the opening metadata block. If a published article has no description (or an empty description), its preview sentence is omitted and the build prints a note; it does not substitute the article's first paragraph. Editing `title` updates the displayed title while the catalog slug keeps its URL stable. Run `python3 build.py` after editing.

Eight Swedish descriptions have been drafted for the published essays. The preserved `originals/` snapshot is unchanged; only the editable Markdown copies contain the new field.

The generated website can be copied elsewhere as the entire `dist/` folder. Manuscripts and historical versions are included in that folder; select what you want to share before a future publication.

## Design and dependencies

Pale warm white, fine dividing rules, serif headlines, monospace navigation, and large illustrated story panels with colored captions. The responsive layout retains the Codex Errata masthead. Search, the introductory tagline, the Home button, archive links and page, and the About page have been removed. Topic links filter the illustrated homepage. The layout takes inspiration from https://worksinprogress.co/; its articles, logo, and artwork are not reused.

The nine new editorial illustrations are in `assets/`. The three original article charts are in `images/`. System fonts keep the site independent of third-party font services. KaTeX 0.16.9 and its fonts are vendored locally for offline math rendering; its MIT license is in `assets/katex/LICENSE`.

## Verification

The import check verified 37 generated pages, local links and anchors, assets, exact preservation of all 58 original files, and preservation of all 16 manuscript bodies, allowing the new description directives. Browser checks covered desktop and 390px mobile layouts, homepage topic filtering, article images, and mathematical rendering. No horizontal page overflow was found in the checked mobile home and article views.
