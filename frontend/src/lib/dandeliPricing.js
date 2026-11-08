// Shared Dandeli package-duration pricing logic.
// Formula: 1N/2D = base price. 2N/3D = (base x 2) - 400. 3N/4D = (base x 3) - 400.
// Kept standalone (no imports from destinations.js) to avoid circular imports
// since destinations.js, mantra.js and fortuneWoods.js all need this file.

export const DANDELI_DURATIONS = [
  { key: "1n2d", label: "1 Night / 2 Days" },
  { key: "2n3d", label: "2 Nights / 3 Days" },
  { key: "3n4d", label: "3 Nights / 4 Days" },
];

export const DANDELI_INCLUSIONS_TITLE = "PACKAGE INCLUDES";
export const DANDELI_INCLUSIONS = ["Stay", "Food", "River Activities", "Nature Trek", "Indoor & Outdoor Games", "Campfire + Music"];

export function durationPrice(basePrice, durationKey) {
  if (durationKey === "2n3d") return basePrice * 2 - 400;
  if (durationKey === "3n4d") return basePrice * 3 - 400;
  return basePrice;
}

export function packageEnquiryMessage(resort, { durationLabel, price, cottage, sharing }) {
  const lines = [
    `Hi Destina Tours & Travels,`,
    `I am interested in ${resort.name}.`,
    "",
    `Selected Resort: ${resort.navName || resort.name}`,
  ];
  if (cottage) lines.push(`Cottage: ${cottage}`);
  if (sharing) lines.push(`Sharing: ${sharing}`);
  lines.push(`Duration: ${durationLabel}`);
  lines.push(`Price: ₹${price.toLocaleString("en-IN")}/person`);
  lines.push("", "Please share availability and booking details.");
  return lines.join("\n");
}
