# Alaska Film & TV Coding Agent Handoff

Use this as the source brief for another Alaska Film & TV site. It extracts the reusable brand, content, assets, and counter animation from this prototype.

## Important Content Caveat

This prototype intentionally contains placeholder or unverified content. Do not treat direct staff names, direct personal emails, phone numbers, team portraits, production years, season counts, and some production descriptions as final approved facts. Replace those with approved Alaska source material before publishing.

The safest reusable pieces are the company metadata, logo, visual direction, route/navigation structure, production-title catalogue, stats counter behavior, and static asset paths.

## Core Identity

```ts
export const alaskaSite = {
  name: "Alaska Film & TV",
  legalName: "Alaska Film & TV AB",
  url: "https://www.alaskafilmtv.com",
  address: "Stockholm, Sverige",
  email: "info@alaskafilmtv.com",
  jobApplicationsEmail: "ansokan@alaskafilmtv.com",
  accent: "#5b5f43",
  socials: {
    instagram: "https://www.instagram.com/alaskafilmtv/",
    facebook: "https://www.facebook.com/alaskafilmtv/"
  }
};
```

Recommended positioning:

- Swedish: "Alaska Film & TV producerar faktabaserad tv, dokumentär, true crime och uppdragsproduktion för broadcaster, företag och offentliga aktörer."
- English: "Alaska Film & TV produces factual entertainment, documentary, true crime and commissioned editorial work for broadcasters, companies and public bodies."
- Footer Swedish: "Produktion för broadcaster, företag och offentliga aktörer i miljöer där förtroende, tillträde och leveransdisciplin är avgörande."
- Footer English: "Production for broadcasters, companies and public bodies in environments where trust, access and delivery discipline matter."

## Brand Assets To Copy

Copy these files from `public/` into the new site's public/static assets folder:

```text
public/alaska-logo-white.png        # 750 x 157 PNG, white logo with alpha
public/favicon.svg                  # simple black square / white A favicon
public/og-default.svg               # default OpenGraph image, 1200 x 630
public/mountains/silhouette.png     # 1508 x 218 decorative mountain silhouette
public/mountains/skyline.png        # 1983 x 793 mountain image, larger/heavier
public/awards/*.jpg                 # Kristallen/award ceremony images
public/productions/*.jpg            # production artwork and card artwork
```

Logo usage:

```html
<!-- On a dark background, use the white PNG directly. -->
<img src="/alaska-logo-white.png" width="750" height="157" alt="Alaska Film & TV" />

<!-- On a light background, invert the white PNG so it appears black. -->
<img class="brand-logo brand-logo-dark" src="/alaska-logo-white.png" width="750" height="157" alt="" />
```

```css
.brand-logo {
  display: block;
  width: clamp(7rem, 22vw, 10.5rem);
  height: auto;
}

.brand-logo-dark {
  filter: invert(1);
}

.footer-logo {
  display: block;
  width: 12rem;
  height: auto;
  max-width: 100%;
}
```

## Visual Direction

The existing site is restrained, editorial, bilingual, and B2B-focused. It should feel credible to commissioning editors, public authorities, procurement officers, corporate communications teams, press, and industry buyers.

Design tokens:

```ts
export const alaskaTheme = {
  colors: {
    ink: "#000000",
    paper: "#f2e7d8",
    bone: "#fffaf2",
    line: "#d7bea0",
    moss: "#5b5f43",
    rust: "#7f3528",
    slate: "#3a302a"
  },
  fonts: {
    serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
    sans: ["Georgia", "Cambria", "Times New Roman", "serif"]
  },
  maxContentWidth: "1180px"
};
```

Style notes:

- Use black/off-white contrast, visible rules, and editorial spacing.
- Avoid gradients, neon, and decorative motion.
- Cards are only for repeated archive/contact/KPI items.
- Metadata should remain visible, not hidden behind hover.
- Swedish is the default language. English routes live under `/en`.

Useful global CSS:

```css
:root {
  color-scheme: light;
  background: #fffaf2;
  color: #000000;
  font-family: Georgia, Cambria, "Times New Roman", serif;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
  min-width: 320px;
  background: #fffaf2;
}

.container {
  width: min(100% - 2rem, 1180px);
  margin-inline: auto;
}

.eyebrow {
  color: #000000;
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.archive-rule {
  border-top: 1px solid #000000;
  border-bottom: 1px solid rgba(92, 55, 30, 0.22);
}

.measure {
  max-width: 72ch;
}

:focus-visible {
  outline: 3px solid #7f3528;
  outline-offset: 3px;
}
```

## Navigation

```ts
export const alaskaNav = {
  sv: [
    {
      href: "/produktioner",
      label: "Produktioner",
      children: [
        { href: "/produktioner", label: "Alla produktioner" },
        { href: "/produktioner?category=factual", label: "Factual" },
        { href: "/produktioner?category=true-crime", label: "True crime" },
        { href: "/produktioner?category=podcasts", label: "Podcasts" }
      ]
    },
    {
      href: "/bolaget",
      label: "Om Alaska",
      children: [
        { href: "/bolaget", label: "Om Alaska" },
        { href: "/bolaget#team", label: "Team" },
        { href: "/bolaget#siffror-utmarkelser", label: "Siffror & utmärkelser" }
      ]
    },
    { href: "/kontakt", label: "Kontakt" }
  ],
  en: [
    {
      href: "/en/productions",
      label: "Productions",
      children: [
        { href: "/en/productions", label: "All productions" },
        { href: "/en/productions?category=factual", label: "Factual" },
        { href: "/en/productions?category=true-crime", label: "True crime" },
        { href: "/en/productions?category=podcasts", label: "Podcasts" }
      ]
    },
    {
      href: "/en/company",
      label: "About Alaska",
      children: [
        { href: "/en/company", label: "About Alaska" },
        { href: "/en/company#team", label: "Team" },
        { href: "/en/company#stats-awards", label: "Stats & awards" }
      ]
    },
    { href: "/en/contact", label: "Contact" }
  ]
};
```

## Hero Copy

Home Swedish:

```text
Title: Berättelser som kräver tillit innan de kräver kamera
Intro: Grundat 2017 med mottot “ett litet bolag med ett stort hjärta” startade Alaska med en vision om att bli ett enastående produktionsbolag – ett som inte bara levererar de mest fängslande berättelserna, utan också bygger en arbetsplats präglad av omtanke och stöd för varandra. Visionen blev en framgång! Och idag, även om vi kanske inte är så små längre, är vårt engagemang för varandra och vår passion för bra innehåll starkare än någonsin!
```

Home English:

```text
Title: Stories that demand trust before they demand a camera
Intro: Alaska Film & TV creates factual series, documentaries, true crime, reality and editorial commissioned work. The strength is in environments where authorities, workplaces, broadcaster requirements and participant trust need to hold together.
```

Company Swedish:

```text
Eyebrow: Bolaget
Title: Ett produktionsbolag byggt för redaktionell närvaro och svåra miljöer.
Intro: Alaska Film & TV är baserat i Stockholm och verkar inom faktabaserad underhållning, dokumentär, true crime, social journalistik, reality och uppdragsproduktion.
```

Company English:

```text
Eyebrow: Company
Title: A production company built for editorial presence and difficult environments.
Intro: Alaska Film & TV is based in Stockholm and works across factual entertainment, documentary, true crime, social journalism, reality and commissioned production.
```

## Production Catalogue

Production genres:

```ts
type ProductionKind =
  | "Factual entertainment"
  | "True crime"
  | "Documentary"
  | "Social journalism"
  | "Reality"
  | "Podcast"
  | "Commissioned";
```

Bucket rules:

```ts
function productionBucketId(production) {
  if (production.genres.includes("Podcast")) return "podcasts";
  if (production.genres.includes("True crime")) return "true-crime";
  return "factual";
}
```

Featured home productions:

```ts
const featuredProductionSlugs = ["efterlyst", "gruvan", "gransbevakarna-sverige"];
```

Production list currently in the prototype:

| Slug | Title | Channel | Years | Genres | Asset paths |
|---|---|---|---|---|---|
| `gransbevakarna-sverige` | Gränsbevakarna Sverige | Kanal 5 / Discovery+ (Max) | 2022 | Factual entertainment, Documentary | `/productions/gransbevakarna-sverige.jpg`, `/productions/gransbevakarna-sverige-card.jpg` |
| `svenska-truckers` | Svenska Truckers | TV3 / Viaplay | 2020 | Factual entertainment, Reality | `/productions/svenska-truckers.jpg`, `/productions/svenska-truckers-card.jpg` |
| `efterlyst` | Efterlyst | TV3 / Viaplay | 1990 | True crime, Social journalism | `/productions/efterlyst.jpg`, `/productions/efterlyst-card.jpg` |
| `gruvan` | Gruvan | SVT / SVT Play | 2023 | Documentary, Factual entertainment | `/productions/gruvan.jpg`, `/productions/gruvan-card.jpg` |
| `vagens-hjaltar` | Vägens Hjältar | Kanal 5 / Discovery+ (Max) | 2015 | Factual entertainment, Reality | `/productions/vagens-hjaltar.jpg`, `/productions/vagens-hjaltar-card.jpg` |
| `ronnasfallet` | Rönnäsfallet | SVT / SVT Play | 2021 | True crime, Documentary | `/productions/ronnasfallet.jpg`, `/productions/ronnasfallet-card.jpg` |
| `bra-surr` | Bra surr | YouTube / social platforms | - | Social journalism, Documentary | `/productions/bra-surr.jpg`, `/productions/bra-surr-card.jpg` |
| `kvartsamtalet` | Kvartsamtalet | Podcast platforms (Spotify, Apple Podcasts) | - | Social journalism, Documentary | `/productions/kvartsamtalet.jpg`, `/productions/kvartsamtalet-card.jpg` |
| `spotify-dokumentara-poddar` | Spotify dok | Spotify | Att bekräfta | Podcast, True crime, Documentary | `/productions/spotify-dokumentara-poddar.jpg`, `/productions/spotify-dokumentara-poddar-card.jpg` |
| `seriemordare` | Seriemördare | Spotify | Att bekräfta | Podcast, True crime, Documentary | `/productions/seriemordare.jpg`, `/productions/seriemordare-card.jpg` |
| `sekter` | Sekter | Spotify | Att bekräfta | Podcast, True crime, Documentary | `/productions/sekter.jpg`, `/productions/sekter-card.jpg` |
| `minnet` | Minnet | YouTube / social platforms | Att bekräfta | Podcast, Documentary | `/productions/minnet.jpg`, `/productions/minnet-card.jpg` |
| `diktatorer` | Diktatorer | Spotify | Att bekräfta | Podcast, Documentary | `/productions/diktatorer.jpg`, `/productions/diktatorer-card.jpg` |
| `dagens-sport` | Dagens sport | TV4 / TV4 Play | Att bekräfta | Podcast, Factual entertainment | `/productions/dagens-sport.jpg`, `/productions/dagens-sport-card.jpg` |
| `trevligt-snack` | Trevligt snack | Kanal 5 / Discovery+ (Max) | Att bekräfta | Podcast, Factual entertainment | `/productions/trevligt-snack.jpg`, `/productions/trevligt-snack-card.jpg` |
| `zeinas-hogtidsmat` | Zeinas högtidsmat | Kanal 5 / Discovery+ (Max) | Att bekräfta | Podcast, Factual entertainment | `/productions/zeinas-hogtidsmat.jpg`, `/productions/zeinas-hogtidsmat-card.jpg` |
| `roret` | Röret | YouTube / social platforms | - | Documentary, Social journalism | `/productions/roret.jpg`, `/productions/roret-card.jpg` |
| `fangar-pa-polisens-kamera` | Fångar på polisens kamera | TV4 / TV4 Play | 2023 | Factual entertainment, Documentary | `/productions/fangar-pa-polisens-kamera.jpg`, `/productions/fangar-pa-polisens-kamera-card.jpg` |
| `norrlandspolisen` | Norrlandspolisen | Att bekräfta | Att bekräfta | Factual entertainment, Documentary | `/productions/norrlandspolisen.jpg`, `/productions/norrlandspolisen-card.jpg` |
| `stockholmspolisen` | Stockholmspolisen | Att bekräfta | Att bekräfta | Factual entertainment, Documentary | `/productions/stockholmspolisen.jpg`, `/productions/stockholmspolisen-card.jpg` |
| `tunnelbanan` | Tunnelbanan | Kanal 5 / Discovery+ (Max) | 2012 | Factual entertainment, Reality | `/productions/tunnelbanan.jpg`, `/productions/tunnelbanan-card.jpg` |
| `havets-hjaltar` | Havets hjältar | Kanal 5 / Discovery+ (Max) | 2019 | Factual entertainment, Documentary | `/productions/havets-hjaltar.jpg`, `/productions/havets-hjaltar-card.jpg` |
| `johanna-moller` | Johanna Möller | TV4 / TV4 Play | 2021 | True crime, Documentary | `/productions/johanna-moller.jpg`, `/productions/johanna-moller-card.jpg` |
| `det-stora-tartslaget` | Det stora tårtslaget | Kanal 5 / Discovery+ (Max) | 2014 | Factual entertainment, Reality | `/productions/det-stora-tartslaget.jpg`, `/productions/det-stora-tartslaget-card.jpg` |
| `sommaren-i-grums` | Sommaren i Grums | SVT / SVT Play | 2024 | Documentary, Social journalism | `/productions/sommaren-i-grums.jpg`, `/productions/sommaren-i-grums-card.jpg` |
| `vara-tonaringar` | Våra tonåringar | SVT / SVT Play | 2025 | Social journalism, Documentary | `/productions/vara-tonaringar.jpg`, `/productions/vara-tonaringar-card.jpg` |
| `mamma-jimmy-guo` | Mamma & Jimmy Guo | SVT / SVT Play | 2023 | Documentary, Social journalism | `/productions/mamma-jimmy-guo.jpg`, `/productions/mamma-jimmy-guo-card.jpg` |

If the new agent can receive source files, also give it `src/data/site.ts`; that contains the longer bilingual summaries/descriptions.

## Stats, Awards, And Tick Counter

Stats/awards teaser copy:

```text
SV eyebrow: Siffror & utmärkelser
SV title: Omfång, förtroende och erkännande.
SV awards blurb: Alaska Film & TV har genom åren tilldelats ett flertal utmärkelser. Bolaget har haft förmånen att nomineras till Kristallen, Sveriges mest prestigefyllda tv-pris, 13 gånger. Alaska har dessutom vunnit priset två gånger för storsuccéerna ”Gränsbevakarna” och ”Svenska Truckers”.

EN eyebrow: Numbers & awards
EN title: Scale, trust and recognition.
EN awards blurb: Alaska Film & TV has been honored with numerous awards over the years. The company has had the privilege of being nominated for Kristallen, the most prestigious television award in Sweden, 13 times. Alaska has also won the award twice for their hit shows, “Gränsbevakarna” and “Svenska Truckers.”
```

KPI data:

```ts
export const alaskaKpis = [
  { id: "experience-history", label: { sv: "Års erfarenhet", en: "Years of experience" }, target: 9 },
  { id: "produced-hours", label: { sv: "Producerade timmar", en: "Produced hours" }, target: 1200, suffix: { sv: " h", en: " h" } },
  { id: "productions", label: { sv: "Produktioner", en: "Productions" }, target: 27 },
  { id: "international-markets", label: { sv: "Internationella marknader", en: "International markets" }, target: 34 },
  { id: "awards-nominations", label: { sv: "Priser & nomineringar", en: "Awards & nominations" }, target: 24 },
  { id: "active-partners", label: { sv: "Samarbetspartners", en: "Partners" }, target: 18 },
  { id: "average-watch-time", label: { sv: "Genomsnittlig tittartid", en: "Average watch time" }, target: 920, suffix: { sv: " tkr", en: "k" } },
  { id: "team", label: { sv: "Team", en: "Team" }, target: 45 }
];
```

Award image paths:

```text
/awards/Kristallen_foto.jpg
/awards/Kristallen3.jpg
/awards/Kristallen1.jpg
/awards/Kristallen2.jpg
/awards/Kristallen4.jpg
```

Counter markup:

```html
<span class="js-tick-counter" data-target="1200" data-suffix=" h">0</span>
```

Pasteable vanilla JS counter:

```html
<script>
  (function () {
    function formatCounter(value) {
      return value.toLocaleString("sv-SE");
    }

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function setCounterValue(el, value) {
      const suffix = el.dataset.suffix || "";
      el.textContent = `${formatCounter(value)}${suffix}`;
    }

    function animateCounter(el) {
      const target = Number.parseInt(el.dataset.target || "0", 10);
      const duration = target > 500 ? 3200 : target > 100 ? 2600 : 2100;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(easeOutExpo(progress) * target);

        setCounterValue(el, current);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setCounterValue(el, target);
        }
      }

      requestAnimationFrame(tick);
    }

    function initTickCounters() {
      const counters = document.querySelectorAll(".js-tick-counter[data-target]");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!("IntersectionObserver" in window) || reduceMotion) {
        counters.forEach((counter) => {
          setCounterValue(counter, Number.parseInt(counter.dataset.target || "0", 10));
        });
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.3 });

      counters.forEach((counter) => observer.observe(counter));
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTickCounters);
    } else {
      initTickCounters();
    }
  })();
</script>
```

Optional KPI CSS:

```css
.kpi-grid {
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (min-width: 768px) {
  .kpi-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.kpi-cell {
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(255, 255, 255, 0.25);
  min-width: 0;
  overflow: hidden;
  padding: 1.5rem 1.25rem 1.25rem;
  text-align: center;
}

.kpi-number {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: center;
  line-height: 1;
  margin: 0;
}

.js-tick-counter {
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  letter-spacing: 0;
}
```

## SEO And Structured Data

Use Organization JSON-LD on every page:

```ts
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alaska Film & TV",
  legalName: "Alaska Film & TV AB",
  url: "https://www.alaskafilmtv.com",
  logo: "https://www.alaskafilmtv.com/alaska-logo-white.png",
  email: "info@alaskafilmtv.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockholm",
    addressCountry: "SE"
  }
};
```

Use TVSeries JSON-LD on production detail pages when a production has enough verified metadata.

## Suggested Routes

```text
/
/produktioner
/produktioner/[slug]
/bolaget
/kontakt
/privacy
/en
/en/productions
/en/productions/[slug]
/en/company
/en/contact
```

The old stats URLs redirect into the company page anchors:

```text
/siffror-utmarkelser -> /bolaget#siffror-utmarkelser
/en/stats-awards -> /en/company#stats-awards
```

