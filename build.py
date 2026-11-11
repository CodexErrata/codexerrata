#!/usr/bin/env python3
"""Build the independent Codex Errata magazine. Python standard library only."""
from pathlib import Path
from datetime import datetime
from html import escape, unescape
from html.parser import HTMLParser
import json, re, shutil, sys, hashlib
ROOT=Path(__file__).resolve().parent
sys.path.insert(0,str(ROOT/'lib'))
from legacy_converter import BlogBuilder
from metadata import read_metadata
OUT=ROOT/'dist'
OUT.mkdir(exist_ok=True)
for directory in ['assets','images']:
 shutil.copytree(ROOT/directory,OUT/directory,dirs_exist_ok=True)
for name in ['style.css','site.js']:
 shutil.copy2(ROOT/name,OUT/name)
ASSET_VERSIONS = {name: hashlib.sha256((ROOT/name).read_bytes()).hexdigest()[:10] for name in ['style.css','site.js', *[str(p.relative_to(ROOT)) for p in (ROOT/'assets').glob('*.svg')]]}
converter=BlogBuilder()
class Plain(HTMLParser):
 def __init__(self):super().__init__();self.parts=[]
 def handle_data(self,data):self.parts.append(data)
def plain(s):
 p=Plain();p.feed(s);return re.sub(r'\s+',' ',' '.join(p.parts)).strip()
def e(s):return escape(str(s),quote=True)
def date_info(raw):
 numbers=re.findall(r'\d+',raw)
 if len(numbers)==3:
  try:
   d,m,y=map(int,numbers);dt=datetime(d,m,y) if d>1000 else datetime(y,m,d)
   months=['januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december']
   return dt.isoformat()[:10],f'{dt.day} {months[dt.month-1]} {dt.year}'
  except ValueError:pass
 return '',raw or 'Odaterat'
def excerpt(body):
 candidates=re.findall(r'<p[^>]*>(.*?)</p>',body,re.S)
 text=plain(candidates[0] if candidates else body)
 text=text[:205]
 return text.rsplit(' ',1)[0]+'…' if len(text)>=205 else text
records=json.loads((ROOT/'catalog.json').read_text())
# Read all titles first so internal links follow the Markdown metadata too.
for r in records:
 metadata, body_source = read_metadata((ROOT/r['source']).read_text(encoding='utf-8-sig'))
 r['title'] = metadata.get('title') or r['title']
 r['description'] = metadata.get('description', '')
 r['date'], r['display_date'] = date_info(metadata.get('date', ''))
 r['_body_source'] = body_source
 if r['status'] == 'Publicerat' and not r['description']:
  print(f"Note: {r['source']} has no description; its preview sentence will be omitted.")
mapping={r['title']:r['slug']+'.html' for r in records}
for r in records:
 text=r.pop('_body_source')
 text=converter._resolve_internal_links(text,mapping)
 body=converter.convert_markdown_to_html(text)
 body=re.sub(r'src="images/',r'src="../images/',body)
 body=re.sub(r'<(/?)h1\b',r'<\1h2',body)
 body=body.replace('class="popup"','class="popup" tabindex="0"')
 r.update(body=body,minutes=max(1,round(len(plain(body).split())/180)),url='posts/'+r['slug']+'.html')
records.sort(key=lambda x:x['date'],reverse=True)
legacy=[]
for f in sorted((ROOT/'originals/posts').glob('*.html')):
 if f.name=='post-template.html':continue
 text=f.read_text();body=re.search(r'<section class="content">(.*?)</section>',text,re.S)
 title=re.search(r'<h1[^>]*>(.*?)</h1>',text,re.S)
 if not body or not title:continue
 b=body.group(1);meta=re.search(r'<div class="article-meta">(.*?)</div>',text,re.S)
 raw=plain(meta.group(1)).split('·')[0].strip() if meta else ''
 date,label=date_info(raw)
 legacy.append(dict(title=plain(title.group(1)),slug=f.stem,topic='Tidigare versioner',art='compass',status='Tidigare version',body=re.sub(r'<(/?)h1\b',r'<\1h2',b).replace('class="popup"','class="popup" tabindex="0"'),description=excerpt(b),minutes=max(1,round(len(plain(b).split())/180)),date=date,display_date=label,url='versions/'+f.name,source='originals/posts/'+f.name))
# Preserve cross-links between historical pages in the same folder.
all_records=records+legacy
published=[r for r in records if r['status']=='Publicerat']
counts={s:sum(r['status']==s for r in all_records) for s in ['Publicerat','Manuskript','Tidigare version']}

def header(prefix='',home=False):
 return f'''<a class="skip" href="#main">Hoppa till innehållet</a><header class="site-header"><div class="topbar"><a class="brand" href="{prefix}index.html" aria-label="Codex Errata – startsida"><span class="brand-mark" aria-hidden="true">C<span>e</span></span><span>Codex<br>Errata</span></a></div><nav class="nav" aria-label="Huvudmeny"><div><details class="topics"><summary>Ämnen <span aria-hidden="true">⌄</span></summary><div class="topic-menu"><a href="{prefix}index.html">Alla ämnen</a>{''.join(f'<a href="{prefix}index.html?topic={e(t)}">{e(t)}</a>' for t in ['Filosofi','Samhälle','Ekonomi','Kunskap'])}</div></details></div></nav></header>'''
def footer(prefix=''):
 return f'''<footer class="site-footer"><div><a class="footer-wordmark" href="{prefix}index.html">Codex <span class="wordmark-errata">Errata</span><span>↗</span></a></div><div class="footer-links"><a href="#top">Till toppen ↑</a></div><div class="footer-bottom"><span>CODEX ERRATA</span><span>Ord är till för att prövas.</span></div></footer>'''
def document(title,content,prefix='',description='',home=False,math=False):
 math_assets=''
 if math:
  math_assets=f'''<link rel="stylesheet" href="{prefix}assets/katex/katex.min.css"><script defer src="{prefix}assets/katex/katex.min.js"></script><script defer src="{prefix}assets/katex/auto-render.min.js"></script>'''
 return f'''<!doctype html><html lang="sv" id="top"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{e(title)} — Codex Errata</title><meta name="description" content="{e(description or 'Texter om filosofi, samhälle, ekonomi och kunskap.')}"><meta name="theme-color" content="#fffaf7"><link rel="icon" href="{prefix}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="{prefix}style.css?v={ASSET_VERSIONS['style.css']}"><script defer src="{prefix}site.js?v={ASSET_VERSIONS['site.js']}"></script>{math_assets}</head><body>{header(prefix,home)}{content}{footer(prefix)}</body></html>'''
def write(path,text):
 p=OUT/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text)
def meta(r):return f'<span>{e(r["display_date"])}</span><span>{r["minutes"]} min läsning</span>'
def card(r,style=''):
 return f'''<article class="story-card {style}"><a class="art-link" href="{e(r['url'])}" tabindex="-1" aria-hidden="true"><img src="assets/{r['art']}.svg?v={ASSET_VERSIONS['assets/'+r['art']+'.svg']}" alt="" loading="lazy" width="900" height="640"></a><div class="eyebrow">{e(r['topic'])}</div><h3><a href="{e(r['url'])}">{e(r['title'])}</a></h3><p>{e(r['description'])}</p><div class="story-meta">{meta(r)}</div></article>'''
def illustrated_story(r, index):
 description = r['description']
 return f'''<article class="illustrated-story art-{r['art']}" aria-labelledby="story-{index}" data-topic="{e(r['topic'])}"><a class="poster-art" href="{e(r['url'])}" tabindex="-1" aria-hidden="true"><img src="assets/{r['art']}.svg?v={ASSET_VERSIONS['assets/'+r['art']+'.svg']}" alt="" width="900" height="640" {('fetchpriority="high"' if index == 0 else 'loading="lazy"')}></a><div class="poster-copy"><div class="eyebrow">{('Senaste texten / ' if index == 0 else '')}{e(r['topic'])}</div><h2 id="story-{index}"><a href="{e(r['url'])}">{e(r['title'])}</a></h2>{('<p>'+e(description)+'</p>') if description else ''}<div class="poster-bottom"><div class="story-meta">{meta(r)}</div><a class="poster-read" href="{e(r['url'])}" aria-label="Läs {e(r['title'])}">Läs texten ↗</a></div></div></article>'''
home=f'''<main id="main" class="home"><div class="masthead"><h1>Codex <span class="wordmark-errata">Errata</span><span class="masthead-star" aria-hidden="true">✳</span></h1><div class="masthead-caption"><span>FILOSOFI · SAMHÄLLE · KUNSKAP</span><span>ESSÄER &amp; ANTECKNINGAR</span></div></div><div class="topic-selection" hidden><span id="selected-topic" role="status"></span><a href="index.html">Visa alla texter ↗</a></div><section class="illustrated-feed" aria-label="Alla publicerade texter">{''.join(illustrated_story(r,i) for i,r in enumerate(published))}</section></main>'''
write('index.html',document('Hem',home,home=True))
for r in all_records:
 prefix='../';body=r['body'];heads=[]
 def heading(m):
  n=len(heads)+1;text=plain(m.group(2));heads.append((n,text))
  return f'<h{m.group(1)} id="avsnitt-{n}"{m.group(3)}>{m.group(2)}</h{m.group(1)}>'
 # Keep original heading content and styling while adding stable anchors.
 def add_heading(m):
  n=len(heads)+1;heads.append((n,plain(m.group(3))))
  return f'<h{m.group(1)} id="avsnitt-{n}"{m.group(2)}>{m.group(3)}</h{m.group(1)}>'
 body=re.sub(r'<h([23])([^>]*)>(.*?)</h\1>',add_heading,body,flags=re.S)
 notice=''
 if r['status']!='Publicerat':
  notice=f'<aside class="status-note">{e(r["status"])} — bevarad från originalbloggen. '+('Den här texten ligger utanför den publicerade samlingen.' if r['status']=='Manuskript' else 'En tidigare sparad version av texten.')+'</aside>'
 if not plain(body):body='<p class="empty-manuscript">Det här manuskriptet är ännu tomt.</p>'
 related=[p for p in published if p['url']!=r['url']][:2]
 content=f'''<div class="reading-progress" aria-hidden="true"></div><main id="main" class="article-page article-theme-{r['art']}"><div class="article-hero poster-art" aria-hidden="true"><img src="../assets/{r['art']}.svg?v={ASSET_VERSIONS['assets/'+r['art']+'.svg']}" alt="" width="900" height="640" fetchpriority="high"></div><header class="article-intro"><a class="back-link" href="../index.html">← Till texterna</a><div class="eyebrow">{e(r['topic'])}</div><h1>{e(r['title'])}</h1><div class="article-byline"><span>Codex Errata</span><span>{e(r['display_date'])}</span><span>{r['minutes']} min läsning</span></div>{notice}</header><div class="reading-layout"><aside class="reading-aside"><span class="eyebrow">I denna text</span><nav aria-label="Artikelns innehåll">{''.join(f'<a href="#avsnitt-{n}">{e(t)}</a>' for n,t in heads) if heads else '<a href="#article-body">Texten</a>'}</nav><button id="copy-link" type="button">Kopiera länk ↗</button><span id="copy-status" role="status"></span></aside><article class="article-body" id="article-body">{body}<div class="end-mark" aria-label="Slut på texten">✳</div></article></div><section class="next-reading"><div class="section-heading"><h2>Läs vidare</h2><a href="../index.html">Alla texter ↗</a></div><div class="next-grid">{''.join(f'<article><span class="eyebrow">{e(p["topic"])}</span><h3><a href="../{e(p["url"])}">{e(p["title"])}</a></h3><p>{e(p["description"])}</p></article>' for p in related)}</div></section></main>'''
 write(r['url'],document(r['title'],content,prefix,description=r['description'],math=('$$' in body or r'\(' in body or r'\[' in body)))
report={'source_manuscripts':len(records),'published':counts['Publicerat'],'drafts':counts['Manuskript'],'historical_pages':len(legacy),'pages':len(all_records)+1,'records':[{k:r[k] for k in ['source','title','status','url']} for r in all_records]}
(ROOT/'import-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(f'Built {report["pages"]} pages: {counts["Publicerat"]} published essays, {counts["Manuskript"]} manuscripts, {len(legacy)} historical versions, homepage.')
