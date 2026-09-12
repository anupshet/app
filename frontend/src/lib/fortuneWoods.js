// User-supplied Fortune Woods content and original uploaded photos only.
export const FORTUNE_WOODS = {
  id: "fortune-woods", destinationId: "dandeli", path: "/dandeli/fortune-woods",
  name: "Fortune Woods – Dandeli", navName: "Fortune Woods",
  city: "Dandeli", state: "Karnataka", location: "Dandeli, Karnataka",
  heroLines: ["Fortune Woods", "Dandeli."],
  description: "Premium AC cottages with river views, comfortable stays, buffet meals, adventure activities and family-friendly entertainment in Dandeli.",
  gallery: [
    { src: "/images/fortune-woods/photo-5.jpeg", alt: "Riverside terrace surrounded by trees at Fortune Woods Dandeli", caption: "By the river", objectPosition: "center 75%" },
    { src: "/images/fortune-woods/photo-4.jpeg", alt: "Aerial view of the entire Fortune Woods Dandeli property beside the river, with cottages, lawn and pool", caption: "Fortune Woods from above" },
    { src: "/images/fortune-woods/photo-3.jpeg", alt: "River-view restaurant at Fortune Woods Dandeli at sunset", caption: "Dining with a river view" },
    { src: "/images/fortune-woods/photo-2.jpeg", alt: "AC river-view cottage exterior and garden at Fortune Woods Dandeli", caption: "River-view cottages" },
    { src: "/images/fortune-woods/photo-1.jpeg", alt: "AC river-view cottage bedroom overlooking the river at Fortune Woods Dandeli", caption: "A look inside" },
  ],
  cardImage: { src: "/images/fortune-woods/photo-4.jpeg", alt: "Aerial view of Fortune Woods Dandeli cottages, pool and riverside grounds" },
  highlights: ["AC Cottages", "River View", "Buffet Meals", "Adventure Activities", "Swimming Pool", "Campfire"],
  package: {
    positioning: "Stay • Food • Adventure • Fun",
    title: "Cottage options & pricing",
    price: 2500, unit: "person/night", unitLabel: "Per Person Per Night",
    category: "AC River View Premium Cottage · 4 Sharing (with extra mattress)",
    rateNote: "Shown starting price applies to 4 Sharing in the AC River View Premium Cottage, with extra mattress. Maharaja 4 Sharing remains ₹2,200/person/night.",
    cardRateNote: "Maharaja 4 Sharing also available at ₹2,200/person/night.",
    inclusions: ["Buffet Lunch", "Evening Tea / Coffee", "Buffet Dinner", "Buffet Breakfast"],
    tariffs: [
      { id: "river-view", name: "AC River View Premium Cottage", rates: [
        { sharing: 2, price: 3000 },
        { sharing: 3, price: 2700 },
        { sharing: 4, price: 2500, note: "with extra mattress" },
      ] },
      { id: "maharaja", name: "AC Maharaja Luxury Cottage", rates: [
        { sharing: 2, price: 2700 },
        { sharing: 3, price: 2500 },
        { sharing: 4, price: 2200 },
      ] },
    ],
  },
  activities: [{ id: "fun", title: "Fun-filled Activities", icon: "Waves", items: [
    "Kayaking", "Boating", "Zorbing", "River Swimming", "Nature Walk", "Archery",
    "Swimming Pool Access", "Badminton", "Target Shooting", "Night Campfire", "Carrom & Indoor Games", "Kids Play Area",
  ] }],
  availabilityMessage: "Hi Destina Tours & Travels, I would like to check availability and pricing for Fortune Woods, Dandeli. Please share the available packages and booking details.",
  enquiryMessage: "Hi Destina Tours & Travels, I am interested in Fortune Woods, Dandeli. Please share availability, cottage options, pricing and booking details.",
  seoTitle: "Fortune Woods Dandeli | Resort & Packages | Destina Tours & Travels",
  seoDescription: "Explore Fortune Woods Dandeli resort packages with AC cottages, river view stays, buffet meals and activities. Contact Destina for cottage options and availability.",
  faqs: [
    { q: "Which option does the displayed starting price apply to?", a: "The displayed ₹2,500/person/night starting price is for 4 Sharing in the AC River View Premium Cottage, with extra mattress. The AC Maharaja Luxury Cottage 4 Sharing tariff remains ₹2,200/person/night. All listed tariffs are Per Person Per Night, not room prices." },
    { q: "What are the AC River View Premium Cottage rates?", a: "Per Person Per Night: 2 Sharing — ₹3,000; 3 Sharing — ₹2,700; 4 Sharing with extra mattress — ₹2,500." },
    { q: "What are the AC Maharaja Luxury Cottage rates?", a: "Per Person Per Night: 2 Sharing — ₹2,700; 3 Sharing — ₹2,500; 4 Sharing — ₹2,200." },
    { q: "Which meals are included?", a: "Buffet Lunch, Evening Tea / Coffee, Buffet Dinner and Buffet Breakfast." },
    { q: "Which activities are listed?", a: "Kayaking, Boating, Zorbing, River Swimming, Nature Walk, Archery, Swimming Pool Access, Badminton, Target Shooting, Night Campfire, Carrom & Indoor Games and Kids Play Area." },
    { q: "How do I check availability?", a: "Contact Destina Tours & Travels on WhatsApp with your dates and guest count for availability, cottage options, pricing and booking details. Destina is an independent booking assistance service, not the official resort website. Prices and availability are subject to confirmation." },
  ],
};