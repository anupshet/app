import { RevealText } from "../components/site/RevealText";
import { useSEO } from "../hooks/useSEO";

export function PolicyLayout({ chapter, title, seoTitle, seoDescription, children }) {
  useSEO(seoTitle || `${title} | Destina Tours and Travels`, seoDescription);
  return (
    <main className="bg-[#F7F5F0] pb-32 pt-40 md:pt-48" data-testid={`policy-${chapter.toLowerCase()}`}>
      <div className="mx-auto max-w-[900px] px-6 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">Chapter · {chapter}</p>
        <RevealText as="h1" lines={[title]}
          className="mt-4 font-serif text-5xl leading-[1] tracking-tight text-[#0A170F] md:text-7xl" />
        <div className="mt-12 space-y-8 text-sm leading-relaxed text-[#0A170F]/80 md:text-base [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-[#0A170F] [&_p]:max-w-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}

export function PrivacyPolicy() {
  return (
    <PolicyLayout chapter="Privacy" title="Privacy Policy">
      <p>Destina Tours and Travels ("we", "us") respects your privacy. This policy explains how we collect and use the information you share while enquiring about a resort stay.</p>
      <h2>Information we collect</h2>
      <p>When you send a booking enquiry, we collect the details you share — such as your name, phone number, travel dates, number of guests, room preference and meal plan preference — via WhatsApp, phone or the enquiry form on this site.</p>
      <h2>How we use it</h2>
      <p>We use this information solely to check availability, share pricing and coordinate your booking with the resort. We do not sell or rent your information to third parties.</p>
      <h2>Data retention</h2>
      <p>We retain enquiry information for the duration required to complete your booking and for reasonable follow-up communication.</p>
      <h2>Contact</h2>
      <p>For any privacy-related questions, please reach out to us on WhatsApp or email us at the address listed on the Contact page.</p>
    </PolicyLayout>
  );
}

export function Terms() {
  return (
    <PolicyLayout chapter="Terms" title="Terms & Conditions">
      <p>By using this website, you agree to the terms outlined below. Destina Tours and Travels acts as a booking assistance service and is not the official website of Land's End Resort &amp; Spa.</p>
      <h2>Pricing &amp; availability</h2>
      <p>All prices displayed on this website are indicative starting rates. Final pricing and availability are subject to confirmation based on travel dates, room availability, applicable taxes and the selected meal plan. Tariffs may change without prior notice.</p>
      <h2>Booking confirmation</h2>
      <p>A booking is only considered confirmed once we share written confirmation and any required payment has been completed as per the resort's policy.</p>
      <h2>Property policies</h2>
      <p>Resort check-in, check-out, extra person charges and children policies are set by the resort and are subject to change. Please confirm the most recent policies at the time of booking.</p>
      <h2>Third-party links</h2>
      <p>Any external links, brand names and images used on this site belong to their respective owners.</p>
    </PolicyLayout>
  );
}

export function BookingPolicy() {
  return (
    <PolicyLayout chapter="Booking" title="Booking & Cancellation">
      <p>The following outlines our booking &amp; cancellation approach. Specific terms may be adjusted per the selected property's policy at the time of booking. Prices and availability are subject to confirmation.</p>

      <h2>Booking Process</h2>
      <p>• All bookings are subject to availability.<br />
        • Availability must be confirmed before payment.<br />
        • Booking confirmation will be communicated after verification.</p>

      <h2>Pricing</h2>
      <p>• Prices are subject to availability.<br />
        • Prices may vary based on travel dates.<br />
        • Taxes may apply separately.<br />
        • Final pricing is confirmed before booking.</p>

      <h2>Cancellation</h2>
      <p>• Cancellation policies may vary depending on the selected property.<br />
        • Applicable cancellation terms will be communicated before booking confirmation.</p>

      <h2>Refunds</h2>
      <p>• Refund eligibility depends on the resort's cancellation terms.<br />
        • Customers should verify cancellation conditions before confirming a booking.</p>

      <h2>Force Majeure</h2>
      <p>In case of natural events or circumstances beyond reasonable control, we will work with the resort to reschedule your stay or process a refund as applicable per the property's policy.</p>
    </PolicyLayout>
  );
}
