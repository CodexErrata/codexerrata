# Alaska Film & TV Website

Astro prototype for the new Alaska Film & TV website. Swedish is the default language and English lives under `/en`.

## Stack

- Astro with static output
- TypeScript
- Tailwind CSS
- `@astrojs/sitemap`
- Content currently lives in `src/data/site.ts` so the front end can be built before a CMS is connected

## Local Setup

```bash
npm install
npm run dev
```

Build and type-check:

```bash
npm run build
```

## Routes

- `/`
- `/produktioner`
- `/produktioner/[slug]`
- `/uppdragsproduktion`
- `/bolaget`
- `/siffror-utmarkelser`
- `/team`
- `/press`
- `/kontakt`
- `/en`
- `/en/productions`
- `/en/productions/[slug]`
- `/en/commissioned-work`
- `/en/company`
- `/en/stats-awards`
- `/en/team`
- `/en/press`
- `/en/contact`
- `/privacy`

## Content Status

The site intentionally uses placeholder text for unverified names, direct phone numbers, production stills, production years and season counts. These should be replaced only with approved source material.

No stock photography or AI-generated imagery is included. Production detail pages render still-image slots that are ready for approved archive or broadcaster images.

## Next Content Needed

- Named executive contacts and direct phone numbers
- Approved staff bios
- Production stills with rights, photographer and usage notes
- Verified production years, seasons, channels and hosts
- Trailer or clip URLs with embed permissions
- Full Kristallen nominations list
- Legal privacy text
- Analytics provider selection: Plausible or Fathom
