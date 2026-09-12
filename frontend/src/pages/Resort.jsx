import { useMemo } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, Users, ArrowUpRight, ShieldCheck } from "lucide-react";
import { IMAGES, GALLERY, ROOMS, MEAL_PLANS, RESORT, FAQS, LANDS_END_DISCLAIMER as DISCLAIMER } from "../lib/config";
import { openWhatsApp } from "../lib/whatsapp";
import { useSEO } from "../hooks/useSEO";
import { RevealText, FadeIn } from "../components/site/RevealText";
import { WhatsAppButton, CallButton } from "../components/site/Buttons";
import ImageCrop from "../components/site/ImageCrop";
import CheckAvailability from "../components/site/CheckAvailability";
import { useJsonLd } from "../hooks/useJsonLd";
import { resortLodgingLd, resortBreadcrumbLd, faqLd } from "../lib/schema";
import { LANDS_END } from "../lib/destinations";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "../components/ui/accordion";

function ResortHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section ref={ref} className="relative isolate h-[92svh] min-h-[600px] w-full overflow-hidden bg-[#0A170F]" data-testid="resort-hero">
      <motion.img style={{ y }} src={IMAGES.valley} alt="Wayanad valley view from Land's End Resort" className="absolute inset-0 h-full w-full scale-110 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A170F]/50 via-[#0A170F]/20 to-[#0A170F]/90" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/80">
          Chapter · Land's End Resort &amp; Spa
        </motion.p>
        <RevealText
          as="h1"
          lines={["Stay amidst the", "natural beauty", "of Wayanad."]}
          className="mt-6 max-w-4xl font-serif text-[10vw] font-light leading-[0.9] tracking-tight text-[#F7F5F0] md:text-[7.5vw] lg:text-[7rem]"
          stagger={0.14}
          duration={1}
        />
        <FadeIn delay={1.2}>
          <p className="mt-8 max-w-xl text-base text-[#F7F5F0]/80 md:text-lg">
            A cliffside sanctuary of wooden bungalows, misty valley mornings and unhurried evenings — coordinated for you by Destina Tours &amp; Travels.
          </p>
        </FadeIn>
        <FadeIn delay={1.4}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#enquiry" data-testid="resort-hero-check"
               className="group inline-flex items-center gap-3 rounded-full bg-[#F7F5F0] px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#0A170F] transition-colors duration-500 hover:bg-[#e6dfd0]">
              Check Availability <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </a>
            <WhatsAppButton />
            <CallButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">01 · Overview</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-[#0A170F] md:text-7xl">
            A resort at<br /><em className="not-italic text-[#8B5A2B]">the edge of quiet.</em>
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-8">
          <p className="max-w-2xl text-base leading-relaxed text-[#0A170F]/75 md:text-lg">
            {RESORT.name} sits on the edge of a Wayanad valley, framed by forests, bamboo groves and a river running below.
            The property blends warm wooden interiors with premium rustic architecture — an infinity pool that opens onto
            the mountains, Café Bamboo for slow mornings, and cottages that hum with evening lantern light.
          </p>
          <div className="mt-10 grid gap-6 border-t border-[#0A170F]/15 pt-8 sm:grid-cols-3">
            <Fact icon={MapPin}  label="Location"   value={`${RESORT.city}, ${RESORT.state}`} />
            <Fact icon={Clock}   label="Check-in"   value={`${RESORT.checkIn} · Check-out ${RESORT.checkOut}`} />
            <Fact icon={Users}   label="Extra Person" value={RESORT.extraPerson} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ icon: Icon, label, value }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#8B5A2B]">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#0A170F]/80">{value}</p>
    </div>
  );
}

function ResortGallery() {
  return (
    <section className="bg-[#0A170F] py-24 text-[#F7F5F0] md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/60">02 · Experience</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              The resort, in <em className="not-italic text-[#D4CBBF]">five frames.</em>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <FadeIn className="md:col-span-6">
            <ImageCrop src={GALLERY[0].src} alt={GALLERY[0].alt} parallax className="aspect-[4/3] w-full">
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="font-serif text-2xl md:text-3xl">{GALLERY[0].caption}</p>
                <span className="text-[10px] uppercase tracking-[0.32em] opacity-80">01</span>
              </div>
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.06} className="md:col-span-6">
            <ImageCrop src={GALLERY[1].src} alt={GALLERY[1].alt} className="aspect-[4/3] w-full">
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="font-serif text-2xl md:text-3xl">{GALLERY[1].caption}</p>
                <span className="text-[10px] uppercase tracking-[0.32em] opacity-80">02</span>
              </div>
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-4">
            <ImageCrop src={GALLERY[2].src} alt={GALLERY[2].alt} className="aspect-[4/5] w-full">
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="font-serif text-2xl md:text-3xl">{GALLERY[2].caption}</p>
                <span className="text-[10px] uppercase tracking-[0.32em] opacity-80">03</span>
              </div>
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.16} className="md:col-span-4">
            <ImageCrop src={GALLERY[3].src} alt={GALLERY[3].alt} parallax className="aspect-[4/5] w-full">
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="font-serif text-2xl md:text-3xl">{GALLERY[3].caption}</p>
                <span className="text-[10px] uppercase tracking-[0.32em] opacity-80">04</span>
              </div>
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.22} className="md:col-span-4">
            <ImageCrop src={GALLERY[4].src} alt={GALLERY[4].alt} className="aspect-[4/5] w-full">
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="font-serif text-2xl md:text-3xl">{GALLERY[4].caption}</p>
                <span className="text-[10px] uppercase tracking-[0.32em] opacity-80">05</span>
              </div>
            </ImageCrop>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section id="accommodation" className="bg-[#F7F5F0] py-24 md:py-32" data-testid="resort-rooms">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">03 · Rooms</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-[#0A170F] md:text-7xl">
              Choose your <em className="not-italic text-[#8B5A2B]">room.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#0A170F]/70">
            Starting from ₹{RESORT.startingPrice.toLocaleString("en-IN")} per night. Final pricing subject to travel dates and taxes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ROOMS.map((r, i) => (
            <FadeIn key={r.id} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden border border-[#0A170F]/10 bg-white">
                <ImageCrop src={r.image} alt={r.name} className="aspect-[4/5] w-full" scrim={false} />
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl leading-tight text-[#0A170F]">{r.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#8B5A2B]">0{i + 1}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#0A170F]/70">{r.description}</p>
                  </div>
                  <div className="mt-6 border-t border-[#0A170F]/10 pt-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#0A170F]/60">{r.suitableFor}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-serif italic text-[#8B5A2B]">From ₹{r.from.toLocaleString("en-IN")}</p>
                      <button
                        data-testid={`resort-room-enquire-${r.id}`}
                        onClick={() => openWhatsApp(`Hi Destina Tours and Travels, I'd like to enquire about the ${r.name} at ${RESORT.name}, ${RESORT.city}. Please share availability and pricing.`)}
                        className="group/btn inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#0A170F]"
                      >
                        Enquire <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="bg-[#2C402B] py-24 text-[#F7F5F0] md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/60">04 · Meal Plans</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">Plans &amp; inclusions.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#F7F5F0]/75">
            Meal inclusions are subject to the selected package and resort confirmation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MEAL_PLANS.map((m, i) => (
            <div key={m.code} className="flex h-full flex-col justify-between border border-[#F7F5F0]/20 bg-[#0A170F]/30 p-8" data-testid={`resort-plan-${m.code}`}>
              <div>
                <p className="font-serif text-6xl leading-none tracking-tight">{m.code}</p>
                <h3 className="mt-6 font-serif text-2xl leading-tight">{m.name}</h3>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#F7F5F0]/80">{m.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">06 · FAQ</p>
        <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-[#0A170F] md:text-7xl">
          Small print, made plain.
        </h2>
        <Accordion type="single" collapsible className="mt-12 border-t border-[#0A170F]/15">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-[#0A170F]/15">
              <AccordionTrigger data-testid={`resort-faq-${i}`} className="py-6 text-left font-serif text-xl text-[#0A170F] hover:no-underline md:text-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 text-sm leading-relaxed text-[#0A170F]/70">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function Resort() {
  useSEO("Land's End Resort Wayanad Booking | Destina Tours and Travels", "Plan your Wayanad getaway at Land's End Resort & Spa. Enquire about room options, stay plans, availability, and booking assistance through Destina Tours and Travels.", { image: IMAGES.valley });
  const faqs = useMemo(() => faqLd(FAQS), []);
  useJsonLd("resort-lodging", resortLodgingLd);
  useJsonLd("resort-breadcrumb", resortBreadcrumbLd);
  useJsonLd("resort-faq", faqs);
  return (
    <main data-testid="resort-page">
      <ResortHero />
      <CheckAvailability testId="resort-check-availability" resort={LANDS_END} />
      <div className="bg-[#2C402B] text-[#F7F5F0]" data-testid="resort-disclaimer">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 py-3 lg:px-10">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#D4CBBF]" />
          <p className="text-[11px] leading-relaxed text-[#F7F5F0]/90 md:text-xs">{DISCLAIMER}</p>
        </div>
      </div>
      <Overview />
      <ResortGallery />
      <Rooms />
      <Plans />
      <Faq />
    </main>
  );
}
