import { BUSINESS, RESORT, digitsOnly } from "./config";

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
  return `Hi ${BUSINESS.name}, I would like to enquire about staying at ${RESORT.name}, ${RESORT.city}. Please share the latest availability and best available price.`;
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
}) {
  const lines = [
    `Hi ${BUSINESS.name}, I would like to enquire about ${RESORT.name}, ${RESORT.city}.`,
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
  if (message)  lines.push(`Notes: ${message}`);
  lines.push("", "Please share the latest availability and final price.");
  return lines.join("\n");
}

export function openWhatsApp(message) {
  const url = waLink(message);
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
  return url;
}
