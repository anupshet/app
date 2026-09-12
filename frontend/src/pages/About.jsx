import { RevealText, FadeIn } from "../components/site/RevealText";
import ImageCrop from "../components/site/ImageCrop";
import { IMAGES, BUSINESS, DISCLAIMER, WHY_CHOOSE_US } from "../lib/config";
import { WhatsAppButton, CallButton } from "../components/site/Buttons";
import { useSEO } from "../hooks/useSEO";
import { Link } from "react-router-dom";
import { Check, ShieldCheck } from "lucide-react";

const WHAT_WE_DO = [
  "Resort availability enquiries",
  "Accommodation information",
  "Room and package selection guidance",
  "Pricing information",
  "Booking coordination",
  "Travel planning assistance",
];

const STEPS = [
  { n: "01", t: "Share your travel details", d: "Send us your travel dates and requirements over WhatsApp or the enquiry form." },
  { n: "02", t: "We check availability", d: "We check availability and suitable stay options for your dates." },
  { n: "03", t: "You get the latest price", d: "We provide the latest available pricing based on your selection." },
  { n: "04", t: "We coordinate the booking", d: "We assist with booking coordination end to end." },
];

export default function About() {
  useSEO(
    "About Us | Destina Tours and Travels",
    "Destina Tours & Travels offers independent travel and resort booking assistance for curated stays and packages in Dandeli and Wayanad."
  );
  return (
    <main data-testid="about-page">
      <section className="relative isolate h-[70svh] min-h-[520px] w-full overflow-hidden bg-[#0A170F]">
        <img src={IMAGES.bungalow} alt="Kerala-style bungalow at dusk at Land's End Resort" className="absolute inset-0 h-full w-full scale-110 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A170F]/50 via-[#0A170F]/30 to-[#0A170F]/90" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 lg:px-10 lg:pb-24">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/80">Chapter · About</p>
          <RevealText
            as="h1"
            lines={["A quieter way", "to book a stay."]}
            className="mt-6 max-w-3xl font-serif text-[10vw] font-light leading-[0.9] tracking-tight text-[#F7F5F0] md:text-[7vw] lg:text-[6.5rem]"
          />
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-[#2C402B] text-[#F7F5F0]" data-testid="about-disclaimer">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 py-3 lg:px-10">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#D4CBBF]" />
          <p className="text-[11px] leading-relaxed text-[#F7F5F0]/90 md:text-xs">{DISCLAIMER}</p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">01 · Who We Are</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1] tracking-tight text-[#0A170F] md:text-6xl">
              {BUSINESS.name}
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-[#0A170F]/80 md:text-lg">
              Destina Tours and Travels is an independent travel and resort booking assistance service offering curated stays and packages across selected destinations, including Dandeli and Wayanad.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#0A170F]/70">
              We are not the official website of any listed resort. Our role is to help you plan, price and finalise your stay with personal, transparent guidance.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">02 · What We Do</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1] tracking-tight text-[#0A170F] md:text-5xl">
              We assist customers with
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {WHAT_WE_DO.map((item, i) => (
                <FadeIn key={item} delay={i * 0.04}>
                  <li className="flex items-start gap-3 border-b border-[#0A170F]/10 pb-4" data-testid={`what-we-do-${i}`}>
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#2C402B]/10 text-[#2C402B]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-[#0A170F]/80">{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How Our Process Works */}
      <section className="bg-[#0A170F] py-24 text-[#F7F5F0] md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/60">03 · How Our Process Works</p>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">Four unhurried steps.</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.05}>
                <div className="flex h-full flex-col border-t border-[#F7F5F0]/20 pt-6" data-testid={`about-step-${i}`}>
                  <p className="font-serif text-6xl leading-none tracking-tight text-[#D4CBBF]">{s.n}</p>
                  <h3 className="mt-6 font-serif text-2xl leading-tight">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#F7F5F0]/75">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us + CTA */}
      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-7">
            <ImageCrop src={IMAGES.cafe} alt="Café Bamboo dining area at Land's End Resort" className="aspect-[4/3] w-full" parallax />
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">04 · Why Choose Us</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1] tracking-tight text-[#0A170F] md:text-5xl">
              Planning made effortless.
            </h2>
            <ul className="mt-8 space-y-4">
              {WHY_CHOOSE_US.map((w) => (
                <li key={w} className="flex items-center gap-3 text-sm text-[#0A170F]/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#2C402B]/10 text-[#2C402B]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-[#0A170F]/70">
              WhatsApp is the fastest way to reach us. We usually respond within a few hours during business hours ({BUSINESS.hours}).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton />
              <CallButton variant="primary" className="!bg-[#0A170F] !text-[#F7F5F0] hover:!bg-[#2C402B]" />
            </div>
            <p className="mt-6 text-xs text-[#0A170F]/60">
              Explore our destinations:{" "}
              <Link to="/dandeli" data-testid="about-explore-dandeli" className="underline underline-offset-2 hover:text-[#8B5A2B]">Dandeli</Link>{" · "}
              <Link to="/wayanad" data-testid="about-explore-wayanad" className="underline underline-offset-2 hover:text-[#8B5A2B]">Wayanad</Link>{" · "}
              <Link to="/contact" data-testid="about-contact" className="underline underline-offset-2 hover:text-[#8B5A2B]">Contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
