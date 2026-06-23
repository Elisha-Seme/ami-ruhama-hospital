# AMI Ruhama Mission Hospital — Website

The official marketing website for **AMI Ruhama Mission Hospital**, a faith-based
**Level 3A** hospital in Soysambu Market, Tongaren Sub-County, Bungoma County, Kenya.

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

## Project structure

```
src/
  app/                 # App Router pages + metadata, sitemap, robots, favicon
    page.tsx           # Home (landing)
    about/             # About
    services/          # Services + transparent pricing
    impact/            # Community impact / outreach
    contact/           # Contact (details, map placeholder, enquiry form)
    donate/            # Support Our Mission / Partner With Us
    layout.tsx         # Root layout: fonts, navbar, footer, SEO + JSON-LD
    not-found.tsx      # 404
  components/          # Reusable UI
    Navbar, Footer, Hero, Logo, Button, Container,
    SectionHeading, ServiceCard, ImpactCard, ValueCard,
    StatStrip, CTASection, ContactSection, PageHeader, Reveal, icons
    sections/          # Composable page sections (AboutIntro, MissionVision,
                       # ValuesSection, ServicesSection, WhyChooseUs,
                       # ImpactSection, LeadershipSection, PartnersStrip, QuoteBlock)
  lib/
    site.ts            # ⭐ Single source of truth for all content & contact info
public/images/         # Authentic photos extracted from the hospital profile
```

## Editing content

Almost everything — services, values, fees, leadership, contact details — lives in
[`src/lib/site.ts`](src/lib/site.ts). Update it there and it flows through the whole site.

## Items marked `TODO: confirm`

Search the codebase for `TODO` to find every placeholder that needs verification
before launch. The notable ones:

- **Domain / email** — the old profile listed `amiruhamawarabamedicalcentre.com` and
  `warabamedicalcentre@gmail.com`; confirm the updated "Mission Hospital" details.
- **Administrator name** — the source deck listed both *Calistus Simiyu* and
  *Calistus Wekesa*. Currently showing "Calistus Simiyu".
- **KMPDC registration number** — label/value alignment was ambiguous in the source.
- **Giving channels** — M-Pesa Paybill / bank details on the Donate page.
- **Map** — replace the map placeholder with a real Google Maps embed.
- **Outreach figures** — camps held / patients screened on the Impact page.
- **Testimonials** — real patient/community quotes (with consent).
- **Social links** — official Facebook/Twitter/Instagram handles.

## Brand & design notes

- **Palette:** deep teal-blue (trust), warm gold (mission), and the brand red used
  sparingly for the medical cross & key accents — refined from the hospital's logo.
- **Type:** Lora (display serif) + Plus Jakarta Sans (UI/body).
- **Imagery:** the logo, waiting-bay, laboratory and clinician photos were extracted
  from the official profile deck. Replace with higher-resolution photography when
  available for the strongest result.
- **Logo:** recreated as a crisp SVG (`src/components/Logo.tsx`) so it scales sharply.
