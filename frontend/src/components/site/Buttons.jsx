import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { openWhatsApp, telLink, generalEnquiryMessage } from "../../lib/whatsapp";

/**
 * Filled premium button with a sliding hover fill (color animation on a
 * specific property, not `transition: all`).
 */
export function PrimaryButton({
  children,
  onClick,
  href,
  as,
  className = "",
  testId,
  icon: Icon = ArrowUpRight,
  ...rest
}) {
  const Comp = as || (href ? "a" : "button");
  return (
    <Comp
      {...(href ? { href } : {})}
      onClick={onClick}
      data-testid={testId}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#8B5A2B] px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F7F5F0] transition-colors duration-500 hover:bg-[#6b4520] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F5F0]/60 ${className}`}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <Icon className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
    </Comp>
  );
}

export function GhostButton({ children, onClick, href, as, className = "", testId, ...rest }) {
  const Comp = as || (href ? "a" : "button");
  return (
    <Comp
      {...(href ? { href } : {})}
      onClick={onClick}
      data-testid={testId}
      className={`group inline-flex items-center gap-3 rounded-full border border-[#F7F5F0]/40 bg-transparent px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#F7F5F0] transition-colors duration-500 hover:bg-[#F7F5F0] hover:text-[#0A170F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F5F0]/60 ${className}`}
      {...rest}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
    </Comp>
  );
}

export function WhatsAppButton({ message, className = "", label = "WhatsApp Enquiry", testId = "whatsapp-enquiry-button", variant = "primary" }) {
  const msg = message || generalEnquiryMessage();
  const onClick = (e) => { e.preventDefault(); openWhatsApp(msg); };
  const base = variant === "ghost"
    ? "border border-[#0A170F]/20 bg-transparent text-[#0A170F] hover:bg-[#0A170F] hover:text-[#F7F5F0]"
    : "bg-[#25D366] text-[#0A170F] hover:bg-[#1ebe58]";
  return (
    <a
      href="#"
      onClick={onClick}
      data-testid={testId}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 ${base} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

export function CallButton({ className = "", label = "Call Now", testId = "call-now-button", variant = "ghost" }) {
  const base = variant === "primary"
    ? "bg-[#F7F5F0] text-[#0A170F] hover:bg-[#e6e0d1]"
    : "border border-[#F7F5F0]/40 text-[#F7F5F0] hover:bg-[#F7F5F0] hover:text-[#0A170F]";
  return (
    <a
      href={telLink()}
      data-testid={testId}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.18em] transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F5F0]/40 ${base} ${className}`}
    >
      <Phone className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}
