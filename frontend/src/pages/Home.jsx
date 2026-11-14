import { NATURE_MIST, LANDS_END, DESTINATIONS } from "../lib/destinations";
import { FORTUNE_WOODS } from "../lib/fortuneWoods";
import { DestinationHero } from "../components/site/DestinationHero";
import { SectionHeading, RouteButton, DisclaimerStrip, BookingCTA } from "../components/site/DestinationUI";
import { PackageCard } from "../components/site/PackageCard";
import { ResortCard } from "../components/site/ResortCard";
import { WhyDestina } from "../components/site/WhyDestina";
import { DandeliExperience } from "../components/site/DandeliExperience";
import CheckAvailability from "../components/site/CheckAvailability";
import { useSEO } from "../hooks/useSEO";

export default function Home() {
  useSEO("Dandeli Resort Bookings Onine | Dandeli Tour Packages", "Handpicked Dandeli stays with independent booking assistance. Explore Nature Mist packages from ₹1,500 per person. Book River Resorts in Dandeli Online", { image: FORTUNE_WOODS.gallery[1].src });
  return (
    <main data-testid="home-page">
      <DestinationHero testId="hero" home image={FORTUNE_WOODS.gallery[1]} eyebrow="Destina Tours & Travels · Dandeli, Karnataka" lines={["Discover Dandeli.", "Stay. Explore. Unwind."]} description="Handpicked Dandeli stays and complete resort packages with personalized booking assistance from Destina Tours & Travels.">
        <RouteButton to="/dandeli" light testId="hero-explore-dandeli">Explore Dandeli Resorts</RouteButton>
        <RouteButton to="/packages#dandeli" light testId="hero-dandeli-packages">View Dandeli Packages</RouteButton>
      </DestinationHero>
      <CheckAvailability testId="home-check-availability" destinationMode />
      <DisclaimerStrip />
      <section className="bg-[#F7F5F0] py-20 md:py-28" data-testid="popular-dandeli-packages">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="01 / Stay & explore" title="Popular Dandeli Packages" testId="popular-packages-heading" />
          <div className="space-y-10">{DESTINATIONS[0].resorts.filter((resort) => resort.package).map((resort) => <PackageCard key={resort.id} resort={resort} testId={`home-package-${resort.id}`} />)}</div>
        </div>
      </section>
      <section className="bg-[#0A170F] py-20 text-[#F7F5F0] md:py-28" data-testid="featured-dandeli-resort">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="02 / Our Dandeli selection" title="Explore Our Dandeli Resorts" testId="featured-dandeli-heading" light />
          <div className="space-y-16">{DESTINATIONS[0].resorts.map((resort) => <ResortCard key={resort.id} resort={resort} testId={`home-resort-${resort.id}`} light />)}</div>
        </div>
      </section>
      <DandeliExperience />
      <WhyDestina />
      <section className="bg-[#0A170F] py-20 text-[#F7F5F0] md:py-28" data-testid="explore-wayanad-section">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <SectionHeading eyebrow="04 / A little further south" title="Explore Wayanad" testId="explore-wayanad-heading" light />
          <ResortCard resort={LANDS_END} testId="home-resort-lands-end" light />
        </div>
      </section>
      <BookingCTA testId="home-final-enquiry" />
    </main>
  );
}