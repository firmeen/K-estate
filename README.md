# KESTA — Thailand properties for Myanmar visitors

A single-owner real-estate catalogue and contact website. The navigation is intentionally focused on two user jobs:

1. **Explore properties** — view property location, area, type, sale/rent price and details.
2. **Contact the owner** — see verified owner-approved channels, when provided.

**KESTA is a provisional brand name; trademark and domain availability have not been cleared.**

## Live site / deployment
Designed for GitHub Pages at `https://firmeen.github.io/K-estate/`. The project uses Next.js static export and a conditional `basePath: "/K-estate"` in GitHub Actions. Set **Settings → Pages → Build and deployment → Source: GitHub Actions** to enable the deployment workflow.

The `Deploy KESTA to GitHub Pages` workflow builds on pushes to `main`, runs `npm run check`, and publishes `out/`. Local development does not use the GitHub Pages prefix.

## Stack
Mirrors FLOW-info's dependency versions: Next.js 16.3.1, React 19.2.8, TypeScript 5, Tailwind CSS 4, shadcn, Base UI, Motion 13.1.0, Remix Icon.

## Local usage
```bash
npm ci
npm run dev
```
Visit http://localhost:3000/ (Myanmar landing page) or http://localhost:3000/my/.

```bash
npm run check
```
To test the GitHub Pages build locally: `GITHUB_PAGES=true npm run build` (PowerShell: `$env:GITHUB_PAGES="true"; npm run build`).

## Visitor routes
- `/` and `/my/` — Myanmar landing pages
- `/[locale]/properties/` — catalogue, filters for sale/rent/type/province and free-text search
- `/[locale]/properties/[slug]/` — property overview, area, price, location and contact CTA
- `/[locale]/contact/` — verified contact channels
- `/[locale]/buy/`, `/[locale]/rent/`, `/[locale]/about/` — legacy URLs retained but not shown as primary navigation

Locales: `my` (default), `th`, `en`. Desktop primary nav: **Properties / Contact**. Mobile: compact bottom two-item tab bar.

## Information source
- `src/content/demo-properties.ts`: fictional demo data labelled as examples, **not real listings**.
- `src/content/owner-contact.ts`: verified contact channels. This is currently empty until real information is supplied.
- `src/server/properties/service.ts`: read-only catalogue data adapter.

## Scope
No login, admin dashboard, reservations, payment processing, image uploads or live database. Those are explicitly deferred. GitHub Pages is static hosting, so future dynamic server-side features would require a separate backend or a new host.

## Before launching publicly
- Replace mock inventory and placeholder imagery with verified owner-provided records, images and precise location details.
- Obtain owner-approved phone/Viber/Messenger/LINE URLs or other channels and populate `src/content/owner-contact.ts`.
- Have native Myanmar speakers check wording and readability; test on real mobile devices.
- Review brand availability, accessibility, legal disclosures and appropriate foreign-property ownership claims.
- Replace preview-only `robots` noindex/disallow restrictions after actual content is approved.
