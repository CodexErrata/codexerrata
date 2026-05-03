# CMS Schema

This schema is written so it can be implemented in Sanity or Payload.

## Production

- `title`: string, required
- `slug`: slug, required, unique
- `localeFields`: object
  - `summarySv`: text, required
  - `summaryEn`: text
  - `descriptionSv`: rich text, required, 60-80 words recommended
  - `descriptionEn`: rich text
- `channel`: reference or string
- `seasons`: string
- `productionYears`: string
- `yearSort`: number
- `genres`: array of enum values
- `participants`: array of people or free text
- `trailerUrl`: url
- `stills`: array of image assets, minimum 3 before publishing
  - `altSv`
  - `altEn`
  - `credit`
  - `rightsStatus`
  - `approvedForWeb`
- `statusNote`: internal editorial note
- `seo`: title, description, ogImage

## Person

- `name`: string, required
- `roleSv`: string, required
- `roleEn`: string
- `email`: email
- `phone`: string
- `bioSv`: text
- `bioEn`: text
- `portrait`: image with rights metadata
- `showOnTeamPage`: boolean
- `sortOrder`: number

## Award

- `name`: string
- `year`: number or string
- `production`: reference to Production
- `category`: string
- `result`: enum: nominated, won
- `sourceUrl`: url
- `verified`: boolean

## Press Asset

- `title`: string
- `assetType`: enum: logo, portrait, still, company, other
- `file`: asset
- `credit`: string
- `rightsText`: text
- `usage`: text
- `approvedForDownload`: boolean

## Commissioned Case

- `title`: string
- `client`: string
- `clientType`: enum: authority, company, broadcaster, organisation
- `problem`: text
- `method`: text
- `deliverables`: array
- `kpis`: array
- `outcome`: text
- `publishable`: boolean
- `assets`: images or video embeds

## Site Settings

- `mainEmail`
- `mainPhone`
- `address`
- `socialLinks`
- `analyticsProvider`
- `analyticsSiteId`
- `privacyTextSv`
- `privacyTextEn`
