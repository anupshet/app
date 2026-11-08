# Destina Tours & Travels — PRD

## Original Project
Build a premium, high-converting, mobile-first **frontend-only** resort booking website for Destina Tours and Travels, originally featuring Land's End Resort & Spa, Wayanad. Generate genuine booking enquiries through WhatsApp and phone. No backend, database, authentication, payments or admin dashboard. Clearly disclose the independent booking-assistance business identity; this is not an official resort website.

## Initial Expansion Request (2026-09-12)
Modify the EXISTING site, not a rebuild. Reposition Destina as **an independent travel and resort booking assistance service offering curated stays and packages across selected destinations**.
- Dandeli is the primary homepage destination; Wayanad remains secondary.
- Add exactly ONE Dandeli property: **Nature Mist – Dandeli**. No fake resorts, placeholders, fabricated amenities/prices/inclusions, payment or booking engine.
- Preserve the existing premium typography, colours, motion, responsiveness and components wherever possible.
- Preserve Land's End rooms, original gallery/images, meal plans, prices, FAQs, enquiry form and WhatsApp functionality.
- New navigation: Home; Dandeli Resorts → Nature Mist; Wayanad Resorts → Land's End; Packages; About Us; Contact; WhatsApp Enquiry.
- Homepage hierarchy: Hero → Popular Dandeli Packages → Featured Dandeli Resort → Experience Dandeli → Why Destina → Explore Wayanad → Final WhatsApp CTA → Footer. Prominent independent-booking disclaimer retained below hero.
- Homepage headline: **Discover Dandeli. Stay. Explore. Unwind.**
- Homepage supporting text: **Handpicked Dandeli stays and complete resort packages with personalized booking assistance from Destina Tours & Travels.**
- Resort/destination/package/menu architecture must be data-driven for future additions, one resort at a time.
- Use the five supplied Nature Mist pictures, with no replacement image generation; premium responsive gallery, without unnecessary overlays/filters. No existing lightbox needed preserving prior behaviour.

## User Personas
- Mobile visitor comparing Dandeli resort packages and activities.
- Wayanad traveller researching the existing Land's End accommodation and meal plans.
- Group organiser requesting availability and a confirmed quote through WhatsApp.

## Approved Nature Mist Information (Source of Truth)
- Resort: Nature Mist – Dandeli; location: Dandeli, Karnataka.
- Package: **1 Night / 1 Day**, **₹1,500 / person**, **Group / Sharing Cottage**. Never reinterpret this as a nightly room rate.
- Check-in **11:30 AM**; check-out **10:30 AM**.
- Includes: Stay; Food; River Activities; Nature Trek; Indoor & Outdoor Games; Campfire + Music.
- Free water activities: Boating; Kayaking; Zorbing.
- Games: Carrom; Dart; Archery; Badminton.
- Other activities: Swimming Pool; Nature Walk / Trek; Rain Dance; Campfire + Music.
- Sightseeing: Supa Dam; Crocodile Park; Moulangi Park; Kali River View.
- Exact transport note: **Sightseeing transport is not included and is available at additional cost.**
- External website supplied: `https://dandeliwildadventures.in`, clearly labelled external and not Destina's website. No third-party website claims copied into the resort information.
- Overview: A nature-focused Dandeli stay combining comfortable accommodation, meals, river activities, nature experiences, games and evening campfire experiences.
- Detail enquiry: `Hi Destina Tours & Travels, I am interested in the Nature Mist Dandeli 1 Night / 1 Day package. Please share availability and booking details.`
- Card availability enquiry: `Hi Destina Tours & Travels, I would like to check availability for the Nature Mist Dandeli package. Please share availability, pricing and booking details.`

## Design System (Preserved)
The Sanctuary: deep forest `#0A170F`, cream `#F7F5F0`, moss `#2C402B`, wood `#8B5A2B`, sand `#D4CBBF`. Cormorant Garamond headings + Manrope body. Full-bleed photography, editorial spacing, pill CTAs, Framer Motion masked text/reveals/parallax, Lenis momentum scrolling. Existing Land's End design stays intact. Shared styling reference: `/app/design_guidelines.json`.

## Contacts & Enquiry Rules
- Business name: Destina Tours and Travels.
- WhatsApp and phone: **+917019540319** (unchanged).
- Email: **travel@destinatoursandtravels.in** (unchanged).
- Business address: Bangalore, Karnataka, India.
- Hours: Monday to Sunday, 9:00 AM–9:00 PM.
- Public domain: `https://destinatoursandtravels.in`.
- All contact configuration remains in `src/lib/config.js`.
- Booking remains enquiry → WhatsApp → manual verification/confirmation. No live inventory API or online payment.
- General CTAs describe both Dandeli and Wayanad. On resort detail pages header, footer, mobile bar, desktop sticky and shared WhatsApp buttons inherit the correct resort message.
- Prices and availability subject to confirmation; visible independent-assistance disclaimer on pages and footer.
- No mocked app integrations. WhatsApp opens a genuine encoded wa.me link. Testing intercepts window.open only to avoid sending actual messages.

## Architecture
Frontend-only React SPA (react-router-dom v7), Tailwind, Framer Motion, Lenis, existing shadcn/Radix components. No backend changes or new services/dependencies.

### Routes
| Route | Purpose |
|---|---|
| `/` | Dandeli-first multi-destination homepage |
| `/dandeli` | Destination overview and available Dandeli resort listing |
| `/dandeli/nature-mist` | Complete Nature Mist detail/package page |
| `/dandeli/fortune-woods` | Fortune Woods AC cottage packages with per-person-per-night sharing tariffs |
| `/dandeli/mantra` | Mantra package at ₹2,200/person, with no assumed duration or sharing category |
| `/wayanad` | Wayanad destination listing |
| `/wayanad/lands-end-resort` | Existing Land's End page, content preserved |
| `/wayanad-resorts/lands-end-resort` | Legacy client-side redirect preserving query parameters and hash |
| `/packages` | Approved Dandeli packages + link to existing Wayanad room/meal plans |
| `/packages#dandeli` | Homepage Dandeli packages CTA target |
| `/about-us` | Broader independent-assistance positioning |
| `/contact` | Existing contact channels + destination-aware enquiry form |
| `/privacy-policy`, `/terms`, `/booking-policy` | Existing legal pages, Terms brand wording broadened only |

### Main Files
- `src/lib/config.js`: business contacts, broad disclaimer, retained separate Land's End disclaimer, all original Land's End room/meal/gallery/FAQ data.
- `src/lib/destinations.js`: `NATURE_MIST`, `LANDS_END` listing reference, `DESTINATIONS`, derived `ALL_RESORTS` / `PACKAGE_RESORTS`; approved content, gallery, package, activity groups, FAQs, SEO and enquiry messages.
- `src/lib/fortuneWoods.js`: second Dandeli resort's supplied facts, five exact originals, six cottage/sharing tariffs, meals, activities, metadata and WhatsApp messages. Imported into Dandeli `resorts` after Nature Mist.
- `src/lib/mantra.js`: Mantra supplied data and five original JPEGs. Current Dandeli order is **Nature Mist → Mantra → Fortune Woods**; all menus/listings derive this order.
- `src/lib/whatsapp.js`: URL construction, general/detailed enquiries and tracked WhatsApp/call launch helpers.
- `src/lib/adsConversion.js`: Google Ads click-conversion reporting for contact actions.
- `src/hooks/useEnquiryContext.js`: route-aware resort message for shared CTAs.
- `src/hooks/useSEO.js`: route-specific title/description/canonical/OpenGraph/Twitter metadata.
- `src/lib/schema.js`: TravelAgency (Dandeli + Wayanad), website, preserved Land's End schema/breadcrumb/FAQ, reusable per-person package resort schema.
- `src/pages/Home.jsx`: composes the Dandeli-first homepage from reusable sections.
- `src/pages/Destination.jsx`: shared destination page template.
- `src/pages/PackageResort.jsx`: shared package-resort detail template using only provided resort data.
- `src/pages/Packages.jsx`: packages grouped by destination, only approved offers.
- `src/pages/Resort.jsx`: preserved Land's End page; only SEO hook/disclaimer alias and FAQ memoization updated.
- `src/components/site/`: Header, DestinationNav, Footer, DestinationHero, DestinationUI, PackageCard, ResortCard, ResortDetailSections, DandeliExperience, WhyDestina, Buttons, EnquiryForm, CheckAvailability, sticky CTAs and retained existing motion components.
- `src/App.js`: destination and package resort routes derive from catalogue; legacy URL redirects; route/hash scrolling.
- `public/sitemap.xml`: 13 canonical URLs, five images for each of the three Dandeli resorts and retained Wayanad imagery. Homepage image remains Fortune Woods aerial photo.
- `public/robots.txt`: retained sitemap configuration.
- `public/index.html`: multi-destination default SEO/OG tags, Search Console verification and the page-wide Google Ads tag.

### Adding Future Dandeli Resorts
1. Obtain actual approved resort details and images from the user; never generate placeholders or assume amenities/rates.
2. Add a complete resort object with unique id/path, names/location, heroLines, description, gallery, package (including unit/category/times), activities, sightseeing/transport notes, messages, FAQs and metadata.
3. Add that object to the Dandeli destination's `resorts` list in `destinations.js`.
4. Navigation, footer, destination listings, homepage package list, packages page, contact selector and package detail routes derive automatically from the catalogue.
5. Update sitemap entries/imagery and any desired featured selection; test new content/CTAs. No navbar/listing redesign required.

### Nature Mist Asset Provenance
All five user-supplied files downloaded unchanged under `public/images/nature-mist/`; corresponding full-dimension WebP copies are served for efficiency. No crops/filters/overlays on gallery photos; hero has only a readability overlay and responsive image crop.
| Supplied file | Local original | WebP used |
|---|---|---|
| WhatsApp Image 2026-09-12 at 8.55.07 PM (1).jpeg | photo-1.jpeg | bedroom.webp |
| destina_final_2.jpg | photo-2.jpg | dining.webp |
| destina_final_4 (1).jpg | photo-3.jpg | campfire.webp |
| destina_final_5.jpg | photo-4.jpg | garden.webp |
| ChatGPT Image Sep 12, 2026, 10_56_30 PM.png (user-supplied) | photo-5.png | pool.webp |
The pool photo is the hero; the four remaining images form the detail gallery. All five visually matched the user's attachments before use.

## Completed — 2026-09-12 Expansion
- Added Dandeli/Wayanad dropdowns, destination routes, Nature Mist details, Packages page and old-URL compatibility.
- Repositioned homepage in requested order with exact headline, compact ₹1,500/person package, featured Nature Mist, Dandeli experience, retained Why Destina design and secondary Land's End section.
- Added all supplied inclusions/activities/sightseeing/times, transport exclusion, package-category disclosure, six factual FAQs, five supplied images and multiple resort-specific WhatsApp CTAs.
- Updated global brand copy/footer/copyright, SEO titles/descriptions/social metadata/canonicals, TravelAgency geography and sitemap.
- Preserved Land's End original data, gallery, pricing, room/meal sections, FAQs and enquiry capability.
- Contact form supports generic enquiries, Nature Mist package enquiries and original Land's End room/meal enquiries; switching resorts clears incompatible choices. Improved phone/count validation, form labels and narrow-screen fit.
- Desktop sticky card remains clear of footer legal disclaimer and removes hidden controls from tab order. Mobile footer padding prevents bottom CTA overlap.
- Final testing findings addressed: removed the extra homepage marquee for exact section ordering; converted contact resort option labels to single text expressions to prevent a runtime span-inside-option warning.

## Verification
- Prior foundation: frontend test iteration_2 recorded 73/73 assertions (historic).
- Expansion: `/app/test_reports/iteration_3.json`, frontend-only regression, initially 96% with two findings above.
- Passed: all required routes and legacy query/hash redirect; desktop dropdown keyboard/click and mobile drawer; full approved Nature Mist content; all 5 images; resort-aware WhatsApp + tel links; Land's End rooms/meal plans/gallery/FAQs/form; contact selection/validation; footer/legal links; sticky CTA hiding; metadata/canonical/OG/JSON-LD; sitemap and robots.
- Responsive checks passed at 320, 390, 768, 1024, 1440 and 1920 widths with no horizontal overflow or identified overlapping controls.
- Follow-up browser tests verified exact homepage section sequence and plain-text resort options with no console errors.
- Final actual-button form tests passed for Nature Mist package and Land's End Bungalow/CP messages to +917019540319. No messages sent. Initial self-test capture mistakenly included a no-URL window.open probe; final verification filters for wa.me URLs and passes. Not an app defect.
- Verification logs: `/root/.emergent/automation_output/20260912_174755/console_20260912_174755.log` (order/options/console), `/root/.emergent/automation_output/20260912_174855/console_20260912_174855.log` (both form flows PASS).
- Production bundle compiled successfully. Test-only follow-up result: `/app/test_reports/iteration_3_followup.json`.
- No authentication/accounts/credentials needed. No backend/API or live inventory tests applicable.

## Prioritised Next Actions
- **P0: None** — all reported expansion issues corrected and verified.
- **P1:** User review of the new above-the-fold Check Availability form, including its resort-aware WhatsApp messages.
- **P2:** No fourth Dandeli resort requested or created. Only add further resorts when explicitly requested with supplied facts/photos.
- **P2:** Add genuine guest testimonials once collected (never fabricate reviews).
- **P1:** Review Google Ads conversion diagnostics after the published site receives real WhatsApp or call clicks.

## Constraints for Future Work
- Preserve frontend-only architecture and configured contact number.
- Never remove independent business/official-site disclaimers or mislabel package-unit pricing.
- Do not rewrite legitimate Wayanad-specific content as generic brand text.
- Keep Nature Mist supplied package details separate from Land's End room/meal-plan data.
- Read preview URL from current `frontend/.env`; production domain remains separate SEO configuration.

## Prior Increment — Fortune Woods (2026-09-12)
### User Requirements
Add ONE new Dandeli resort, Fortune Woods – Dandeli, as the second resort alongside Nature Mist. Minimise credits and code changes: reuse Nature Mist's existing page template, resort/package cards, gallery, pricing section, activities, FAQ, navigation, responsive styling and WhatsApp. Do not redesign, generate/AI-enhance images, create new complex UI, fabricate another resort, alter Nature Mist information/images/prices, or change Land's End/Wayanad/legal/contact/theme data.

User provided five Fortune Woods photos and explicitly requested **the SECOND uploaded image, the aerial view of the whole property, as the homepage hero**. All five original JPEGs are downloaded byte-for-byte; no AI or image modification used.

### Exact Approved Fortune Woods Content
- Resort: **Fortune Woods – Dandeli**, Dandeli, Karnataka.
- Summary: **Premium AC cottages with river views, comfortable stays, buffet meals, adventure activities and family-friendly entertainment in Dandeli.**
- Positioning: **Stay • Food • Adventure • Fun**.
- Original starting rate was ₹2,200/person/night for Maharaja 4 Sharing. **Current displayed starting rate is ₹2,500/person/night for River View Premium 4 Sharing (with extra mattress)**, per the later user request. Maharaja's 4 Sharing ₹2,200/person/night tariff is retained and explicitly disclosed; no six-row tariff changes.
- All rates explicitly **Per Person Per Night**, never room totals. No taxes, surcharges, check-in/out times, fixed-duration package, sightseeing or external resort website supplied; none invented.

| Cottage | 2 Sharing | 3 Sharing | 4 Sharing |
|---|---|---|---|
| AC River View Premium Cottage | ₹3,000/person/night | ₹2,700/person/night | ₹2,500/person/night (with extra mattress) |
| AC Maharaja Luxury Cottage | ₹2,700/person/night | ₹2,500/person/night | ₹2,200/person/night |

- Included meals: Buffet Lunch; Evening Tea / Coffee; Buffet Dinner; Buffet Breakfast.
- Activities (exactly 12): Kayaking; Boating; Zorbing; River Swimming; Nature Walk; Archery; Swimming Pool Access; Badminton; Target Shooting; Night Campfire; Carrom & Indoor Games; Kids Play Area.
- Card highlights: AC Cottages; River View; Buffet Meals; Adventure Activities; Swimming Pool; Campfire.
- Availability message: `Hi Destina Tours & Travels, I would like to check availability and pricing for Fortune Woods, Dandeli. Please share the available packages and booking details.`
- Detail message: `Hi Destina Tours & Travels, I am interested in Fortune Woods, Dandeli. Please share availability, cottage options, pricing and booking details.`
- SEO title: `Fortune Woods Dandeli | Resort & Packages | Destina Tours & Travels`.

### Exact Photo Mapping (Attachment Listing Order Differs from User Order)
Files under `frontend/public/images/fortune-woods/`:
| User's upload order | Photo | Local original | Usage |
|---|---|---|---|
| 1 | Portrait riverside terrace/deck | photo-5.jpeg | Fortune Woods hero, original image with responsive focal position |
| 2 | Aerial view of entire property | photo-4.jpeg | Homepage hero, Fortune Woods card, first gallery image |
| 3 | River-view restaurant | photo-3.jpeg | Gallery |
| 4 | AC cottage exterior | photo-2.jpeg | Gallery |
| 5 | AC cottage bedroom | photo-1.jpeg | Gallery |
All five are used on the dedicated Fortune Woods page: one hero plus four gallery images. Gallery preserves natural dimensions, lazy loading and existing responsiveness.

### Implemented with Existing Templates
- Added Fortune Woods data entry to Dandeli list, yielding exactly `[Nature Mist, Fortune Woods]`.
- Existing route generation, navbar dropdowns, Dandeli destination, Packages page, footer and contact selector pick up the second resort automatically.
- Homepage resort heading now **Explore Our Dandeli Resorts**, with the same Nature Mist card followed by the same component for Fortune Woods. Homepage's existing seven-section ordering retained; packages list similarly derives both approved resorts.
- Homepage hero photograph updated to the requested aerial image; no headline/design/theme changes.
- Existing `ResortPackageDetails` extended with an optional `tariffs` branch: same fonts/colours/borders, two cottage groups, six mobile-friendly sharing rows. Nature Mist's original duration/times/price branch retained.
- Existing package/card/page templates handle optional positioning/unit labels and omit unspecified check-in/out/sightseeing instead of copying Nature Mist's details.
- Existing activities section reuses its grid for the twelve supplied activities; existing six-question FAQ template reused with factual Fortune Woods answers.
- Shared WhatsApp context automatically targets Fortune Woods. Contact submission requests cottage/sharing options rather than silently selecting a cheapest cottage. Existing number unchanged.
- Necessary SEO/canonical and six per-person-per-night structured offers added; sitemap contains the route/five images. Homepage OG image matches the aerial hero.
- No new UI components, design system, dependencies, backend, integration or third-resort placeholder.

### Verification — PASS
- `yarn build` compiled successfully.
- Before/after SHA-256 checks confirm the complete Nature Mist data block is byte-identical; Land's End `Resort.jsx`, business/contact/original resort `config.js`, and legal `Policies.jsx` are byte-identical for this increment.
- One homepage smoke screenshot verified the correct aerial image and added resort card.
- `/app/test_reports/iteration_4.json`: **100% of focused frontend regression passed**, no issues or action items.
- Verified Fortune route, title/meta/canonical, six exact structured offers, all five original photos, six tariffs and units/extra-mattress qualification, four meals/twelve activities, factual FAQs, and no inherited Nature Mist timing/sightseeing.
- Verified homepage and Dandeli show exactly two resorts, desktop/mobile dropdowns, package card/detail links, footer, contact selection, and Fortune-aware WhatsApp across shared CTAs.
- Nature Mist data/display and Land's End room/meal/contact flow regression passed.
- No horizontal overflow at 320/390/768/1440/1920, and no observed console regressions.
- WhatsApp tests intercept genuine wa.me links only; no real enquiries sent. No app flow is mocked or known broken.

## Latest Increment — Mantra + Fortune Featured Price (2026-09-12)
### User Requirements and Clarifications
Low-cost content addition using the exact existing Dandeli templates/components; no redesign, new integration, AI images, invented facts or fourth resort. Add **Mantra – Dandeli** at `/dandeli/mantra`. User's final order supersedes their earlier list: **Nature Mist → Mantra → Fortune Woods**. Add to homepage resort section, Dandeli page and existing navigation; other data-driven package/footer/contact surfaces inherit the entry.

User also requested Fortune Woods displayed starting price ₹2,500, then clarified **"no let it be 2200 for maharaja tents"**. Retain the original six tariffs including Maharaja 4 Sharing ₹2,200; display ₹2,500 against the already-provided River View Premium 4 Sharing option (with extra mattress). The card, package note and FAQ explicitly retain the cheaper Maharaja option, avoiding misleading minimum-rate claims. Existing cottage names, other rates, meals, activities and photos are unchanged.

### Exact Mantra Content
- Name/location: Mantra – Dandeli; Dandeli, Karnataka.
- Tariff: **₹2,200 / person**. No supplied duration, room rate, sharing category, times, taxes, extra mattress or additional charges; none inferred.
- Summary: **Enjoy a comfortable Dandeli stay with buffet meals, river activities, nature experiences, adventure activities and evening campfire entertainment.**
- Highlights (7): Buffet Meals; River Activities; Nature Walk; Swimming Pool; Rain Dance; Campfire; Kids Play Area.
- **Package Inclusions** (4): Buffet Lunch (Mix); Evening Tea/Coffee; Buffet Dinner (Mix); Buffet Breakfast.
- **Activities Included:** (13): River Kayaking; River Boating; River Zorbing; River Swimming; Nature Walk; Archery; Swimming Pool; Rain Dance; Badminton; Target Shooting; Night Campfire; Carom; Kids Play Area. Preserve "Carom" spelling and exact meal labels.
- All direct Mantra enquiry CTAs: `Hi Destina Tours & Travels, I am interested in Mantra, Dandeli. Please share availability, pricing and booking details.` Existing +917019540319 and wa.me implementation retained.
- Get More Details routes to `/dandeli/mantra`, not WhatsApp.
- SEO title: `Mantra Dandeli Resort | Destina Tours & Travels`.
- SEO description: `Explore Mantra Dandeli with buffet meals, river activities, nature experiences, swimming pool, adventure activities and campfire. Enquire with Destina Tours & Travels.`

### Mantra Photos
Five supplied original JPEGs downloaded byte-for-byte under `frontend/public/images/mantra/`. Attachment listing is reversed relative to user presentation:
| User order | Content | Local file / usage |
|---|---|---|
| 1 | Pool at sunset | photo-5.jpeg — hero and resort card |
| 2 | Cottages and green fields | photo-4.jpeg — first gallery image/package card |
| 3 | Cottages at night | photo-3.jpeg — gallery |
| 4 | Daytime cottage pathway | photo-2.jpeg — gallery |
| 5 | Bedroom and balcony | photo-1.jpeg — gallery |
All five appear on Mantra's page, using the unchanged gallery component. No image generation, AI enhancement, replacement or file alteration. Homepage retains Fortune Woods' aerial hero.

### Implementation Scope
- New `mantra.js` data entry; registration between Nature Mist and Fortune Woods; added sitemap route and five images.
- Reused existing cards, detail page, gallery, pricing, meals, activities, FAQ, buttons, navigation and responsive styles. No new UI components/dependencies.
- Minimal optional-field guards prevent an unspecified duration/category/timing from appearing as `undefined`, empty check-in/out rows or a dangling separator. Contact message composition omits absent fields; actual WhatsApp integration/number untouched.
- `exactPrice` suppresses "Starting from" only for Mantra's resort card; all its prices use `person`, never `person/night`.
- Existing pricing section handles Mantra's supplied tariff without pretending it is a Nature Mist package. JSON-LD contains Offer 2200 with person unit and no fabricated fields.
- Fortune featured-price/category/note/FAQ updated as requested, six underlying tariff rows preserved.
- Testing identified a non-blocking Framer Motion advisory: default document scroll container was statically positioned. Added one `position: relative` declaration on root to resolve it without layout/theme/animation redesign.

### Verification — PASS
- `yarn build` compiled successfully. Before/after hashes verify the full Nature Mist data block and original Land's End page, contact/business config and legal-page sources are unchanged.
- One Mantra hero smoke screenshot passed with the correct first photo and ₹2,200/person price.
- `/app/test_reports/iteration_5.json`: **100% of focused functional scope passed** — three-resort ordering on homepage/Dandeli/nav/footer, all Mantra facts/images/SEO/structured data/sitemap, details/WhatsApp links, contact form and existing Nature/Fortune/Land's End checks.
- Fortune displayed ₹2,500 River View option and preserved Maharaja ₹2,200 explicitly verified.
- Responsive checks passed at 320/390/768/1920, without horizontal overflow or blocking errors.
- Follow-up self-test fixed and verified the scroll-container advisory on fresh Mantra and homepage loads: root relative, fixed header remains at viewport top, no overflow, warning absent. Log: `/root/.emergent/automation_output/20260912_183617/console_20260912_183617.log`.
- No outstanding defects, mocked app integrations, authentication/credential changes or real WhatsApp messages sent.

## Latest Increment — Above-Hero Availability Enquiry (2026-09-12)
### User Requirements
- Add an enquiry block named **Check Availability** directly after the hero.
- Replace the long official-site sentence in page-top disclosures with: **“Destina Tours and Travels is an independent travel and booking assistance business.”**
- Preserve the full existing footer disclaimer.

### Implemented
- Created reusable `CheckAvailability` and placed it immediately after the hero across Home, Dandeli/Wayanad destinations, Dandeli resort details, Packages, About, Contact and Land's End.
- The section collects travel dates and guests, then opens genuine pre-filled WhatsApp enquiries. Resort pages automatically attach their specific resort name.
- Moved Land's End's lower enquiry experience to the new placement and removed Contact's redundant second form.
- Page-top notices now use the requested short wording; the detailed Google Ads footer notice remains unchanged.

### Verification — PASS
- `yarn build` compiled successfully.
- Desktop smoke test confirmed the homepage block, the short top notice and unchanged detailed footer notice.
- Browser regression passed on Home, Dandeli, Mantra, Packages, About, Contact and Land's End: every key hero page shows Check Availability and its short disclosure.
- Mobile Mantra form test generated the correct resort-specific `wa.me` enquiry to +917019540319; no real message was sent.

## Latest Increment — Google Ads Contact Conversion Tracking (2026-09-16)
### Implemented
- Installed the Google tag once in `public/index.html` for Google Ads ID `AW-18349153988`.
- Added the provided conversion destination `AW-18349153988/-9x_CNPtldkcEMS9x61E` to every genuine WhatsApp and telephone CTA through shared contact helpers.
- Covered shared buttons, header, drawer, footer, mobile bottom bar, desktop sticky card, availability forms and individual room enquiry buttons. WhatsApp opens normally; phone calls wait briefly for the conversion request and still proceed if the tag is blocked.

### Verification — PASS
- `yarn build` compiled successfully.
- Browser test confirmed exactly one global Google tag, plus one conversion event for a WhatsApp click and one for a call click, each using the supplied conversion destination.
- No PII is sent with Google Ads events and no live WhatsApp messages or phone calls were placed during verification.

## Latest Increment — Dandeli Multi-Duration Packages, Zoho SalesIQ, Privacy Update (2026-02)
### User Requirements
- Change the Dandeli package duration everywhere from "1 Night / 1 Day" to three selectable durations across all three Dandeli resorts (Nature Mist, Fortune Woods, Mantra): **1 Night / 2 Days**, **2 Nights / 3 Days**, **3 Nights / 4 Days**.
- Pricing formula: 1N/2D = existing base price; 2N/3D = (base × 2) − ₹400; 3N/4D = (base × 3) − ₹400. Apply individually to every resort/cottage/sharing combination. Base tariffs unchanged.
- Add a compact duration selector (default 1N/2D) above pricing on every Dandeli resort detail page; price updates immediately, no reload.
- All three Dandeli resorts must show identical standard inclusions: **PACKAGE INCLUDES** — Stay, Food, River Activities, Nature Trek, Indoor & Outdoor Games, Campfire + Music — across all durations, on detail pages and homepage package cards. Resort-specific activities/cottage info and Wayanad/Land's End inclusions stay untouched.
- WhatsApp enquiry buttons must dynamically reflect the selected resort, duration, price and (for Fortune Woods) cottage + sharing — reusing the existing WhatsApp number/integration.
- Install Zoho SalesIQ live chat (`wc=siq58e3741d4dae2384ffa77badac1b2f58f52744a3a1f659e781cf58c336b19ce7`) site-wide, loaded once, without disturbing WhatsApp functionality.
- Add a Zoho SalesIQ visitor-tracking/cookie disclosure section (with Zoho Privacy/Cookie Policy links) to the existing Privacy Policy page; no other legal pages/content changed.

### Implemented
- New shared helper `src/lib/dandeliPricing.js`: `DANDELI_DURATIONS`, `durationPrice(base, key)` formula, `DANDELI_INCLUSIONS`/`DANDELI_INCLUSIONS_TITLE` ("PACKAGE INCLUDES"), and `packageEnquiryMessage()` builder (resort, duration, price, optional cottage/sharing) reusing the existing `BUSINESS`/WhatsApp number — no new integration created.
- `lib/destinations.js`, `lib/mantra.js`, `lib/fortuneWoods.js`: all three Dandeli `package` objects now carry `duration: "1 Night / 2 Days"`, `durations: DANDELI_DURATIONS`, and the standard `inclusionsTitle`/`inclusions`. Fortune Woods `unit`/`unitLabel`/`rateNote`/`cardRateNote` reworded from "per night" to "per person" package pricing. Stale "1 Night / 1 Day" / "per night" copy removed from enquiry messages, SEO descriptions and FAQs (Nature Mist, Mantra, Fortune Woods, `Packages.jsx`, `lib/schema.js`).
- `components/site/ResortDetailSections.jsx` (`ResortPackageDetails`): added a `DurationSelector` (pill buttons, default 1N/2D, `useState`) rendered above pricing on every Dandeli resort page. Simple-price resorts (Nature Mist, Mantra) recompute the displayed price and the bottom "Check Availability" WhatsApp message live. Fortune Woods recomputes every cottage/sharing rate and adds a per-row dynamic "Enquire" WhatsApp button (resort, cottage, sharing, duration, price). No change needed in `PackageCard`, `ResortCard`, `PackageResort` hero, `schema.js` or `whatsapp.js` — they already read `package.duration`/`price` generically, so adding the fields to Mantra/Fortune Woods data automatically fixed their homepage/hero duration labels too.
- `public/index.html`: added the exact Zoho SalesIQ snippet once, right before `</body>` (global CRA shell, loads on every route).
- `pages/Policies.jsx`: added the "Website Visitor Tracking and Live Chat – Zoho SalesIQ" section (exact supplied disclosure + Zoho Privacy/Cookie Policy links) to the existing Privacy Policy; no other policy content changed. No pre-existing cookie-consent banner was found, so none needed updating.

### Verification
- `yarn build` / dev server compiled successfully, no new warnings.
- Confirmed via curl: Zoho `zsiqscript` tag present exactly once in the served HTML.
- Verified the duration-price formula in isolation for all 8 price points (Nature Mist, Fortune Woods × 2 cottages × 3 sharings, Mantra) — all match the exact values supplied by the user.
- Screenshot verification: Fortune Woods hero/package section renders "1 Night / 2 Days" by default, the 3 duration pills, "PACKAGE INCLUDES" with all 6 standard items, and per-row "Enquire" buttons with per-person pricing.
- Per explicit user instruction, this round was shipped **without** a full testing-subagent regression pass; a follow-up regression is recommended before relying on this for production traffic.

### Follow-up — Duration Toggle on Homepage Package Cards (2026-02)
- Extracted the duration-pill UI into a shared `components/site/DurationSelector.jsx` (used by both the resort-detail pricing section and the homepage cards — no duplicated markup).
- `components/site/PackageCard.jsx` (used in Home's "Popular Dandeli Packages" and the `/packages` page) now shows the same 1N/2D · 2N/3D · 3N/4D toggle; selecting a duration updates the card's price, duration label and the "Check Availability" WhatsApp message live, for all three Dandeli resorts.
- `yarn build` compiled successfully; verified via code path reuse of the already-tested `durationPrice`/`packageEnquiryMessage` helpers.
