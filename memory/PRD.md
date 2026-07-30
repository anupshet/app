# Destina Tours and Travels — PRD

## Original Problem Statement
Build a premium, high-converting, mobile-first frontend-only resort booking website for **Destina Tours and Travels** featuring **Land's End Resort & Spa, Wayanad**. The site's purpose is to generate booking enquiries via WhatsApp (wa.me) and phone (tel:). No backend, no DB, no auth, no payment.

## Art Direction
"The Sanctuary" — Organic & Earthy × Luxury. Deep forest green (`#0A170F`), warm wood (`#8B5A2B`), cream (`#F7F5F0`), sand (`#D4CBBF`), muted moss (`#2C402B`). Typography: **Cormorant Garamond** (serif) + **Manrope** (sans). Kinetic on-load line reveal, numbered manifesto chapters (01/02/…), one editorial marquee, subtle hero parallax, Lenis smooth scroll.

## User Personas
- **Google Ads visitor** (mobile-first) planning a Wayanad getaway.
- **Direct planner** researching Land's End Resort specifically.
- **Group / repeat traveller** looking for a coordinated booking channel.

## Core Requirements (Static)
1. All contact numbers/email centralised in `/app/frontend/src/lib/config.js`.
2. Reusable WhatsApp message generator in `/app/frontend/src/lib/whatsapp.js` — URL-encoded, mobile + desktop safe.
3. WhatsApp + Call CTAs on every page + fixed mobile bottom bar.
4. Do NOT falsely represent as Land's End's official site — clearly identify as booking assistance.
5. Public pricing: "Starting from ₹5,000/night" + confirmation notice. B2B tariff table NOT exposed.
6. `data-testid` on all interactive & key info elements.

## What's Implemented (2026-12)
- **Pages**: `/`, `/wayanad-resorts/lands-end-resort`, `/about-us`, `/contact`, `/privacy-policy`, `/terms`, `/booking-policy`.
- **Components**: Header (sticky, glass), Footer, MobileBottomCTA, WhatsAppButton, CallButton, RevealText (masked line reveal), FadeIn, ImageCrop (scale-crop + gradient scrim to mask baked-in logos + parallax), EditorialMarquee, EnquiryForm (validation → opens WhatsApp).
- **Motion**: framer-motion scroll reveals + micro-interactions; Lenis smooth momentum scroll; parallax on hero + gallery images; masked line-by-line hero reveal.
- **Content**: 5 real Land's End photographs used throughout — hero (infinity pool), bedroom, valley view, bungalow at dusk, Café Bamboo. Four room cards (Bungalow / Valley View / Arayum Purayum / Forest View), three meal plan cards (CP / MAP / AP), 5-question FAQ accordion, numbered "How it works" manifesto on About, contact lines on Contact.
- **SEO**: page titles, meta description, Open Graph tags, semantic H1/H2, descriptive alt text, SEO-friendly URLs.
- **Testing**: 34/41 frontend assertions passed via testing_agent_v3 (iteration_1).

## Known Non-Blocking Items
- **P1** — `BUSINESS.whatsapp` is placeholder `+91XXXXXXXXXX` per user choice. wa.me currently resolves to `wa.me/91?text=…`. Replace with the real number in `/app/frontend/src/lib/config.js` (single edit) to make it live.
- **P2** — Add real business email + phone (same file, `BUSINESS.email`, `BUSINESS.phone`).

## Prioritised Backlog
- **P0** — Swap placeholder contacts with the real WhatsApp/phone/email.
- **P1** — Add JSON-LD (`Hotel` / `TravelAgency` schema) for richer Google Ads landing SEO.
- **P1** — Google Analytics / Google Ads conversion tracking on WhatsApp + Call clicks.
- **P2** — Additional Wayanad resort listings (arch is ready — data-driven via `config.js`).
- **P2** — Image lazy-loading blur placeholders; convert asset URLs to `<picture>` with WebP fallbacks.
- **P2** — Testimonials section once real reviews are collected (avoid fake reviews per Google Ads policy).
- **P2** — Sitemap.xml + robots.txt.

## Architecture Notes
Frontend-only React SPA (react-router-dom v7). All resort data is centralised in `lib/config.js` so adding a new resort/destination is a matter of extending `ROOMS`, `IMAGES`, `GALLERY`, and adding a route + page. WhatsApp/Call logic is fully reused via `lib/whatsapp.js`.

## Enhancement Pass — Trust, Compliance & SEO (2026-12)
- **Business location** corrected to Bangalore, Karnataka (business) while resort stays Wayanad. Added business hours (Mon–Sun 9AM–9PM).
- **Prominent disclaimer** ("independent...not the official website of Land's End Resort & Spa") now shown as a green strip on Home, Resort, About, Contact + in footer legal row. Centralised as `DISCLAIMER` in config.js.
- **Real contacts live everywhere**: WhatsApp/phone +917019540319, email travel@destinatoursandtravels.in.
- **Homepage**: new "Why book through Destina Tours and Travels?" trust section (4 icon cards) + SEO title/description.
- **About page** rebuilt: Who We Are, What We Do (6), How Our Process Works (4 steps), Why Choose Us, CTAs.
- **Contact page**: Bangalore location + business hours + business info + disclaimer.
- **Footer**: full Quick Links (Home, Land's End, About, Contact, Privacy, Terms, Booking), "Independent Travel & Resort Booking Assistance Service", address, hours, disclaimer.
- **Booking policy** restructured: Booking Process / Pricing / Cancellation / Refunds.
- **FAQs** updated to the 5 compliance-focused Q&As (official-website disclaimer, availability, pricing not final, booking, pre-booking contact).
- **Conversion**: desktop sticky enquiry card (auto-hides at footer so disclaimer is never covered) + existing mobile bottom bar.
- **SEO**: per-page titles via useSEO hook; Google Search Console verification meta added; JSON-LD org address = Bangalore + openingHours; sitemap/robots on destinatoursandtravels.in.
- **Testing**: iteration_2 = 100% (73/73) frontend assertions passed.
