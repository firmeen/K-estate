# KESTA · Minimal Property Experience

KESTA is a **single-owner**, Myanmar-first website for viewing property information in Thailand and finding the property owner's verified public contact channels. The brand name is provisional.

## Scope

1. **Property discovery:** read-only catalogue, sale/rent choice, search by title/location/description, province and property-type filters, property details, photographs (when supplied), price in THB, area and relevant specifications.
2. **Direct contact:** only channels explicitly provided and approved by the owner (phone, Viber, Messenger, LINE or email).

No sign-in, admin dashboard, booking, payment, message storage or backend.

## V2 design system — Sea Current

- **Off-White:** `#F7F6F2` · **Deep Sea:** `#102F38`
- Sea Glass `#A8C5BF`, Sea Mist `#DCE6E3`, Ocean hover `#244D57`
- Semantic colors, typography, spacing, focus, cards and button styles are in `src/app/globals.css`.
- Typography: DM Sans / Noto Sans Thai / Noto Sans Myanmar **font stacks** with reliable system fallbacks. No external runtime font request. Fonts can be self-hosted later if approved assets are supplied.
- Motion: restrained CSS hover/reveal + the already installed Motion for React for list transitions; respects reduced-motion preferences.
- Navigation: just Properties and Contact; logo returns Home. Mobile uses a compact two-destination bottom navigation with safe-area padding.
- Legacy `/buy`, `/rent`, and `/about` routes remain accessible but are not primary navigation items.

## Routes

- `/` — Myanmar-first Home (also available at `/my/`)
- `/[locale]/properties/` — searchable inventory
- `/[locale]/properties/[slug]/` — read-only property detail
- `/[locale]/contact/` — owner-approved contact channels
- `/[locale]/buy/`, `/[locale]/rent/`, `/[locale]/about/` — legacy compatibility

Locales: `my` (default), `th`, `en`. Locale switching maintains the current page path.

## Content and authenticity

- `src/content/demo-properties.ts` contains clearly labelled **fictional demo** listings. None represents actual available inventory.
- `src/content/owner-contact.ts` is the sole location for **verified, approved public contact details**; it currently has no channels. The Contact page displays an honest unavailable state.
- Real property photos must be explicitly supplied for their matching listings. Missing photos use a minimal fallback without pretending to show a real property.
- `src/server/properties/service.ts` stays a static read-only data adapter. The site deliberately remains static, with no server API.
- Preview no-index and robots protections remain in place until listings are verified.

## Run

```bash
npm ci
npm run dev
npm run check
```

Local site: `http://localhost:3000/`.

## GitHub Pages

Production path: `https://firmeen.github.io/K-estate/`.

`next.config.ts` preserves `output: "export"`, trailing slashes, and the conditional `/K-estate` base path when `GITHUB_PAGES=true`. For root-local property imagery, the same configuration exposes `NEXT_PUBLIC_BASE_PATH` during the build.

Existing GitHub Actions workflows and repository settings are unchanged by V2.

## Release checklist

Replace fictional inventory, review property types/units, attach owner-provided photographs, confirm public contact channels, verify native Myanmar/Thai copy, test small-screen Safari and laptop layouts, check keyboard/reduced-motion behavior, confirm performance, and clear brand/trademark decisions before removing preview no-index restrictions.
