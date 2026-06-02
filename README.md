# Tripen Tekstil — Corporate Website

Official corporate website for **Tripen Tekstil Model San. Tic. Ltd. Şti.**, a wholesale women's clothing manufacturer based in Istanbul, Turkey. Founded in 1996, Tripen designs and produces its own collections for domestic and international wholesale.

**Live:** https://tripen.com.tr &nbsp;·&nbsp; **GitHub:** https://github.com/huseyinky40/tripen

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Fonts | Fraunces (serif) + Hanken Grotesk — self-hosted via `next/font` |
| Testing | Playwright (smoke / e2e) |
| Deployment | Vercel |

No backend, no database — fully static/SSG.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about snippet, collections preview, CTA |
| `/hakkimizda` | About — company history, values |
| `/koleksiyonlar` | Collections |
| `/uretim-tasarim` | Production & design process |
| `/kalite` | Quality standards |
| `/fabrika` | Factory location + Google Maps |
| `/showroom` | Showroom location + Google Maps |
| `/galeri` | Photo gallery |
| `/toptan-satis` | Wholesale info |
| `/iletisim` | Contact — WhatsApp redirect (no backend) |
| `/sss` | FAQ |
| `/kvkk` | KVKK (Turkish data protection) |
| `/gizlilik` | Privacy policy |
| `/cerez-politikasi` | Cookie policy |

---

## Project Structure

```
src/
├── app/            # Routes (15 pages), sitemap.ts, robots.ts, icon.svg, opengraph-image.tsx
├── components/
│   ├── layout/     # Header (sticky + mobile drawer), Footer, SkipLink
│   ├── ui/         # Container, Section, Eyebrow, Button, Reveal, icons
│   ├── brand/      # Logo, Monogram, FabricTexture, Placeholder
│   ├── sections/   # PageHeader, CTASection, ProcessSteps, LocationCard, FAQAccordion, LegalPage
│   ├── maps/       # MapFrame — keyless interactive Google Maps embed
│   └── contact/    # ContactForm — client-side validation, WhatsApp fallback
├── content/        # Single source of truth: site.ts, data.ts
├── i18n/           # Locale system (TR/EN/RU ready)
└── lib/            # seo.ts, jsonld.tsx (Organization/LocalBusiness), utils.ts
```

---

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npx playwright test  # Smoke tests (Chromium + WebKit)
```

---

## Content Management

All company data (address, phone, WhatsApp, locations, social links) lives in a **single source of truth**: [`src/content/site.ts`](src/content/site.ts). Page copy is in `src/i18n/messages/tr.ts`. The i18n system is ready for English and Russian expansion.

---

## Brand System

Derived from the Tripen logo: anthracite `#1A1A1A`, off-white `#F7F4EF`, warm sand/taupe accent `#C8A97E`. Design tokens live in the `@theme` block inside [`src/app/globals.css`](src/app/globals.css).

---

## SEO

Page-specific metadata + Open Graph, JSON-LD (`Organization`, `LocalBusiness`, `FAQPage`), `sitemap.xml`, `robots.txt`, dynamic OG image, semantic HTML.
