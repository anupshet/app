import { NATURE_MIST, LANDS_END, DESTINATIONS } from "../lib/destinations";
import { DestinationHero } from "../components/site/DestinationHero";
import { SectionHeading, RouteButton, DisclaimerStrip, BookingCTA } from "../components/site/DestinationUI";
import { PackageCard } from "../components/site/PackageCard";
import { useSEO } from "../hooks/useSEO";
import CheckAvailability from "../components/site/CheckAvailability";

export default function Packages() {
  useSEO("Resort Packages in Dandeli & Wayanad | Destina Tours & Travels", "View the Nature Mist Dandeli 1 Night / 1 Day package at ₹1,500 per person, and explore Wayanad stay options. Contact Destina for availability and booking assistance.", { image: NATURE_MIST.gallery[0].src });
  return (
    <main data-testid="packages-page">
      <DestinationHero testId="packages-hero" image={NATURE_MIST.gallery[0]} eyebrow="Destina Tours & Travels · Curated stays" lines={["Stay. Explore.", "Make it your own."]} description="Selected resort packages, with personalized booking assistance and clear pricing information.">
        <RouteButton to="#dandeli" light testId="packages-browse-dandeli">Dandeli Packages</RouteButton>
      </DestinationHero>
      <CheckAvailability testId="packages-check-availability" destinationMode />
      <DisclaimerStrip testId="packages-disclaimer" />
      {DESTINATIONS.filter((destination) => destination.resorts.some((resort) => resort.package)).map((destination) => (
        <section key={destination.id} id={destination.id} className="bg-[#F7F5F0] py-20 md:py-28" data-testid={`packages-${destination.id}`}>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10"><SectionHeading eyebrow="Stay & explore" title={`${destination.name} Packages`} testId={`packages-${destination.id}-heading`} />
            <div className="space-y-10">{destination.resorts.filter((resort) => resort.package).map((resort) => <PackageCard key={resort.id} resort={resort} testId={`package-${resort.id}`} />)}</div>
          </div>
        </section>
      ))}
      <section className="border-t border-[#0A170F]/15 bg-[#F7F5F0] py-16" data-testid="packages-wayanad">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-8 px-6 lg:px-10">
          <div><h2 className="font-serif text-3xl">Looking for Wayanad?</h2><p className="mt-3 text-sm text-[#0A170F]/70">Explore the existing rooms, meal plans and pricing at Land’s End Resort &amp; Spa.</p></div>
          <RouteButton to={LANDS_END.path} testId="packages-wayanad-resort">View Resort</RouteButton>
        </div>
      </section>
      <BookingCTA testId="packages-final-enquiry" />
    </main>
  );
}