import Marquee from "react-fast-marquee";

const DEFAULT = [
  "The Sanctuary of Wayanad",
  "Destina Tours & Travels",
  "Unplug · Reconnect · Breathe",
  "Land's End Resort & Spa",
  "Infinity Pool · Valley Views · Bamboo Café",
];

export default function EditorialMarquee({ words = DEFAULT, testId = "editorial-marquee" }) {
  return (
    <div
      data-testid={testId}
      className="relative border-y border-[#0A170F]/10 bg-[#F7F5F0] py-8 md:py-10"
    >
      <Marquee gradient={false} speed={38} pauseOnHover>
        {words.concat(words).map((w, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-10 font-serif text-4xl italic tracking-tight text-[#0A170F] md:text-6xl"
          >
            {w}
            <span aria-hidden className="text-[#8B5A2B]">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
