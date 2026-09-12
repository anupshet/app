import { MapPin, Check } from "lucide-react";
import { WhatsAppButton } from "./Buttons";
import { RouteButton } from "./DestinationUI";
import { formatPrice } from "../../lib/destinations";
import { FadeIn } from "./RevealText";

export const ResortCard = ({ resort, testId, light = false }) => {
  const image = resort.cardImage || resort.gallery?.[0] || resort.image;
  return (
    <FadeIn>
      <article data-testid={testId} className={`grid gap-8 border-t pt-8 md:grid-cols-2 md:items-center md:gap-12 ${light ? "border-white/20" : "border-[#0A170F]/20"}`}>
        <div className="overflow-hidden"><img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]" data-testid={`${testId}-image`} /></div>
        <div className="min-w-0">
          <p className={`flex items-center gap-2 text-xs ${light ? "text-[#D4CBBF]" : "text-[#8B5A2B]"}`} data-testid={`${testId}-location`}><MapPin className="h-3.5 w-3.5" />{resort.location}</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight md:text-5xl" data-testid={`${testId}-name`}>{resort.name}</h3>
          <p className="mt-5 max-w-xl text-sm leading-relaxed opacity-80" data-testid={`${testId}-description`}>{resort.description}</p>
          {resort.package ? <>
            <p className="mt-5 text-xs uppercase tracking-[0.1em]" data-testid={`${testId}-duration`}>{resort.package.duration || resort.package.unitLabel}</p>
            <p className="mt-3 font-serif text-3xl" data-testid={`${testId}-price`}>{!resort.package.exactPrice && "Starting from "}{formatPrice(resort.package.price)}<span className="font-sans text-sm">/{resort.package.unit}</span></p>
            {resort.package.category && <p className="mt-2 text-xs opacity-80" data-testid={`${testId}-category`}>{resort.package.category}</p>}
            {resort.package.cardRateNote && <p className="mt-2 text-xs opacity-80" data-testid={`${testId}-rate-note`}>{resort.package.cardRateNote}</p>}
            <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2" data-testid={`${testId}-highlights`}>
              {resort.highlights.map((item, index) => <li className="flex items-center gap-2 text-xs" key={item} data-testid={`${testId}-highlight-${index}`}><Check className="h-3.5 w-3.5 shrink-0" />{item}</li>)}
            </ul>
          </> : <p className="mt-6 font-serif text-3xl" data-testid={`${testId}-price`}>Starting from {formatPrice(resort.startingPrice)}<span className="font-sans text-sm">/night</span></p>}
          <p className="mt-4 text-xs opacity-70" data-testid={`${testId}-pricing-note`}>Prices and availability are subject to confirmation.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton message={resort.availabilityMessage || resort.enquiryMessage} label="Check Availability" testId={`${testId}-availability`} />
            <RouteButton to={resort.path} testId={`${testId}-details`} light={light}>{resort.package ? "Get More Details" : "View Resort"}</RouteButton>
          </div>
        </div>
      </article>
    </FadeIn>
  );
};