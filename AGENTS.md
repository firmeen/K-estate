# KESTA agent instructions

- Single-owner property portfolio website for visitors from Myanmar browsing Thailand real estate; no multi-seller marketplace or backend.
- Preserve the FLOW-info-derived dependency baseline, Next.js App Router, React, TypeScript and Tailwind 4.
- Preserve GitHub Pages static export (basePath `/K-estate` in production) and routes `/my`, `/th`, `/en`.
- Color direction: **Off-white + navy Deep Ocean Blue**, NO green/teal theme colors.
- The current catalogue contains real publicly sourced **external reference records**, not KESTA-owned inventory.
  - Link to each original listing, date its snapshot, and never imply KESTA is the property owner/seller.
  - Use only appropriate licensed illustrative imagery; explicitly say such imagery is not of that property.
  - Never show published prices as guaranteed current availability or terms.
- Do not copy third-party listing photographs without permission; keep source and photo attribution traceable.
- Owner-approved public contact channels belong only in `src/content/owner-contact.ts`. Never take a listing agent's phone/LINE/Messenger to pretend it is KESTA's.
- Do not implement admin, login, booking, payment, backend, message storage or unrelated marketing features.
- Motion remains restrained and reduced-motion accessible; keyboard/mobile must work.
- No new libraries unless needed; do not touch CI workflows for UI changes.
