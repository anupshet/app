import { BUSINESS, RESORT, digitsOnly } from "./config";
import { reportContactConversion } from "./adsConversion";

/**
 * Build a wa.me URL with a properly URL-encoded message.
 * Works on both mobile and desktop.
 */
export function waLink(message) {
  const num = digitsOnly(BUSINESS.whatsapp);
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${BUSINESS.phone}`;
}

export function generalEnquiryMessage() {
  return `Hi ${BUSINESS.name}, I would like to enquire about resort stays and packages in Dandeli or Wayanad. Please help me with availability, pricing and booking details.`;
}

export function detailedEnquiryMessage({
  name,
  phone,
  checkIn,
  checkOut,
  adults,
  children,
  roomType,
  mealPlan,
  message,
}, resort = { name: `${RESORT.name}, ${RESORT.city}` }) {
  const lines = [
    `Hi ${BUSINESS.name}, I would like to enquire about ${resort ? resort.name : "resort stays and packages in Dandeli or Wayanad"}.`,
    "",
  ];
  if (name)     lines.push(`Name: ${name}`);
  if (phone)    lines.push(`Phone: ${phone}`);
  if (checkIn)  lines.push(`Check-in: ${checkIn}`);
  if (checkOut) lines.push(`Check-out: ${checkOut}`);
  if (adults !== undefined && adults !== "")     lines.push(`Adults: ${adults}`);
  if (children !== undefined && children !== "") lines.push(`Children: ${children}`);
  if (roomType) lines.push(`Room Type: ${roomType}`);
  if (mealPlan) lines.push(`Meal Plan: ${mealPlan}`);
  if (resort?.package) {
    if (resort.package.duration || resort.package.positioning) lines.push(`Package: ${resort.package.duration || resort.package.positioning}`);
    if (resort.package.tariffs) lines.push("Please share available cottage and sharing options.");
    else if (resort.package.category) lines.push(`Category: ${resort.package.category}`);
  }
  if (message)  lines.push(`Notes: ${message}`);
  lines.push("", "Please share the latest availability and final price.");
  return lines.join("\n");
}

export function openWhatsApp(message) {
  const url = waLink(message);
  reportContactConversion();
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
  return url;
}

export function openCall() {
  const url = telLink();
  if (typeof window === "undefined") return url;
  reportContactConversion(() => window.location.assign(url));
  return url;
}
