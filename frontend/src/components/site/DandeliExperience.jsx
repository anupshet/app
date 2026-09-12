import { DESTINATIONS } from "../../lib/destinations";
import { SectionHeading, RouteButton } from "./DestinationUI";
import { FadeIn } from "./RevealText";

export const DandeliExperience = () => {
  const destination = DESTINATIONS[0];
  return (
    <section className="bg-[#F7F5F0] py-20 md:py-28" data-testid="experience-dandeli">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-12 md:items-center lg:px-10">
        <div className="md:col-span-5">
          <SectionHeading eyebrow="03 / Nature. Adventure. A slower pace." title="Experience Dandeli" testId="experience-dandeli-heading" />
          <p className="max-w-md text-sm leading-relaxed text-[#0A170F]/75" data-testid="experience-dandeli-description">{destination.description}</p>
          <ul className="my-8 space-y-3" data-testid="dandeli-experiences">
            {destination.experiences.map((item, index) => <li key={item} data-testid={`dandeli-experience-${index}`} className="flex items-center gap-4 border-b border-[#0A170F]/10 pb-3 text-sm"><span className="font-serif text-lg text-[#8B5A2B]">0{index + 1}</span>{item}</li>)}
          </ul>
          <RouteButton to={destination.path} testId="explore-dandeli">Explore Dandeli</RouteButton>
        </div>
        <FadeIn className="md:col-span-7 md:pl-10">
          <figure><img src={destination.resorts[0].gallery[2].src} alt={destination.resorts[0].gallery[2].alt} loading="lazy" className="h-auto w-full" data-testid="dandeli-experience-image" /><figcaption className="mt-4 text-xs text-[#0A170F]/60" data-testid="dandeli-experience-caption">Campfire evenings at Nature Mist – Dandeli</figcaption></figure>
        </FadeIn>
      </div>
    </section>
  );
};