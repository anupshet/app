import { Check, Clock } from "lucide-react";
import { WhatsAppButton } from "./Buttons";
import { RouteButton } from "./DestinationUI";
import { formatPrice } from "../../lib/destinations";

export const PackageCard = ({ resort, testId }) => {
  const pack = resort.package;
  return (
    <article className="grid overflow-hidden border border-[#0A170F]/15 bg-white md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.3fr)]" data-testid={testId}>
      <div className="relative min-w-0">
        <img src={resort.gallery[1].src} alt={resort.gallery[1].alt} className="h-full w-full object-cover" loading="lazy" data-testid={`${testId}-image`} />
      </div>
      <div className="min-w-0 p-6 sm:p-8 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B5A2B]" data-testid={`${testId}-duration`}>{pack.duration || pack.positioning || pack.unitLabel}</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl" data-testid={`${testId}-name`}>{resort.name}</h3>
            {pack.category && <p className="mt-2 text-xs text-[#0A170F]/65" data-testid={`${testId}-category`}>{pack.category}</p>}
          </div>
          <p className="font-serif text-4xl text-[#8B5A2B]" data-testid={`${testId}-price`}>{pack.tariffs && <span className="mb-2 block font-sans text-xs">Starting from</span>}{formatPrice(pack.price)}<span className="mt-1 block font-sans text-xs text-[#0A170F]/70">/ {pack.unit}</span></p>
        </div>
        {pack.checkIn && pack.checkOut && <div className="my-6 flex flex-wrap gap-x-6 gap-y-2 border-y border-[#0A170F]/10 py-4 text-xs">
          <p className="flex items-center gap-2" data-testid={`${testId}-checkin`}><Clock className="h-3.5 w-3.5 text-[#8B5A2B]" />Check-in: {pack.checkIn}</p>
          <p data-testid={`${testId}-checkout`}>Check-out: {pack.checkOut}</p>
        </div>}
        {pack.tariffs && <p className="my-6 border-y border-[#0A170F]/10 py-4 text-xs" data-testid={`${testId}-rate-note`}>{pack.unitLabel}. {pack.rateNote}</p>}
        <ul className={`grid gap-x-4 gap-y-3 sm:grid-cols-2 ${!pack.checkIn && !pack.tariffs ? "mt-6" : ""}`} data-testid={`${testId}-inclusions`}>
          {pack.inclusions.map((item, index) => <li key={item} className="flex items-center gap-2 text-xs" data-testid={`${testId}-inclusion-${index}`}><Check className="h-3.5 w-3.5 shrink-0 text-[#2C402B]" />{item}</li>)}
        </ul>
        <p className="mt-5 text-[11px] leading-relaxed text-[#0A170F]/65" data-testid={`${testId}-note`}>Prices and availability are subject to confirmation.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <RouteButton to={resort.path} testId={`${testId}-view`}>View Package</RouteButton>
          <WhatsAppButton message={resort.availabilityMessage} label="Check Availability" testId={`${testId}-availability`} />
        </div>
      </div>
    </article>
  );
};