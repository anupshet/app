import { SITE, BUSINESS, RESORT, IMAGES, GALLERY, digitsOnly } from "./config";

const galleryUrls = GALLERY.map((g) => g.src);
const waNum = digitsOnly(BUSINESS.whatsapp);
const telNum = digitsOnly(BUSINESS.phone);

export const travelAgencyLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE.url}#organization`,
  name: BUSINESS.name,
  url: SITE.url,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  areaServed: { "@type": "Place", name: "Wayanad, Kerala, India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wayanad",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: BUSINESS.phone,
      availableLanguage: ["English", "Malayalam", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      contactType: "reservations",
      url: `https://wa.me/${waNum}`,
      availableLanguage: ["English", "Malayalam", "Hindi"],
    },
  ],
  sameAs: [`tel:${telNum}`, `https://wa.me/${waNum}`],
  slogan: "Booking assistance for premium stays in Wayanad",
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}#website`,
  url: SITE.url,
  name: BUSINESS.name,
  publisher: { "@id": `${SITE.url}#organization` },
  inLanguage: "en-IN",
};

export const resortLodgingLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "@id": `${SITE.url}/wayanad-resorts/lands-end-resort#resort`,
  name: RESORT.name,
  url: `${SITE.url}/wayanad-resorts/lands-end-resort`,
  description:
    "Land's End Resort & Spa is a premium cliffside retreat in Wayanad with warm wooden interiors, an infinity pool overlooking the valley, and Café Bamboo — bookable via Destina Tours and Travels.",
  image: [IMAGES.hero, IMAGES.valley, IMAGES.bungalow, IMAGES.bedroom, IMAGES.cafe],
  photo: galleryUrls,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wayanad",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  checkinTime: "14:00",
  checkoutTime: "11:00",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Infinity Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Valley View", value: true },
    { "@type": "LocationFeatureSpecification", name: "Café / Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
  ],
  makesOffer: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: RESORT.startingPrice,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "INR",
      price: RESORT.startingPrice,
      unitCode: "DAY",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "DAY" },
    },
    availability: "https://schema.org/InStock",
    seller: { "@id": `${SITE.url}#organization` },
    description: "Starting from ₹5,000 per night. Final pricing subject to travel dates, availability, taxes and selected meal plan.",
  },
  brand: { "@type": "Brand", name: "Land's End Resort & Spa" },
  isAccessibleForFree: false,
};

export const homeBreadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
  ],
};

export const resortBreadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Wayanad Resorts", item: `${SITE.url}/wayanad-resorts/lands-end-resort` },
    { "@type": "ListItem", position: 3, name: "Land's End Resort & Spa", item: `${SITE.url}/wayanad-resorts/lands-end-resort` },
  ],
};

export function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
