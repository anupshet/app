import { RevealText, FadeIn } from "../components/site/RevealText";
import ImageCrop from "../components/site/ImageCrop";
import { IMAGES, BUSINESS } from "../lib/config";
import { WhatsAppButton, CallButton } from "../components/site/Buttons";

const STEPS = [
  { n: "01", t: "Share travel details", d: "Send us your dates, guests and room preference over WhatsApp or the enquiry form." },
  { n: "02", t: "We check availability", d: "We coordinate with the resort and check the latest availability for your dates." },
  { n: "03", t: "You get the latest price", d: "We share final pricing based on selected room, meal plan and any applicable taxes." },
  { n: "04", t: "We coordinate the booking", d: "Once you confirm, we help finalise the booking with the resort — smoothly." },
];

export default function About() {
  return (
    <main data-testid="about-page">
      <section className="relative isolate h-[70svh] min-h-[520px] w-full overflow-hidden bg-[#0A170F]">
        <img src={IMAGES.bungalow} alt="Kerala-style bungalow at dusk" className="absolute inset-0 h-full w-full scale-110 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A170F]/50 via-[#0A170F]/30 to-[#0A170F]/90" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 lg:px-10 lg:pb-24">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/80">Chapter · About</p>
          <RevealText
            as="h1"
            lines={["A quieter way", "to book a stay."]}
            className="mt-6 max-w-3xl font-serif text-[10vw] font-light leading-[0.9] tracking-tight text-[#F7F5F0] md:text-[7vw] lg:text-[6.5rem]"
          />
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">Who we are</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1] tracking-tight text-[#0A170F] md:text-6xl">
              {BUSINESS.name}
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-[#0A170F]/80 md:text-lg">
              {BUSINESS.name} helps travellers discover and enquire about resort stays and travel experiences.
              We assist customers with availability enquiries, accommodation options, pricing information, and
              booking coordination — with a focus on premium properties in Kerala.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#0A170F]/70">
              We are an independent booking assistance business and are not the official website of Land's End
              Resort &amp; Spa. Our role is to help you plan, price and finalise your stay without any friction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A170F] py-24 text-[#F7F5F0] md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/60">How it works</p>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">Four unhurried steps.</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.05}>
                <div className="flex h-full flex-col border-t border-[#F7F5F0]/20 pt-6" data-testid={`about-step-${i}`}>
                  <p className="font-serif text-6xl leading-none tracking-tight text-[#D4CBBF]">{s.n}</p>
                  <h3 className="mt-6 font-serif text-2xl leading-tight">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#F7F5F0]/75">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-7">
            <ImageCrop src={IMAGES.cafe} alt="Café Bamboo dining area" className="aspect-[4/3] w-full" parallax />
          </div>
          <div className="md:col-span-5 md:pt-8">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">Get in touch</p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight text-[#0A170F] md:text-6xl">
              Ready to plan a quieter week?
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#0A170F]/70">
              WhatsApp is the fastest way to reach us. We usually respond within a few hours during working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton />
              <CallButton variant="primary" className="!bg-[#0A170F] !text-[#F7F5F0] hover:!bg-[#2C402B]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
