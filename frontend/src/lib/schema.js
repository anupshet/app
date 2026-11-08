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
  areaServed: [
    { "@type": "Place", name: "Dandeli, Karnataka, India" },
    { "@type": "Place", name: "Wayanad, Kerala, India" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:00-21:00",
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
  slogan: "Independent Travel & Resort Booking Assistance Service",
  description: "An independent travel and resort booking assistance service offering curated stays and packages across selected destinations, including Dandeli and Wayanad.",
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
  "@id": `${SITE.url}/wayanad/lands-end-resort#resort`,
  name: RESORT.name,
  url: `${SITE.url}/wayanad/lands-end-resort`,
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
    { "@type": "ListItem", position: 2, name: "Wayanad Resorts", item: `${SITE.url}/wayanad` },
    { "@type": "ListItem", position: 3, name: "Land's End Resort & Spa", item: `${SITE.url}/wayanad/lands-end-resort` },
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

export function packageResortLd(resort) {
  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    "@id": `${SITE.url}${resort.path}#resort`,
    name: resort.name,
    url: `${SITE.url}${resort.path}`,
    description: resort.description,
    image: resort.gallery.map((image) => new URL(image.src, SITE.url).href),
    address: { "@type": "PostalAddress", addressLocality: resort.city, addressRegion: resort.state, addressCountry: "IN" },
    checkinTime: resort.package.checkInISO, checkoutTime: resort.package.checkOutISO,
    makesOffer: resort.package.tariffs ? resort.package.tariffs.flatMap((cottage) => cottage.rates.map((rate) => ({
      "@type": "Offer", name: `${cottage.name} — ${rate.sharing} Sharing${rate.note ? ` (${rate.note})` : ""}`,
      price: rate.price, priceCurrency: "INR", url: `${SITE.url}${resort.path}`,
      priceSpecification: { "@type": "UnitPriceSpecification", price: rate.price, priceCurrency: "INR", unitText: "person" },
      description: "Per Person. Prices and availability are subject to confirmation.",
    }))) : {
      "@type": "Offer", name: [resort.package.duration ? `${resort.package.duration} Package` : resort.package.title, resort.package.category].filter(Boolean).join(" — "),
      price: resort.package.price, priceCurrency: "INR", url: `${SITE.url}${resort.path}`,
      priceSpecification: { "@type": "UnitPriceSpecification", price: resort.package.price, priceCurrency: "INR", unitText: "person" },
      description: [`₹${resort.package.price.toLocaleString("en-IN")} per ${resort.package.unit}.`, resort.package.category ? `${resort.package.category}.` : null, "Prices and availability are subject to confirmation.", resort.transportNote].filter(Boolean).join(" "),
    },
  };
}
