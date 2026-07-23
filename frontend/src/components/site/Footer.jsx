import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, RESORT } from "../../lib/config";
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
              Chapter · Contact
            </p>
            <h3 className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Plan a quieter<br /> escape.
            </h3>
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
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/50">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white/70">Home</Link></li>
              <li><Link to="/wayanad-resorts/lands-end-resort" className="hover:text-white/70">Land's End Resort</Link></li>
              <li><Link to="/about-us" className="hover:text-white/70">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white/70">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/50">Policies</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white/70">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white/70">Terms &amp; Conditions</Link></li>
              <li><Link to="/booking-policy" className="hover:text-white/70">Booking &amp; Cancellation</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/50">Reach</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{BUSINESS.phone}</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" />{BUSINESS.whatsapp}</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" />{BUSINESS.email}</li>
              <li className="flex items-center gap-2"><Instagram className="h-3.5 w-3.5" />@lands_end_wayanad</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-[#F7F5F0]/10 py-8 text-xs text-[#F7F5F0]/50">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p>© {year} {BUSINESS.legalName}. Booking assistance for {RESORT.name}, {RESORT.city}.</p>
            <p className="max-w-md text-[11px] leading-relaxed">
              {BUSINESS.name} is an independent travel &amp; booking assistance business.
              This is not the official website of {RESORT.name}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
