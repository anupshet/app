import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { BUSINESS, FOOTER_DISCLAIMER } from "../../lib/config";
import { DESTINATIONS } from "../../lib/destinations";
import { openWhatsApp, waLink, telLink } from "../../lib/whatsapp";
import { useEnquiryContext } from "../../hooks/useEnquiryContext";

const LINKS = [
  ["/", "Home", "home"], ["/packages", "Packages", "packages"], ["/about-us", "About Us", "about"], ["/contact", "Contact", "contact"],
  ["/privacy-policy", "Privacy Policy", "privacy"], ["/terms", "Terms & Conditions", "terms"], ["/booking-policy", "Booking & Cancellation Policy", "booking"],
];

export default function Footer() {
  const { message } = useEnquiryContext();
  return (
    <footer className="relative overflow-hidden bg-[#0A170F] pb-20 text-[#F7F5F0] lg:pb-0" data-testid="site-footer">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,#F7F5F0_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#F7F5F0]/65" data-testid="footer-business-name">Destina Tours &amp; Travels</p>
            <h3 className="mt-4 font-serif text-4xl leading-[1.08] md:text-5xl">Plan a quieter<br />escape.</h3>
            <p className="mt-6 text-[11px] uppercase leading-relaxed tracking-[0.15em] text-[#D4CBBF]" data-testid="footer-tagline">{BUSINESS.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink(message)} data-testid="footer-whatsapp" onClick={(e) => { e.preventDefault(); openWhatsApp(message); }} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-[10px] uppercase tracking-[0.1em] text-[#0A170F] transition-colors hover:bg-[#1ebe58]"><MessageCircle className="h-4 w-4" />WhatsApp Enquiry</a>
              <a href={telLink()} data-testid="footer-call" className="inline-flex items-center gap-2 rounded-full border border-[#F7F5F0]/40 px-5 py-4 text-[10px] uppercase tracking-[0.1em] transition-colors hover:bg-white/10"><Phone className="h-4 w-4" />Call Now</a>
            </div>
          </div>
          <nav aria-label="Footer destinations" data-testid="footer-destinations">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#F7F5F0]/60">Destinations</p>
            {DESTINATIONS.map((destination) => <div key={destination.id} className="mt-6">
              <Link to={destination.path} data-testid={`footer-${destination.id}`} className="font-serif text-2xl transition-colors hover:text-[#D4CBBF]">{destination.name} Resorts</Link>
              <ul className="mt-3 space-y-3 text-xs text-[#F7F5F0]/75">{destination.resorts.map((resort) => <li key={resort.id}><Link to={resort.path} data-testid={`footer-${resort.id}`} className="transition-colors hover:text-white">{resort.name}</Link></li>)}</ul>
            </div>)}
          </nav>
          <nav aria-label="Footer quick links" data-testid="footer-quick-links">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#F7F5F0]/60">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm text-[#F7F5F0]/80">{LINKS.map(([path, label, id]) => <li key={id}><Link to={path} data-testid={`footer-link-${id}`} className="transition-colors hover:text-white">{label}</Link></li>)}</ul>
          </nav>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#F7F5F0]/60">Reach</p>
            <ul className="mt-6 space-y-4 text-xs text-[#F7F5F0]/80">
              <li className="flex items-start gap-2"><MessageCircle className="h-3.5 w-3.5 shrink-0" /><a href={waLink(message)} data-testid="footer-whatsapp-number" onClick={(e) => { e.preventDefault(); openWhatsApp(message); }}>{BUSINESS.whatsapp}</a></li>
              <li className="flex items-start gap-2"><Phone className="h-3.5 w-3.5 shrink-0" /><a href={telLink()} data-testid="footer-phone-number">{BUSINESS.phone}</a></li>
              <li className="flex items-start gap-2"><Mail className="h-3.5 w-3.5 shrink-0" /><a href={`mailto:${BUSINESS.email}`} className="break-all" data-testid="footer-email">{BUSINESS.email}</a></li>
              <li className="flex items-start gap-2" data-testid="footer-address"><MapPin className="h-3.5 w-3.5 shrink-0" />{BUSINESS.addressShort}</li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-[#F7F5F0]/65" data-testid="footer-hours">Business Hours<br />{BUSINESS.hours}</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#F7F5F0]/15 py-8 text-xs text-[#F7F5F0]/65 md:flex-row">
          <p data-testid="footer-copyright">© {new Date().getFullYear()} {BUSINESS.legalName}.<br /><span className="mt-2 inline-block">Independent travel &amp; resort booking assistance.</span></p>
          <p className="max-w-xl text-[11px] leading-relaxed" data-testid="footer-disclaimer">{FOOTER_DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  );
}