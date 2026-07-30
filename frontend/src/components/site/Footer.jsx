import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { BUSINESS, RESORT, DISCLAIMER } from "../../lib/config";
import { openWhatsApp, generalEnquiryMessage, telLink } from "../../lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#0A170F] text-[#F7F5F0]" data-testid="site-footer">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,#F7F5F0_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 lg:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/50">
              {BUSINESS.name}
            </p>
            <h3 className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Plan a quieter<br /> escape.
            </h3>
            <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-[#D4CBBF]">
              Independent Travel &amp; Resort Booking Assistance Service
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-[#F7F5F0]/70">
              <MapPin className="h-3.5 w-3.5" /> {BUSINESS.addressShort}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                data-testid="footer-whatsapp"
                onClick={() => openWhatsApp(generalEnquiryMessage())}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-xs uppercase tracking-[0.22em] text-[#0A170F]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
              </button>
              <a
                href={telLink()}
                data-testid="footer-call"
                className="inline-flex items-center gap-2 rounded-full border border-[#F7F5F0]/40 px-6 py-4 text-xs uppercase tracking-[0.22em]"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/50">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white/70">Home</Link></li>
              <li><Link to="/wayanad-resorts/lands-end-resort" className="hover:text-white/70">Land's End Resort</Link></li>
              <li><Link to="/about-us" className="hover:text-white/70">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white/70">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white/70">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white/70">Terms &amp; Conditions</Link></li>
              <li><Link to="/booking-policy" className="hover:text-white/70">Booking &amp; Cancellation Policy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/50">Reach</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" /><a href="#" onClick={(e)=>{e.preventDefault();openWhatsApp(generalEnquiryMessage());}} className="hover:text-white/70">{BUSINESS.whatsapp}</a></li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /><a href={telLink()} className="hover:text-white/70">{BUSINESS.phone}</a></li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /><a href={`mailto:${BUSINESS.email}`} className="hover:text-white/70">{BUSINESS.email}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{BUSINESS.addressShort}</li>
            </ul>
            <p className="mt-6 text-xs text-[#F7F5F0]/55">Business Hours<br />{BUSINESS.hours}</p>
          </div>
        </div>

        <div className="mt-20 border-t border-[#F7F5F0]/10 py-8 text-xs text-[#F7F5F0]/50">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p>© {year} {BUSINESS.legalName}. Booking assistance for {RESORT.name}, {RESORT.city}.</p>
            <p className="max-w-md text-[11px] leading-relaxed" data-testid="footer-disclaimer">
              {DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
