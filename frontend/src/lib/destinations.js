import { IMAGES, RESORT } from "./config";
import { FORTUNE_WOODS } from "./fortuneWoods";

// Only supplied, available properties belong here. Menus, listings, packages and
// detail routes read this catalogue; adding a resort never requires a redesign.
export const NATURE_MIST = {
  id: "nature-mist",
  destinationId: "dandeli",
  path: "/dandeli/nature-mist",
  name: "Nature Mist – Dandeli",
  navName: "Nature Mist",
  city: "Dandeli", state: "Karnataka",
  heroLines: ["Nature Mist", "Dandeli."],
  location: "Dandeli, Karnataka",
  description: "A nature-focused Dandeli stay combining comfortable accommodation, meals, river activities, nature experiences, games and evening campfire experiences.",
  website: "https://dandeliwildadventures.in",
  websiteLabel: "Dandeliwildadventures.in",
  gallery: [
    { src: "/images/nature-mist/pool.webp", alt: "Swimming pool at Nature Mist Dandeli at dusk", caption: "Poolside at dusk" },
    { src: "/images/nature-mist/garden.webp", alt: "Red-brick cottages and garden at Nature Mist Dandeli", caption: "Cottages & greenery" },
    { src: "/images/nature-mist/campfire.webp", alt: "Evening campfire beside tents at Nature Mist Dandeli", caption: "Campfire evenings" },
    { src: "/images/nature-mist/dining.webp", alt: "Open dining pavilion at Nature Mist Dandeli", caption: "The dining pavilion" },
    { src: "/images/nature-mist/bedroom.webp", alt: "Bedroom with two beds at Nature Mist Dandeli", caption: "A look inside" },
  ],
  highlights: ["Stay", "Food", "River Activities", "Nature Trek", "Swimming Pool", "Campfire + Music"],
  package: {
    duration: "1 Night / 1 Day",
    price: 1500,
    unit: "person",
    category: "Group / Sharing Cottage",
    checkIn: "11:30 AM",
    checkOut: "10:30 AM",
    checkInISO: "11:30", checkOutISO: "10:30",
    inclusions: ["Stay", "Food", "River Activities", "Nature Trek", "Indoor & Outdoor Games", "Campfire + Music"],
  },
  activities: [
    { id: "water", title: "Free Water Activities", icon: "Waves", items: ["Boating", "Kayaking", "Zorbing"] },
    { id: "games", title: "Games", icon: "Target", items: ["Carrom", "Dart", "Archery", "Badminton"] },
    { id: "other", title: "Other Activities", icon: "Flame", items: ["Swimming Pool", "Nature Walk / Trek", "Rain Dance", "Campfire + Music"] },
  ],
  sightseeing: ["Supa Dam", "Crocodile Park", "Moulangi Park", "Kali River View"],
  transportNote: "Sightseeing transport is not included and is available at additional cost.",
  enquiryMessage: "Hi Destina Tours & Travels, I am interested in the Nature Mist Dandeli 1 Night / 1 Day package. Please share availability and booking details.",
  availabilityMessage: "Hi Destina Tours & Travels, I would like to check availability for the Nature Mist Dandeli package. Please share availability, pricing and booking details.",
  seoTitle: "Nature Mist Dandeli Resort & Package | Destina Tours & Travels",
  seoDescription: "Explore Nature Mist Dandeli's 1 Night / 1 Day package at ₹1,500 per person in a Group / Sharing Cottage. Enquire with Destina for availability and booking details.",
  faqs: [
    { q: "What is the Nature Mist package price?", a: "The 1 Night / 1 Day package is ₹1,500 / person for a Group / Sharing Cottage. This is a per-person package price, not a nightly room rate. Prices and availability are subject to confirmation." },
    { q: "What are the check-in and check-out times?", a: "Check-in is 11:30 AM and check-out is 10:30 AM." },
    { q: "What does the package include?", a: "Stay, Food, River Activities, Nature Trek, Indoor & Outdoor Games, and Campfire + Music. Free water activities listed are Boating, Kayaking and Zorbing." },
    { q: "Is sightseeing transport included?", a: "Sightseeing transport is not included and is available at additional cost. Listed sightseeing places are Supa Dam, Crocodile Park, Moulangi Park and Kali River View." },
    { q: "How do I enquire or confirm my stay?", a: "Contact Destina Tours & Travels on WhatsApp with your travel dates and guest count. We assist with availability, pricing and booking details. An enquiry is not a confirmed booking; confirmation is shared after verification." },
    { q: "Is Destina the official Nature Mist website?", a: "No. Destina Tours and Travels is an independent travel and resort booking assistance service, not the official website of Nature Mist or any listed resort." },
  ],
};

export const LANDS_END = {
  id: "lands-end-resort", destinationId: "wayanad", path: "/wayanad/lands-end-resort",
  name: RESORT.name, navName: "Land's End Resort", location: "Wayanad, Kerala",
  description: "Perched on the edge of a Wayanad valley, Land's End is a serene retreat of warm wooden interiors, a cliffside infinity pool and long, unhurried mornings at Café Bamboo.",
  image: { src: IMAGES.hero, alt: "Land's End Resort infinity pool in Wayanad" },
  startingPrice: RESORT.startingPrice,
  enquiryMessage: `Hi Destina Tours and Travels, I would like to enquire about staying at ${RESORT.name}, ${RESORT.city}. Please share the latest availability and best available price.`,
};

export const DESTINATIONS = [
  {
    id: "dandeli", name: "Dandeli", path: "/dandeli", location: "Karnataka",
    title: "Dandeli Resorts & Packages", headline: ["Experience", "Dandeli."],
    description: "Nature, adventure and time to unwind. Explore the Kali River, river activities, nature walks and wildlife experiences, with a relaxing resort stay to return to.",
    experiences: ["Kali River", "River activities", "Nature walks", "Adventure experiences", "Campfire evenings"],
    image: NATURE_MIST.gallery[1], resorts: [NATURE_MIST, FORTUNE_WOODS],
    seoTitle: "Dandeli Resorts & Packages | Destina Tours & Travels",
    seoDescription: "Discover Dandeli stays and packages with Destina Tours & Travels. Explore Nature Mist and Fortune Woods with independent resort booking assistance.",
  },
  {
    id: "wayanad", name: "Wayanad", path: "/wayanad", location: "Kerala",
    title: "Wayanad Resorts", headline: ["Explore", "Wayanad."],
    description: "Misty valleys, forest views and unhurried resort stays. Explore Land's End Resort & Spa with personalized booking assistance from Destina Tours & Travels.",
    image: { src: IMAGES.valley, alt: "Misty Wayanad valley seen from Land's End Resort" }, resorts: [LANDS_END],
    seoTitle: "Wayanad Resorts & Stays | Destina Tours & Travels",
    seoDescription: "Explore Land's End Resort & Spa in Wayanad. View rooms, meal plans and indicative pricing with independent booking assistance from Destina Tours & Travels.",
  },
];

export const ALL_RESORTS = DESTINATIONS.flatMap((destination) => destination.resorts);
export const PACKAGE_RESORTS = ALL_RESORTS.filter((resort) => resort.package);
export const formatPrice = (value) => `₹${value.toLocaleString("en-IN")}`;