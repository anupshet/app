import { motion } from "framer-motion";

/**
 * Masked, line-by-line kinetic reveal. Each line is wrapped in an
 * overflow-hidden container; the child slides from y:110% to y:0%.
 * Usage: <RevealText lines={["Escape to", "the Hills"]} />
 */
export function RevealText({
  lines = [],
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
  duration = 0.9,
  as: Tag = "h1",
  testId,
}) {
  return (
    <Tag className={className} data-testid={testId}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          aria-hidden={i > 0 ? undefined : undefined}
        >
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeIn({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
