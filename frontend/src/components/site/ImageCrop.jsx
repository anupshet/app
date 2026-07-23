import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * overflow-hidden wrapper that crops the baked-in logo/watermark corners
 * from the source photography, adds an optional bottom gradient scrim and
 * enables a subtle parallax + hover scale.
 */
export default function ImageCrop({
  src,
  alt = "",
  className = "",
  scrim = true,
  parallax = false,
  scale = 1.14,
  children,
  eager = false,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-6%", "6%"] : ["0%", "0%"]);

  return (
    <div ref={ref} className={`group relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        style={{ y, transform: `scale(${scale})` }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.18]"
      />
      {scrim && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A170F]/70 via-[#0A170F]/10 to-transparent" />
      )}
      {children}
    </div>
  );
}
