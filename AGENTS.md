# KESTA agent instructions

- Site: single-owner portfolio for Thailand properties, targeting Myanmar visitors.
- Keep the exact FLOW-info dependency baseline unless a change is justified and lockfile is updated.
- Use Next.js App Router, React, TypeScript, Tailwind CSS 4, Base UI, shadcn, Motion, Remix Icon.
- Source code lives in src/. Routes live in src/app/[locale]. UI components must not query a database directly.
- Use /my as the default (Myanmar), with /th and /en as optional locale routes.
- Demo inventory must be visibly marked as fictional; never present sample prices, addresses or inventory as real listings.
- Do not expose an admin editing dashboard or owner details without authentication, authorization and actual storage.
- No real contact phone, email, property address or account credentials have been provided. Do not invent them.
- Property service layer in src/server/properties is the boundary for a future database.
- Use semantic HTML, mobile-first layout, and proper Burmese font fallbacks.
- Validation: npm ci && npm run check.
