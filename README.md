# KESTA — Thailand real estate for Myanmar visitors

A single-owner real estate catalogue for condos, apartments, land and houses offered for sale or rent in Thailand. **KESTA is a working brand placeholder**, not a cleared trademark or domain.

## Technology baseline
Copied and version-aligned from [FLOW-info](https://github.com/firmeen/FLOW-info) main: Next.js 16.3.1, React 19.2.8, TypeScript 5, Tailwind 4, shadcn, Base UI, Motion 13.1.0, Remix Icon and related tooling. `package-lock.json` is copied from the same repository and adjusted only for package name.

Unlike FLOW-info, this application does **not** use `output: "export"` because future owner-only administration, authentication, and database operations require server capabilities.

## Run locally
```bash
npm ci
npm run dev
```
Open http://localhost:3000 — the root redirects to `/my`.

```bash
npm run check
```

## Routes
- `/` → `/my`
- `/[locale]` — landing page
- `/[locale]/properties` — catalogue with client-side filters
- `/[locale]/buy` and `/[locale]/rent` — sale/rent catalogue
- `/[locale]/properties/[slug]` — property detail
- `/[locale]/about` and `/[locale]/contact` — content pages

`locale` is `my` (default), `th` or `en`. Use locale-aware URLs for every navigation link.

## Source structure
```text
src/
  app/                 # Next.js App Router pages and layouts
    [locale]/           # language-specific public pages
  components/
    layout/             # shared header/footer
    properties/         # reusable catalogue/search/cards
  content/              # clearly labelled fictional demo listings
  i18n/                 # language dictionaries + locale definitions
  lib/                  # formatting helpers
  server/properties/    # future persistence adapter/service boundary
  types/                # typed property data model
```

## Before a real launch
1. Replace mock listings with verified owner data and property images.
2. Confirm Burmese translations, real owner contact channels and brand availability.
3. Connect persistent storage and photo uploads.
4. Add secure owner-only sign-in, authorization, validation, and audited property mutations.
5. Complete accessibility, SEO, deployment, and legal-content review (including appropriate foreign ownership / rental claims).

**Do not treat demo listings as actual available properties.** No database, admin login or payment processing is implemented in the foundation.
