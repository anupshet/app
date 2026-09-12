import { useMemo } from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { DestinationHero } from "../components/site/DestinationHero";
import { DisclaimerStrip, BookingCTA, SectionHeading } from "../components/site/DestinationUI";
import { WhatsAppButton } from "../components/site/Buttons";
import { ResortPhotoGallery, ResortPackageDetails, ResortActivities, ResortSightseeing } from "../components/site/ResortDetailSections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { formatPrice } from "../lib/destinations";
import { faqLd, packageResortLd } from "../lib/schema";
import { useSEO } from "../hooks/useSEO";
import { useJsonLd } from "../hooks/useJsonLd";

export default function PackageResort({ resort }) {
  useSEO(resort.seoTitle, resort.seoDescription, { image: resort.gallery[0].src });
  const lodging = useMemo(() => packageResortLd(resort), [resort]);
  const faq = useMemo(() => faqLd(resort.faqs), [resort]);
  useJsonLd(`${resort.id}-lodging`, lodging);
  useJsonLd(`${resort.id}-faq`, faq);
  return (
    <main data-testid={`${resort.id}-page`}>
      <DestinationHero testId={`${resort.id}-hero`} image={resort.gallery[0]} eyebrow={resort.location} lines={resort.heroLines} description={resort.description}>
        <div className="mb-3 w-full" data-testid={`${resort.id}-hero-tariff`}>
          <p className="font-serif text-4xl" data-testid={`${resort.id}-hero-price`}>{resort.package.tariffs && <span className="mb-2 block font-sans text-xs">Starting from</span>}{formatPrice(resort.package.price)} <span className="font-sans text-sm">/ {resort.package.unit}</span></p>
          <p className="mt-3 text-xs" data-testid={`${resort.id}-hero-category`}>{resort.package.duration || resort.package.positioning} · {resort.package.category}</p>
          {resort.package.unitLabel && <p className="mt-2 text-xs" data-testid={`${resort.id}-hero-unit`}>{resort.package.unitLabel}</p>}
        </div>
        <WhatsAppButton label="Check Availability" message={resort.enquiryMessage} testId={`${resort.id}-hero-availability`} className="!bg-[#F7F5F0] hover:!bg-[#e6dfd0]" />
        <WhatsAppButton message={resort.enquiryMessage} testId={`${resort.id}-hero-whatsapp`} />
      </DestinationHero>
      <DisclaimerStrip testId={`${resort.id}-disclaimer`} />
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-6 py-8 text-xs lg:px-10" data-testid={`${resort.id}-breadcrumb`}>
        <Link to="/" data-testid={`${resort.id}-breadcrumb-home`} className="hover:underline">Home</Link><span>/</span><Link to={`/${resort.destinationId}`} data-testid={`${resort.id}-breadcrumb-destination`} className="hover:underline">{resort.city} Resorts</Link><span>/</span><span aria-current="page">{resort.name}</span>
        <span className="ml-auto flex items-center gap-2" data-testid={`${resort.id}-location`}><MapPin className="h-3.5 w-3.5" />{resort.location}</span>
      </div>
      <ResortPhotoGallery resort={resort} />
      <ResortPackageDetails resort={resort} />
      <ResortActivities resort={resort} />
      {resort.sightseeing?.length > 0 && <ResortSightseeing resort={resort} />}
      <BookingCTA testId={`${resort.id}-booking-enquiry`} title={`Your ${resort.navName} stay, personally arranged.`} text="Share your travel dates and guest count with Destina Tours & Travels for availability and booking details." message={resort.enquiryMessage} />
      <section className="bg-[#F7F5F0] py-20 md:py-28" data-testid={`${resort.id}-faq`}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <SectionHeading eyebrow="05 / FAQ" title="Small print, made plain." testId={`${resort.id}-faq-heading`} />
          <Accordion type="single" collapsible className="border-t border-[#0A170F]/15">
            {resort.faqs.map((item, index) => <AccordionItem key={item.q} value={`faq-${index}`} className="border-b border-[#0A170F]/15">
              <AccordionTrigger data-testid={`${resort.id}-faq-trigger-${index}`} className="py-6 text-left font-serif text-xl hover:no-underline md:text-2xl">{item.q}</AccordionTrigger>
              <AccordionContent data-testid={`${resort.id}-faq-answer-${index}`} className="max-w-2xl text-sm leading-relaxed text-[#0A170F]/75">{item.a}</AccordionContent>
            </AccordionItem>)}
          </Accordion>
        </div>
      </section>
      <BookingCTA testId={`${resort.id}-final-enquiry`} title={`Ready for ${resort.name}?`} text="Check availability with our team. Your stay starts with a WhatsApp enquiry, followed by confirmation." message={resort.enquiryMessage} />
    </main>
  );
}