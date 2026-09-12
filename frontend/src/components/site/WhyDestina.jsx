import { UserRound, MessageCircle, BadgeIndianRupee, Compass } from "lucide-react";
import { WHY_DESTINA } from "../../lib/config";
import { FadeIn } from "./RevealText";

const ICONS = { UserRound, MessageCircle, BadgeIndianRupee, Compass };

export const WhyDestina = () => (
  <section className="bg-[#F7F5F0] py-24 md:py-32" data-testid="why-destina">
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">Why Us</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-[#0A170F] md:text-6xl" data-testid="why-destina-heading">Why book through Destina Tours and Travels?</h2>
        </div>
        <div className="md:col-span-5 md:pb-2"><p className="max-w-md text-sm leading-relaxed text-[#0A170F]/70" data-testid="why-destina-description">We are an independent travel and resort booking assistance service focused on making your stay simple, transparent and personal.</p></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {WHY_DESTINA.map((card, index) => {
          const Icon = ICONS[card.icon];
          return <FadeIn key={card.title} delay={index * 0.06}>
            <div className="flex h-full flex-col border border-[#0A170F]/10 bg-white p-8" data-testid={`why-card-${index}`}>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#2C402B]/10 text-[#2C402B]"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-6 font-serif text-2xl leading-tight">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#0A170F]/70">{card.body}</p>
            </div>
          </FadeIn>;
        })}
      </div>
    </div>
  </section>
);