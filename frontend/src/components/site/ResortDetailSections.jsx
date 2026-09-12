import { Check, Waves, Target, Flame, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../lib/destinations";
import { FadeIn } from "./RevealText";
import { WhatsAppButton } from "./Buttons";
import { SectionHeading } from "./DestinationUI";

const ICONS = { Waves, Target, Flame };

export const ResortPhotoGallery = ({ resort }) => (
  <section className="bg-[#0A170F] py-20 text-[#F7F5F0] md:py-28" data-testid={`${resort.id}-gallery`}>
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <SectionHeading eyebrow="01 / A closer look" title="A stay, in photographs." light testId={`${resort.id}-gallery-heading`} />
      <div className="grid items-start gap-8 md:grid-cols-2">
        {resort.gallery.slice(1).map((image, index) => <FadeIn key={image.src} delay={index * 0.06}>
          <figure><img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full" data-testid={`${resort.id}-gallery-image-${index + 1}`} />
            <figcaption className="mt-4 flex items-center justify-between gap-3" data-testid={`${resort.id}-gallery-caption-${index + 1}`}><span className="font-serif text-2xl">{image.caption}</span><span className="text-xs text-[#D4CBBF]">0{index + 2}</span></figcaption>
          </figure>
        </FadeIn>)}
      </div>
    </div>
  </section>
);

export const ResortPackageDetails = ({ resort }) => {
  const pack = resort.package;
  return <section id="package" className="bg-[#F7F5F0] py-20 md:py-28" data-testid={`${resort.id}-package-details`}>
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="02 / Your package" title={pack.title || `${pack.duration} Package`} testId={`${resort.id}-package-heading`} />
          {pack.tariffs ? <>
            <p className="text-sm font-semibold text-[#8B5A2B]" data-testid={`${resort.id}-tariff-unit`}>{pack.unitLabel}</p>
            {pack.tariffs.map((cottage) => <div key={cottage.id} className="mt-8 border-t border-[#0A170F]/15 pt-6" data-testid={`${resort.id}-tariff-${cottage.id}`}>
              <h3 className="font-serif text-2xl leading-tight" data-testid={`${resort.id}-cottage-${cottage.id}`}>{cottage.name}</h3>
              <dl className="mt-4 divide-y divide-[#0A170F]/10">
                {cottage.rates.map((rate) => <div key={rate.sharing} className="grid grid-cols-2 items-center gap-4 py-4" data-testid={`${resort.id}-${cottage.id}-${rate.sharing}-sharing`}>
                  <dt className="text-sm">{rate.sharing} Sharing{rate.note && <span className="mt-1 block text-xs text-[#0A170F]/65">({rate.note})</span>}</dt>
                  <dd className="text-right font-serif text-2xl text-[#8B5A2B]">{formatPrice(rate.price)}<span className="block font-sans text-xs text-[#0A170F]/70">/person/night</span></dd>
                </div>)}
              </dl>
            </div>)}
          </> : <>
          <p className="font-serif text-5xl text-[#8B5A2B]" data-testid={`${resort.id}-package-price`}>{formatPrice(pack.price)}<span className="font-sans text-base"> / {pack.unit}</span></p>
          <p className="mt-4 text-sm" data-testid={`${resort.id}-package-category`}>{pack.category}</p>
          <dl className="mt-8 flex flex-wrap gap-10 border-t border-[#0A170F]/15 pt-6">
            <div data-testid={`${resort.id}-check-in`}><dt className="text-xs text-[#0A170F]/60">Check-in</dt><dd className="mt-2 font-serif text-2xl">{pack.checkIn}</dd></div>
            <div data-testid={`${resort.id}-check-out`}><dt className="text-xs text-[#0A170F]/60">Check-out</dt><dd className="mt-2 font-serif text-2xl">{pack.checkOut}</dd></div>
          </dl>
          </>}
        </div>
        <div className="md:pt-4">
          <h3 className="font-serif text-3xl" data-testid={`${resort.id}-inclusions-heading`}>Package includes</h3>
          <ul className="mt-7 grid gap-5 sm:grid-cols-2" data-testid={`${resort.id}-package-inclusions`}>{pack.inclusions.map((item, index) => <li key={item} className="flex items-center gap-3 border-b border-[#0A170F]/10 pb-4 text-sm" data-testid={`${resort.id}-package-inclusion-${index}`}><Check className="h-4 w-4 shrink-0 text-[#8B5A2B]" />{item}</li>)}</ul>
          {pack.rateNote && <p className="mt-6 text-sm leading-relaxed text-[#0A170F]/75" data-testid={`${resort.id}-rate-note`}>{pack.rateNote} All tariffs are per person per night, not room prices.</p>}
          <p className="mt-6 text-xs text-[#0A170F]/65" data-testid={`${resort.id}-package-price-note`}>Prices and availability are subject to confirmation.</p>
          <div className="mt-7"><WhatsAppButton message={resort.enquiryMessage} label="Check Availability" testId={`${resort.id}-package-availability`} /></div>
        </div>
      </div>
    </div>
  </section>;
};

export const ResortActivities = ({ resort }) => (
  <section className="bg-[#2C402B] py-20 text-[#F7F5F0] md:py-28" data-testid={`${resort.id}-activities`}>
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <SectionHeading eyebrow="03 / Stay curious" title="Days out. Evenings together." light testId={`${resort.id}-activities-heading`} />
      <div className="grid gap-10 md:grid-cols-3">
        {resort.activities.map((group) => {
          const Icon = ICONS[group.icon];
          return <div key={group.id} className={`border-t border-white/25 pt-6 ${resort.activities.length === 1 ? "md:col-span-3" : ""}`} data-testid={`${resort.id}-${group.id}-activities`}>
            <Icon className="h-6 w-6 text-[#D4CBBF]" /><h3 className="mt-5 font-serif text-3xl">{group.title}</h3>
            <ul className={`mt-6 text-sm text-[#F7F5F0]/85 ${resort.activities.length === 1 ? "grid gap-4 sm:grid-cols-2 md:grid-cols-3" : "space-y-4"}`}>{group.items.map((item, index) => <li key={item} data-testid={`${resort.id}-${group.id}-activity-${index}`}>{item}</li>)}</ul>
          </div>;
        })}
      </div>
      <div className="mt-10"><WhatsAppButton message={resort.enquiryMessage} testId={`${resort.id}-activities-whatsapp`} /></div>
    </div>
  </section>
);

export const ResortSightseeing = ({ resort }) => (
  <section className="bg-[#F7F5F0] py-20 md:py-28" data-testid={`${resort.id}-sightseeing`}>
    <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-2 lg:px-10">
      <div>
        <SectionHeading eyebrow={`04 / Around ${resort.city}`} title="Sightseeing" testId={`${resort.id}-sightseeing-heading`} />
        <ul className="grid gap-5 sm:grid-cols-2">{resort.sightseeing.map((place, index) => <li key={place} className="flex items-center gap-3 text-sm" data-testid={`${resort.id}-sightseeing-${index}`}><MapPin className="h-4 w-4 shrink-0 text-[#8B5A2B]" />{place}</li>)}</ul>
        <p className="mt-8 border-l-2 border-[#8B5A2B] pl-4 text-sm leading-relaxed" data-testid={`${resort.id}-transport-note`}>{resort.transportNote}</p>
      </div>
      <div className="border-t border-[#0A170F]/15 pt-6 md:border-l md:border-t-0 md:pl-12 md:pt-0" data-testid={`${resort.id}-important-notes`}>
        <h3 className="font-serif text-3xl">Important notes</h3>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[#0A170F]/75">
          <li data-testid={`${resort.id}-rate-note`}>{formatPrice(resort.package.price)} / {resort.package.unit} is for the {resort.package.duration} package in a {resort.package.category}, not a nightly room rate.</li>
          <li>Prices and availability are subject to confirmation. An enquiry is not a confirmed booking.</li>
          <li>Destina Tours and Travels is an independent booking assistance service, not the official resort website.</li>
        </ul>
        <p className="mt-6 text-xs text-[#0A170F]/65">External website provided with the resort details (not Destina’s website):</p>
        <a href={resort.website} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-sm underline underline-offset-4" data-testid={`${resort.id}-external-website`}>{resort.websiteLabel}<ExternalLink className="h-3.5 w-3.5 shrink-0" /></a>
        <p className="mt-6"><Link to="/booking-policy" data-testid={`${resort.id}-booking-policy`} className="text-xs underline underline-offset-4">Booking &amp; Cancellation Policy</Link></p>
      </div>
    </div>
  </section>
);