# KESTA — Design System v2

Purpose: **Property information and direct owner contact**. No accounts, booking, admin, chat or payments.

## Principles
1. Information first: price, location, area and listing status visible without friction.
2. Quiet luxury: off-white with deep-sea contrast, no gratuitous shadows/blur/gradients.
3. Responsive by intent: on mobile the search and first property cards take priority over decoration.
4. Purposeful animation: opacity/transform reveals, subtle card hover and animated filters. No scroll hijacking.
5. Three locales: Burmese default, Thai and English. Never letter-space Burmese headings.
6. Honest content: fictional samples clearly marked; no invented contact methods or genuine-looking fake photos.

## Color tokens
| Token | Value | Usage |
| --- | --- | --- |
| paper | `#F7F6F2` | outer background |
| deep | `#102F38` | major text, primary CTAs |
| ocean | `#244D57` | secondary emphasis |
| sea glass | `#A8C5BF` | gentle accent |
| mist | `#DCE6E3` | subtle surfaces |
| line | `#DFE7E2` | borders |
| muted | `#566D73` | body description |

## Components
- `SiteHeader`: logo, Properties, Contact, compact locale picker.
- `SiteNavigation`: two destinations; responsive desktop tabs/mobile bottom nav.
- `HomeSearch`: sale/rent/all and free-text search, routed into catalogue query.
- `PropertyExplorer`: sale/rent animated selection, search/province/type filtering, empty state.
- `PropertyCard`: image/artwork, location/type, title, price, area/rooms, detail link.
- `PropertyGallery`: owner photo display or visibly abstract concept artwork; modal when photos exist.
- `ContactPage`: only approved live owner channels; informative unavailable state until provided.

## Breakpoints
- Mobile: single-column cards, 16px gutters, compact 2-tab navigation; hero illustration hidden.
- Tablet: two columns from 768px.
- Laptop: three columns from 1024px, max page width ~1216px.

## Motion
- Entrance: 13px rise + fade 650ms, brief stagger; no repeated scroll animations.
- Cards: max 4px hover rise, 1.025 image zoom; disabled for touch layouts.
- Filter: spring pill indicator, result enter/exit ~220ms.
- Respect `prefers-reduced-motion` (CSS) and Motion `reducedMotion="user"`.

## Before production
- Replace `demo-properties.ts` with verified property data and actual photos.
- Configure `owner-contact.ts` with owner-approved URLs.
- Review translations with native Burmese readers.
- Validate contrast, keyboard navigation, font scaling and Lighthouse on real devices.
- Remove preview noindex only once the site contains verified content.
