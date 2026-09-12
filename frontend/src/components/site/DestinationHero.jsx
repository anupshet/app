import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RevealText, FadeIn } from "./RevealText";

export const DestinationHero = ({ image, eyebrow, lines, description, children, testId, home = false }) => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  return (
    <section ref={ref} data-testid={testId} className={`destination-hero relative isolate overflow-hidden bg-[#0A170F] text-[#F7F5F0] ${home ? "destination-hero-home" : ""}`}>
      <motion.img src={image.src} alt={image.alt} style={{ ...(reducedMotion ? {} : { y }), ...(image.objectPosition ? { objectPosition: image.objectPosition } : {}) }} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" data-testid={`${testId}-image`} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/75" />
      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[1400px] flex-col justify-end px-6 pb-14 pt-36 md:pb-16 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#F7F5F0]/90" data-testid={`${testId}-eyebrow`}>{eyebrow}</p>
        <RevealText as="h1" testId={`${testId}-headline`} lines={lines} className="mt-6 max-w-5xl font-serif text-5xl font-light leading-[1.03] sm:text-6xl lg:text-7xl xl:text-8xl" />
        {description && <FadeIn delay={0.45}><p className="mt-6 max-w-xl text-sm leading-relaxed text-[#F7F5F0]/90 md:text-base" data-testid={`${testId}-description`}>{description}</p></FadeIn>}
        {children && <FadeIn delay={0.6}><div className="mt-7 flex flex-wrap items-center gap-3">{children}</div></FadeIn>}
      </div>
    </section>
  );
};