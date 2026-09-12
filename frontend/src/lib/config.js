// Central business + resort configuration. Update contact values here only.

export const SITE = {
  // Production domain — used by sitemap.xml, robots.txt and JSON-LD.
  url: "https://destinatoursandtravels.in",
};

export const BUSINESS = {
  name: "Destina Tours and Travels",
  legalName: "Destina Tours and Travels",
  tagline: "Independent Travel & Resort Booking Assistance Service",
  whatsapp: "+917019540319",
  phone: "+917019540319",
  email: "travel@destinatoursandtravels.in",
  addressShort: "Bangalore, Karnataka, India",
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
  hours: "Monday to Sunday · 9:00 AM – 9:00 PM",
};

// Prominent, Google-Ads-compliant disclaimer shown across the site.
export const DISCLAIMER =
  "Destina Tours and Travels is an independent travel and booking assistance business. This is not the official website of any listed resort, including Nature Mist – Dandeli and Land's End Resort & Spa.";

export const LANDS_END_DISCLAIMER =
  "Destina Tours and Travels is an independent travel and booking assistance business. This is not the official website of Land's End Resort & Spa.";

export const PRICING_NOTE = "Prices and availability are subject to confirmation.";

// Strip non-digits for wa.me / tel: hrefs
export const digitsOnly = (s) => String(s || "").replace(/\D/g, "");

export const RESORT = {
  name: "Land's End Resort & Spa",
  city: "Wayanad",
  state: "Kerala",
  country: "India",
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
  extraPerson: "₹1,200 + applicable tax, subject to resort terms",
  childrenPolicy: "Children below 6 stay complimentary, subject to resort terms",
  startingPrice: 5000,
};

// Uploaded real photography of Land's End Resort & Spa
export const IMAGES = {
  hero: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/vtpolilk_WhatsApp%20Image%202026-07-06%20at%202.19.09%20PM.jpeg",
  bedroom: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/msk34vr8_WhatsApp%20Image%202026-07-06%20at%202.19.05%20PM.jpeg",
  cafe: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/qu9nijqg_WhatsApp%20Image%202026-07-06%20at%202.19.13%20PM.jpeg",
  valley: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/rc0gh76i_WhatsApp%20Image%202026-07-06%20at%202.19.11%20PM.jpeg",
  bungalow: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/cvqtgnon_WhatsApp%20Image%202026-07-06%20at%202.19.10%20PM%20%281%29.jpeg",
};

export const GALLERY = [
  { src: IMAGES.hero,     caption: "Infinity Pool",            alt: "Infinity pool at Land's End Resort with Wayanad mountain view" },
  { src: IMAGES.bedroom,  caption: "The Wooden Retreat",       alt: "Warm wooden bedroom interior at Land's End Resort" },
  { src: IMAGES.valley,   caption: "Breathtaking Valley Views",alt: "Misty Wayanad valley view from Land's End Resort balcony" },
  { src: IMAGES.bungalow, caption: "Evenings Made Calm",       alt: "Kerala-style bungalow at dusk at Land's End Resort" },
  { src: IMAGES.cafe,     caption: "Café Bamboo",              alt: "Open-air Café Bamboo with wooden tables at Land's End Resort" },
];

export const ROOMS = [
  {
    id: "bungalow",
    name: "Bungalow",
    image: IMAGES.bungalow,
    description: "Warm Kerala-style standalone bungalow with private porch and evening lantern lighting.",
    suitableFor: "Couples & small families",
    from: 5000,
  },
  {
    id: "valley-view",
    name: "Valley View",
    image: IMAGES.valley,
    description: "Wake up to misty valleys, distant rivers and the sound of forest below your balcony.",
    suitableFor: "Couples seeking views",
    from: 6000,
  },
  {
    id: "arayum-purayum",
    name: "Arayum Purayum",
    image: IMAGES.bedroom,
    description: "A traditional Kerala-inspired wooden interior stay with a cozy, cinematic atmosphere.",
    suitableFor: "Culture & heritage lovers",
    from: 6000,
  },
  {
    id: "forest-view",
    name: "Forest View",
    image: IMAGES.cafe,
    description: "Nestled beside the bamboo grove — the forest is your morning window.",
    suitableFor: "Nature retreats",
    from: 6000,
  },
];

export const MEAL_PLANS = [
  { code: "CP",  name: "Continental Plan",       blurb: "Breakfast-based stay plan. Ideal for flexible travellers." },
  { code: "MAP", name: "Modified American Plan", blurb: "Stay with selected meals as applicable per resort confirmation." },
  { code: "AP",  name: "American Plan",          blurb: "Full board stay plan, subject to resort inclusions." },
];

export const TRUST_CARDS = [
  { title: "Scenic Wayanad Location",     body: "Relax amidst the hills, forests and valley views of Wayanad." },
  { title: "Multiple Stay Options",       body: "Choose from Bungalow, Valley View, Arayum Purayum and Forest View accommodations." },
  { title: "Flexible Meal Plans",         body: "Enquire about CP, MAP and AP stay plans as per your preference." },
  { title: "Direct Booking Assistance",   body: "Connect with Destina Tours and Travels for availability and coordination." },
];

// "Why Book Through Destina Tours and Travels?" — homepage trust signals.
export const WHY_DESTINA = [
  { icon: "UserRound",      title: "Personalized Booking Assistance", body: "Real, human help tailored to your dates, group size and travel preferences." },
  { icon: "MessageCircle",  title: "Quick WhatsApp Support",          body: "Fast, friendly responses so your enquiry never waits in a queue." },
  { icon: "BadgeIndianRupee", title: "Transparent Pricing Information", body: "Clear pricing guidance with no hidden surprises — confirmed before you book." },
  { icon: "Compass",        title: "Direct Travel Guidance",          body: "Room recommendations, package advice and end-to-end trip coordination." },
];

export const WHY_CHOOSE_US = [
  "Personalized assistance",
  "Quick WhatsApp support",
  "Transparent communication",
  "Hassle-free enquiry process",
];

export const FAQS = [
  {
    q: "Is this the official website of Land's End Resort?",
    a: "No. Destina Tours and Travels is an independent travel and booking assistance business that helps customers enquire about stays at Land's End Resort & Spa.",
  },
  {
    q: "How do I check availability?",
    a: "Share your travel dates and guest count through WhatsApp or phone. We will assist with availability information.",
  },
  {
    q: "Are displayed prices final?",
    a: "No. Final pricing depends on travel dates, room type, meal plan, availability, and applicable taxes. Prices and availability are subject to confirmation.",
  },
  {
    q: "How does booking work?",
    a: "Contact us through WhatsApp or phone, share your requirements, and we will assist with the booking process.",
  },
  {
    q: "Can I contact you before making a booking?",
    a: "Yes. We encourage customers to contact us for room recommendations, availability checks, and package information.",
  },
];
