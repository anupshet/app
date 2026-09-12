import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { DISCLAIMER } from "../../lib/config";
import { WhatsAppButton, CallButton } from "./Buttons";

export const SectionHeading = ({ eyebrow, title, testId, light = false }) => (
  <div className="mb-10 md:mb-14" data-testid={testId}>
    <p className={`text-[10px] uppercase tracking-[0.24em] ${light ? "text-[#D4CBBF]" : "text-[#8B5A2B]"}`}>{eyebrow}</p>
    <h2 className="mt-4 font-serif text-4xl font-light leading-[1.08] md:text-6xl">{title}</h2>
  </div>
);

export const RouteButton = ({ to, children, testId, light = false }) => (
  <Link to={to} data-testid={testId} className={`group inline-flex max-w-full items-center justify-center gap-3 rounded-full border px-6 py-4 text-[11px] uppercase tracking-[0.14em] transition-colors duration-500 ${light ? "border-[#F7F5F0]/50 text-[#F7F5F0] hover:bg-[#F7F5F0] hover:text-[#0A170F]" : "border-[#0A170F]/30 text-[#0A170F] hover:bg-[#0A170F] hover:text-[#F7F5F0]"}`}>
    <span>{children}</span><ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </Link>
);

export const DisclaimerStrip = ({ testId = "disclaimer-strip" }) => (
  <div className="bg-[#2C402B] text-[#F7F5F0]" data-testid={testId}>
    <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 py-4 lg:px-10">
      <ShieldCheck className="h-4 w-4 shrink-0 text-[#D4CBBF]" />
      <p className="text-[11px] leading-relaxed md:text-xs">{DISCLAIMER}</p>
    </div>
  </div>
);

export const BookingCTA = ({ testId, title = "Your next escape starts with a conversation.", message, text = "Dandeli or Wayanad — share your destination, travel dates and guest count. We’ll help you with availability, pricing and booking details." }) => (
  <section id={testId} className="bg-[#2C402B] py-20 text-[#F7F5F0] md:py-28" data-testid={testId}>
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4CBBF]">Destina Tours &amp; Travels · Booking Assistance</p>
      <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.06] md:text-6xl">{title}</h2>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F7F5F0]/80">{text}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <WhatsAppButton message={message} testId={`${testId}-whatsapp`} />
        <CallButton testId={`${testId}-call`} />
      </div>
      <p className="mt-6 text-xs text-[#F7F5F0]/70" data-testid={`${testId}-pricing-note`}>Prices and availability are subject to confirmation.</p>
    </div>
  </section>
);