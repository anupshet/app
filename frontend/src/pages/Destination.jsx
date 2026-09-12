import { DestinationHero } from "../components/site/DestinationHero";
import { SectionHeading, RouteButton, DisclaimerStrip, BookingCTA } from "../components/site/DestinationUI";
import { ResortCard } from "../components/site/ResortCard";
import { useSEO } from "../hooks/useSEO";
import CheckAvailability from "../components/site/CheckAvailability";

export default function Destination({ destination }) {
  useSEO(destination.seoTitle, destination.seoDescription, { image: destination.image.src });
  return (
    <main data-testid={`${destination.id}-page`}>
      <DestinationHero testId={`${destination.id}-hero`} image={destination.image} eyebrow={destination.title} lines={destination.headline} description={destination.description}>
        <RouteButton to={`#${destination.id}-resorts`} light testId={`${destination.id}-view-resorts`}>Explore Resorts</RouteButton>
        {destination.resorts.some((resort) => resort.package) && <RouteButton to={`/packages#${destination.id}`} light testId={`${destination.id}-view-packages`}>View Packages</RouteButton>}
      </DestinationHero>
      <CheckAvailability testId={`${destination.id}-check-availability`} destinationMode />
      <DisclaimerStrip testId={`${destination.id}-disclaimer`} />
      {destination.experiences && <div className="border-b border-[#0A170F]/10 bg-[#F7F5F0]" data-testid={`${destination.id}-experiences`}><ul className="mx-auto flex max-w-[1400px] flex-wrap gap-x-10 gap-y-4 px-6 py-8 lg:px-10">{destination.experiences.map((item, index) => <li key={item} className="text-xs text-[#0A170F]/75" data-testid={`${destination.id}-experience-label-${index}`}>{item}</li>)}</ul></div>}
      <section id={`${destination.id}-resorts`} className="bg-[#F7F5F0] py-20 md:py-28" data-testid={`${destination.id}-available-resorts`}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow={destination.title} title={`Available ${destination.name} ${destination.resorts.length === 1 ? "Resort" : "Resorts"}`} testId={`${destination.id}-listing-heading`} />
          <div className="space-y-16">{destination.resorts.map((resort) => <ResortCard key={resort.id} resort={resort} testId={`${destination.id}-resort-${resort.id}`} />)}</div>
        </div>
      </section>
      <BookingCTA testId={`${destination.id}-final-enquiry`} title={`Let’s plan your ${destination.name} stay.`} text="Share your travel dates and guest count. We’ll help you with availability, pricing and booking details." message={`Hi Destina Tours & Travels, I would like to enquire about resort stays in ${destination.name}. Please share availability and booking details.`} />
    </main>
  );
}