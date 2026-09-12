import { RevealText } from "../components/site/RevealText";
import { WhatsAppButton, CallButton } from "../components/site/Buttons";
import { BUSINESS, DISCLAIMER } from "../lib/config";
import { Mail, MessageCircle, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { IMAGES } from "../lib/config";
import CheckAvailability from "../components/site/CheckAvailability";

export default function Contact() {
  useSEO(
    "Contact Us | Destina Tours and Travels",
    "Contact Destina Tours & Travels for Dandeli and Wayanad resort booking assistance. WhatsApp, call or email us for Nature Mist packages, Land's End stays and availability."
  );
  return (
    <main data-testid="contact-page">
      <section className="relative isolate h-[60svh] min-h-[440px] w-full overflow-hidden bg-[#0A170F]">
        <img src={IMAGES.bedroom} alt="Warm wooden bedroom interior at Land's End Resort" className="absolute inset-0 h-full w-full scale-110 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A170F]/60 via-[#0A170F]/30 to-[#0A170F]/95" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-14 lg:px-10 lg:pb-20">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/80">Chapter · Contact</p>
          <RevealText as="h1" lines={["Let's plan your", "escape together."]}
            className="mt-6 max-w-3xl font-serif text-[10vw] font-light leading-[0.9] tracking-tight text-[#F7F5F0] md:text-[7vw] lg:text-[6rem]" />
        </div>
      </section>

      <CheckAvailability testId="contact-check-availability" destinationMode />

      {/* Disclaimer */}
      <div className="bg-[#2C402B] text-[#F7F5F0]" data-testid="contact-disclaimer">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 py-3 lg:px-10">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#D4CBBF]" />
          <p className="text-[11px] leading-relaxed text-[#F7F5F0]/90 md:text-xs">{DISCLAIMER}</p>
        </div>
      </div>

      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">Direct lines</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1] tracking-tight text-[#0A170F] md:text-5xl">
              Reach {BUSINESS.name}
            </h2>

            <ul className="mt-10 space-y-6">
              <ContactLine icon={MessageCircle} label="WhatsApp"       value={BUSINESS.whatsapp} testId="contact-whatsapp-line" />
              <ContactLine icon={Phone}         label="Phone"          value={BUSINESS.phone}    testId="contact-phone-line" />
              <ContactLine icon={Mail}          label="Email"          value={BUSINESS.email}    testId="contact-email-line" />
              <ContactLine icon={MapPin}        label="Location"       value={BUSINESS.addressShort} testId="contact-address-line" />
              <ContactLine icon={Clock}         label="Business Hours" value={BUSINESS.hours}    testId="contact-hours-line" />
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppButton />
              <CallButton variant="primary" className="!bg-[#0A170F] !text-[#F7F5F0] hover:!bg-[#2C402B]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactLine({ icon: Icon, label, value, testId }) {
  return (
    <li className="flex items-center gap-4 border-b border-[#0A170F]/15 pb-6" data-testid={testId}>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#0A170F]/20">
        <Icon className="h-4 w-4 text-[#8B5A2B]" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#0A170F]/60">{label}</p>
        <p className="mt-1 break-words font-serif text-xl leading-snug text-[#0A170F] sm:text-2xl">{value}</p>
      </div>
    </li>
  );
}
