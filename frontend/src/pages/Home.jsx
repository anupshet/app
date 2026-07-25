import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { IMAGES, GALLERY, TRUST_CARDS, ROOMS, MEAL_PLANS, RESORT, FAQS } from "../lib/config";
import { openWhatsApp, generalEnquiryMessage } from "../lib/whatsapp";
import { RevealText, FadeIn } from "../components/site/RevealText";
import { WhatsAppButton, CallButton, GhostButton } from "../components/site/Buttons";
import EditorialMarquee from "../components/site/Marquee";
import ImageCrop from "../components/site/ImageCrop";
import EnquiryForm from "../components/site/EnquiryForm";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "../components/ui/accordion";

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section ref={ref} className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0A170F]" data-testid="hero-section">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img src={IMAGES.valley} alt="Misty Wayanad valley view from Land's End Resort" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A170F]/60 via-[#0A170F]/25 to-[#0A170F]/85" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,#F7F5F0_1px,transparent_0)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
        <div className="flex items-start justify-between">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/80"
          >
            01 &nbsp;/&nbsp; The Sanctuary · Wayanad, Kerala
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}
            className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/70 md:flex"
          >
            <MapPin className="h-3 w-3" />
            11°N · 76°E
          </motion.div>
        </div>

        <div className="max-w-5xl">
          <RevealText
            testId="hero-headline"
            as="h1"
            lines={["Escape to the", "hills of Wayanad."]}
            className="font-serif text-[13vw] font-light leading-[0.9] tracking-tight text-[#F7F5F0] md:text-[9vw] lg:text-[8rem]"
            stagger={0.15}
            duration={1.05}
          />
          <FadeIn delay={1.35}>
            <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-[#F7F5F0]/85 md:text-lg">
              A peaceful resort stay at {RESORT.name} — booking assistance handled with care by Destina Tours &amp; Travels.
            </p>
          </FadeIn>
          <FadeIn delay={1.55}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry"
                data-testid="hero-check-availability"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F7F5F0] px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#0A170F] transition-colors duration-500 hover:bg-[#e6dfd0]"
              >
                Check Availability
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
              <WhatsAppButton />
              <CallButton />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/70"
        aria-hidden
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}

function TrustChapter() {
  return (
    <section className="relative bg-[#F7F5F0] py-24 md:py-32" data-testid="trust-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">02 &nbsp;/&nbsp; Why Us</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight text-[#0A170F] md:text-6xl">
              Curated with the calm of Wayanad in mind.
            </h2>
          </div>
          <div className="grid gap-6 md:col-span-8 md:grid-cols-2">
            {TRUST_CARDS.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-between border-t border-[#0A170F]/20 pt-6" data-testid={`trust-card-${i}`}>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#8B5A2B]">0{i + 1}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-[#0A170F] md:text-3xl">{c.title}</h3>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-[#0A170F]/70">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedResort() {
  return (
    <section className="relative bg-[#0A170F] py-24 text-[#F7F5F0] md:py-32" data-testid="featured-resort">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/60">03 &nbsp;/&nbsp; Featured Resort</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Land's End<br /><em className="not-italic text-[#D4CBBF]">Resort &amp; Spa</em>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-[#F7F5F0]/75">
              Perched on the edge of a Wayanad valley, Land's End is a serene retreat of warm wooden interiors,
              a cliffside infinity pool and long, unhurried mornings at Café Bamboo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/wayanad-resorts/lands-end-resort"
                    data-testid="explore-resort-btn"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#F7F5F0] px-6 py-4 text-xs uppercase tracking-[0.22em] text-[#0A170F] transition-colors duration-500 hover:bg-[#e6dfd0]">
                Explore Resort <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
              <button
                onClick={() => openWhatsApp(generalEnquiryMessage())}
                data-testid="featured-whatsapp"
                className="inline-flex items-center gap-2 rounded-full border border-[#F7F5F0]/40 px-6 py-4 text-xs uppercase tracking-[0.22em] text-[#F7F5F0] transition-colors duration-500 hover:bg-[#F7F5F0] hover:text-[#0A170F]"
              >
                WhatsApp Enquiry
              </button>
            </div>
          </div>
          <div className="md:col-span-7">
            <FadeIn>
              <ImageCrop src={IMAGES.hero} alt="Land's End Resort infinity pool" parallax className="aspect-[4/3] w-full">
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#F7F5F0]">
                  <MapPin className="h-3.5 w-3.5" /> Wayanad, Kerala
                </div>
              </ImageCrop>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualExperience() {
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32" data-testid="visual-experience">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">04 &nbsp;/&nbsp; Visual Chapter</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight text-[#0A170F] md:text-7xl">
              A stay shaped by <em className="not-italic text-[#8B5A2B]">light,</em> wood &amp; forest.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#0A170F]/70">
            Every frame is real photography from Land's End — treated with restraint, spotlight and space.
          </p>
        </div>

        {/* Tetris grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <FadeIn className="md:col-span-8">
            <ImageCrop src={GALLERY[2].src} alt={GALLERY[2].alt} parallax className="aspect-[4/3] w-full">
              <Caption index="01" title={GALLERY[2].caption} />
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.08} className="md:col-span-4">
            <ImageCrop src={GALLERY[1].src} alt={GALLERY[1].alt} className="aspect-[3/4] w-full">
              <Caption index="02" title={GALLERY[1].caption} />
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.12} className="md:col-span-4">
            <ImageCrop src={GALLERY[3].src} alt={GALLERY[3].alt} className="aspect-[4/5] w-full">
              <Caption index="03" title={GALLERY[3].caption} />
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.18} className="md:col-span-4">
            <ImageCrop src={GALLERY[0].src} alt={GALLERY[0].alt} parallax className="aspect-[4/5] w-full">
              <Caption index="04" title={GALLERY[0].caption} />
            </ImageCrop>
          </FadeIn>
          <FadeIn delay={0.22} className="md:col-span-4">
            <ImageCrop src={GALLERY[4].src} alt={GALLERY[4].alt} className="aspect-[4/5] w-full">
              <Caption index="05" title={GALLERY[4].caption} />
            </ImageCrop>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Caption({ index, title }) {
  return (
    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F7F5F0]">
      <p className="font-serif text-2xl leading-none md:text-3xl">{title}</p>
      <span className="text-[10px] uppercase tracking-[0.32em] opacity-80">{index}</span>
    </div>
  );
}

function AccommodationSection() {
  return (
    <section id="accommodation" className="bg-[#2C402B] py-24 text-[#F7F5F0] md:py-32" data-testid="accommodation-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/60">05 &nbsp;/&nbsp; Rooms</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Four ways to <em className="not-italic text-[#D4CBBF]">stay.</em>
            </h2>
          </div>
          <div className="md:col-span-6 md:pt-6">
            <p className="max-w-md text-sm leading-relaxed text-[#F7F5F0]/80">
              From Kerala-style Bungalows to Forest View rooms — pick a shape for your quiet week. Starting from
              <span className="mx-1 font-serif text-xl italic text-[#D4CBBF]">₹{RESORT.startingPrice.toLocaleString("en-IN")}</span>
              per night. Final tariff is subject to travel dates, availability &amp; applicable taxes.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ROOMS.map((r, i) => (
            <FadeIn key={r.id} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden bg-[#0A170F]/40 backdrop-blur-sm" data-testid={`room-card-${r.id}`}>
                <ImageCrop src={r.image} alt={r.name} className="aspect-[4/5] w-full" scrim={false} />
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl leading-tight md:text-3xl">{r.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#F7F5F0]/60">0{i + 1}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#F7F5F0]/75">{r.description}</p>
                  </div>
                  <div className="mt-6 border-t border-[#F7F5F0]/15 pt-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#F7F5F0]/60">Suitable for · {r.suitableFor}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-serif text-xl italic text-[#D4CBBF]">From ₹{r.from.toLocaleString("en-IN")}</p>
                      <button
                        data-testid={`room-enquire-${r.id}`}
                        onClick={() => openWhatsApp(`Hi Destina Tours and Travels, I'd like to enquire about the ${r.name} at ${RESORT.name}, ${RESORT.city}. Please share availability and pricing.`)}
                        className="group/btn inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#F7F5F0]"
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
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-[#F7F5F0]/60">
          Displayed prices are indicative starting rates. Final pricing and availability are subject to confirmation
          based on travel dates, room availability, applicable taxes and selected meal plan.
        </p>
      </div>
    </section>
  );
}

function MealPlansSection() {
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32" data-testid="meal-plans">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">06 &nbsp;/&nbsp; Meal Plans</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-[#0A170F] md:text-7xl">
              Eat with the <em className="not-italic text-[#8B5A2B]">valley.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#0A170F]/70">
            Meal inclusions are subject to the selected package and resort confirmation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MEAL_PLANS.map((m, i) => (
            <FadeIn key={m.code} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between border border-[#0A170F]/15 bg-white p-8" data-testid={`meal-plan-${m.code}`}>
                <div>
                  <div className="flex items-baseline justify-between">
                    <p className="font-serif text-6xl leading-none tracking-tight text-[#0A170F]">{m.code}</p>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#8B5A2B]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl leading-tight text-[#0A170F]">{m.name}</h3>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[#0A170F]/70">{m.blurb}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquirySection() {
  return (
    <section id="enquiry" className="relative bg-[#0A170F] py-24 text-[#F7F5F0] md:py-32" data-testid="enquiry-section">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/60">07 &nbsp;/&nbsp; Enquire</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Send us your<br /><em className="not-italic text-[#D4CBBF]">travel notes.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#F7F5F0]/75">
              Share your dates, room type and meal plan preference — we'll come back with the latest available
              price and coordinate the booking with the resort.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton testId="enquiry-side-whatsapp" />
              <CallButton />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="bg-[#F7F5F0] p-8 text-[#0A170F] md:p-12">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32" data-testid="faq-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="mb-12 flex items-baseline justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">08 &nbsp;/&nbsp; FAQ</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-[#0A170F] md:text-7xl">
              Small print, made plain.
            </h2>
          </div>
        </div>
        <Accordion type="single" collapsible className="border-t border-[#0A170F]/15">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-[#0A170F]/15">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="py-6 text-left font-serif text-xl text-[#0A170F] hover:no-underline md:text-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 text-sm leading-relaxed text-[#0A170F]/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main data-testid="home-page">
      <HeroSection />
      <EditorialMarquee />
      <TrustChapter />
      <FeaturedResort />
      <VisualExperience />
      <AccommodationSection />
      <MealPlansSection />
      <EnquirySection />
      <FaqSection />
    </main>
  );
}
