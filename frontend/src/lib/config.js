// Central business + resort configuration. Update contact values here only.

export const SITE = {
  // Replace with your production domain when live (used by sitemap + JSON-LD).
  url: "https://www.destinatoursandtravels.com",
};

export const BUSINESS = {
  name: "Destina Tours and Travels",
  legalName: "Destina Tours and Travels",
  tagline: "Booking assistance for premium stays in Wayanad",
  whatsapp: "+91XXXXXXXXXX",
  phone: "+91XXXXXXXXXX",
  email: "your-email@yourdomain.com",
  addressShort: "Wayanad, Kerala, India",
};

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
  hero: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/msk34vr8_WhatsApp%20Image%202026-07-06%20at%202.19.05%20PM.jpeg",
  bedroom: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/vtpolilk_WhatsApp%20Image%202026-07-06%20at%202.19.09%20PM.jpeg",
  cafe: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/cvqtgnon_WhatsApp%20Image%202026-07-06%20at%202.19.10%20PM%20%281%29.jpeg",
  valley: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/rc0gh76i_WhatsApp%20Image%202026-07-06%20at%202.19.11%20PM.jpeg",
  bungalow: "https://customer-assets-m6fa6gv7.emergentagent.net/job_4d361d6d-d29f-4410-be14-fdb7b63b77db/artifacts/qu9nijqg_WhatsApp%20Image%202026-07-06%20at%202.19.13%20PM.jpeg",
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

export const FAQS = [
  {
    q: "Is this the official Land's End Resort website?",
    a: "No. Destina Tours and Travels is an independent booking assistance service. We help travellers enquire about availability, pricing and coordination for stays at Land's End Resort & Spa, Wayanad.",
  },
  {
    q: "How do I get final pricing and availability?",
    a: "Send us a WhatsApp enquiry with your travel dates, guests and preferred room type. We'll share the latest available pricing after confirming with the resort.",
  },
  {
    q: "What are the check-in and check-out timings?",
    a: `Check-in ${RESORT.checkIn} · Check-out ${RESORT.checkOut}. Early check-in / late check-out is subject to availability on the day of arrival.`,
  },
  {
    q: "Are taxes included in the tariff?",
    a: "Tariffs are exclusive of applicable taxes. Final invoice will reflect all applicable taxes and package inclusions.",
  },
  {
    q: "Do you handle group and corporate bookings?",
    a: "Yes. Reach out on WhatsApp with your group size and dates for a tailored group offer.",
  },
];
