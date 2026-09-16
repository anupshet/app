import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS } from "../../lib/config";
import { DESTINATIONS } from "../../lib/destinations";
import { openCall, openWhatsApp, waLink, telLink } from "../../lib/whatsapp";
import { useEnquiryContext } from "../../hooks/useEnquiryContext";
import { DestinationNav } from "./DestinationNav";

const NAV = [{ to: "/packages", label: "Packages", id: "packages" }, { to: "/about-us", label: "About Us", id: "about-us" }, { to: "/contact", label: "Contact", id: "contact" }];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { message } = useEnquiryContext();
  const solid = scrolled || open || ["/privacy-policy", "/terms", "/booking-policy"].includes(location.pathname);
  useEffect(() => { setOpen(false); setExpanded(null); }, [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    const resize = () => { if (window.innerWidth >= 1280) setOpen(false); };
    window.addEventListener("resize", resize);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", close); window.removeEventListener("resize", resize); };
  }, [open]);
  return (
    <header data-testid="site-header" className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "border-b border-[#0A170F]/10 bg-[#F7F5F0]/95 text-[#0A170F] backdrop-blur-xl" : "bg-transparent text-[#F7F5F0]"}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-5 sm:px-6 lg:px-10">
        <Link to="/" data-testid="brand-logo" className="flex shrink-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
          <span className="font-serif text-3xl leading-none">Destina</span><span className="text-[9px] uppercase tracking-[0.16em] opacity-80">Tours &amp; Travels</span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary" data-testid="desktop-navigation">
          <NavLink to="/" end data-testid="nav-home" className="py-3 text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-70">Home</NavLink>
          {DESTINATIONS.map((destination) => <DestinationNav key={destination.id} destination={destination} />)}
          {NAV.map((item) => <NavLink key={item.id} to={item.to} data-testid={`nav-${item.id}`} className="py-3 text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-70">{item.label}</NavLink>)}
        </nav>
        <a href={waLink(message)} onClick={(e) => { e.preventDefault(); openWhatsApp(message); }} data-testid="header-whatsapp-cta" className="hidden shrink-0 items-center gap-2 rounded-full bg-[#2C402B] px-5 py-3 text-[10px] uppercase tracking-[0.1em] text-[#F7F5F0] transition-colors hover:bg-[#1e2e1e] xl:inline-flex"><MessageCircle className="h-3.5 w-3.5" />WhatsApp Enquiry</a>
        <div className="flex gap-2 xl:hidden">
          <a href={telLink()} onClick={(event) => { event.preventDefault(); openCall(); }} data-testid="header-mobile-call" aria-label="Call now" className="grid h-10 w-10 place-items-center rounded-full border border-current/30"><Phone className="h-4 w-4" /></a>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} data-testid="header-menu-toggle" className="grid h-10 w-10 place-items-center rounded-full border border-current/30">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
        </div>
      </div>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }} className="max-h-[calc(100dvh-150px)] overflow-y-auto border-t border-[#0A170F]/10 bg-[#F7F5F0] xl:hidden" data-lenis-prevent data-testid="mobile-drawer">
        <nav id="mobile-navigation" className="flex flex-col px-6 pb-10 pt-2" aria-label="Mobile">
          <NavLink to="/" end data-testid="mnav-home" className="border-b border-[#0A170F]/10 py-4 font-serif text-2xl">Home</NavLink>
          {DESTINATIONS.map((destination) => <DestinationNav key={destination.id} destination={destination} mobile expanded={expanded === destination.id} onToggle={() => setExpanded(expanded === destination.id ? null : destination.id)} onNavigate={() => setOpen(false)} />)}
          {NAV.map((item) => <NavLink key={item.id} to={item.to} data-testid={`mnav-${item.id}`} className="border-b border-[#0A170F]/10 py-4 font-serif text-2xl">{item.label}</NavLink>)}
          <a href={waLink(message)} onClick={(e) => { e.preventDefault(); openWhatsApp(message); }} data-testid="drawer-whatsapp-cta" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-xs"><MessageCircle className="h-4 w-4" />WhatsApp Enquiry</a>
          <a href={telLink()} onClick={(event) => { event.preventDefault(); openCall(); }} data-testid="drawer-call-cta" className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#0A170F]/30 px-4 py-4 text-xs"><Phone className="h-4 w-4" />Call {BUSINESS.phone}</a>
        </nav>
      </motion.div>}</AnimatePresence>
    </header>
  );
}