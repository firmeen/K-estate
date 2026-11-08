# KESTA · Property Discovery · Deep Ocean

KESTA is a Myanmar-first static website for exploring Thailand property information and locating **verified KESTA owner contact channels**. The brand remains provisional.

## Current content and ownership

The public catalogue now uses **five factual market-reference records** drawn from:
- [PropertyHub](https://propertyhub.in.th/) — Noble Around Sukhumvit 33, The Link Sukhumvit 50, Bangna–Trad Soi 14 land, The Metropolis Samrong
- [Thailand Property](https://www.thailand-property.com/apartments-for-rent/bangkok?sort=min_price) — UTD Aries Residence studio

Each record retains the source URL and a source-reference date (2026-11-08). **They are not owned, marketed, or offered by KESTA.** Current prices, availability, listing accuracy and conditions must be confirmed through each publisher. No third-party property photographs were copied.

Visuals use Unsplash-licensed **illustrative architecture/interior photography** delivered from `images.unsplash.com` and are explicitly described as not depicting those individual listings. Unsplash photo IDs: `1600607687920-4e2a09cf159d`, `1618221195710-dd6b41faaea6`, `1500382017468-9049fed747ef`, `1534655610770-dd69616f05ff`, `1523217582562-09d0def993a6`. See the [Unsplash License](https://unsplash.com/license).

Future verified owner-owned inventory should replace external references; **never relabel external records as KESTA inventory**.

## Contact

`src/content/owner-contact.ts` is the only public contact configuration. It remains empty until the owner provides explicit consent for verified Phone/Viber/Messenger/LINE/Email details. The UI shows an honest unavailable state; third-party listing contacts are never copied as KESTA contacts. Each external listing links to its original publisher.

## Visual system

- Off-white `#F7F6F2`
- Navy Deep Ocean `#071F37`, Ocean Blue `#0C3857`, Marine accent `#236589`
- Light-blue surfaces `#D7E5ED`, `#F0F5F8`
- **No green/teal primary color.**
- Semantic tokens in `src/app/globals.css`, compact responsive top/bottom navigation, minimal editorial pages and Sea Current restrained motion.

## Routes

- `/` and `/my/`: Myanmar-first home
- `/[locale]/properties/`: search + filters by sale/rent, type and province
- `/[locale]/properties/[slug]/`: source-linked details, images, price and specs
- `/[locale]/contact/`: owner-approved contact channels
- Legacy `/buy/`, `/rent/`, `/about/` preserved, not primary nav.

Supported locales: Myanmar, Thai, English.

## Development

```bash
npm ci
npm run dev
npm run check
```

## Deployment

Static Next.js export to `https://firmeen.github.io/K-estate/`. Conditional `GITHUB_PAGES=true` controls `/K-estate` basePath; `images.unsplash.com` is an allowed unoptimized image source. No runtime server or third-party messaging integrations. GitHub Actions workflows and dependencies are unchanged.

The site remains `noindex` while reference information is being used. Before enabling indexing, replace with owner-approved inventory, photos and contacts, and review Myanmar translations and legal disclosures.
