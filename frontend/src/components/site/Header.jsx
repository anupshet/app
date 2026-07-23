import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS } from "../../lib/config";
import { openWhatsApp, generalEnquiryMessage, telLink } from "../../lib/whatsapp";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/wayanad-resorts/lands-end-resort", label: "Land's End" },
  { to: "/wayanad-resorts/lands-end-resort#accommodation", label: "Accommodation" },
  { to: "/about-us", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#F7F5F0]/85 backdrop-blur-xl border-b border-[#0A170F]/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" data-testid="brand-logo" className="flex items-baseline gap-2">
          <span className={`font-serif text-2xl leading-none tracking-tight ${scrolled ? "text-[#0A170F]" : "text-[#F7F5F0]"}`}>
            Destina
          </span>
          <span className={`text-[10px] uppercase tracking-[0.28em] ${scrolled ? "text-[#0A170F]/60" : "text-[#F7F5F0]/70"}`}>
            Tours &amp; Travels
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 hover:opacity-100 ${
                  scrolled
                    ? "text-[#0A170F] " + (isActive ? "opacity-100" : "opacity-60")
                    : "text-[#F7F5F0] " + (isActive ? "opacity-100" : "opacity-80")
                }`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); openWhatsApp(generalEnquiryMessage()); }}
            data-testid="header-whatsapp-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#2C402B] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[#F7F5F0] transition-colors duration-500 hover:bg-[#1e2e1e]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp Enquiry
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a href={telLink()} data-testid="header-mobile-call" aria-label="Call now"
             className={`grid h-10 w-10 place-items-center rounded-full border ${scrolled ? "border-[#0A170F]/30 text-[#0A170F]" : "border-[#F7F5F0]/40 text-[#F7F5F0]"}`}>
            <Phone className="h-4 w-4" />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            data-testid="header-menu-toggle"
            className={`grid h-10 w-10 place-items-center rounded-full border ${scrolled ? "border-[#0A170F]/30 text-[#0A170F]" : "border-[#F7F5F0]/40 text-[#F7F5F0]"}`}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
            data-testid="mobile-drawer"
          >
            <div className="border-t border-[#0A170F]/10 bg-[#F7F5F0]">
              <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-6" aria-label="Mobile">
                {NAV.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    className="border-b border-[#0A170F]/10 py-5 font-serif text-2xl text-[#0A170F]"
                    end={n.to === "/"}
                    data-testid={`mnav-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  >
                    {n.label}
                  </NavLink>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); openWhatsApp(generalEnquiryMessage()); }}
                    data-testid="drawer-whatsapp-cta"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-xs uppercase tracking-[0.24em] text-[#0A170F]"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                  </a>
                  <a
                    href={telLink()}
                    data-testid="drawer-call-cta"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0A170F]/40 px-5 py-4 text-xs uppercase tracking-[0.24em] text-[#0A170F]"
                  >
                    <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
