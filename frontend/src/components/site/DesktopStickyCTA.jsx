import { MessageCircle, Phone } from "lucide-react";
import { openWhatsApp, generalEnquiryMessage, telLink } from "../../lib/whatsapp";
import { BUSINESS } from "../../lib/config";

/**
 * Desktop-only sticky enquiry card, fixed bottom-right.
 * Mobile uses MobileBottomCTA instead.
 */
export default function DesktopStickyCTA() {
  return (
    <div
      data-testid="desktop-sticky-cta"
      className="fixed bottom-6 right-6 z-40 hidden w-[300px] lg:block"
    >
      <div className="overflow-hidden rounded-2xl border border-[#0A170F]/10 bg-white/90 shadow-[0_18px_50px_rgba(10,23,15,0.18)] backdrop-blur-xl">
        <div className="bg-[#2C402B] px-5 py-3">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#F7F5F0]/70">Enquire Now</p>
          <p className="mt-1 font-serif text-xl leading-tight text-[#F7F5F0]">Plan your Wayanad stay</p>
        </div>
        <div className="p-4">
          <p className="text-xs leading-relaxed text-[#0A170F]/65">
            Get availability &amp; the latest pricing. Prices and availability are subject to confirmation.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => openWhatsApp(generalEnquiryMessage())}
              data-testid="sticky-whatsapp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[11px] uppercase tracking-[0.2em] text-[#0A170F] transition-colors duration-500 hover:bg-[#1ebe58]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </button>
            <a
              href={telLink()}
              data-testid="sticky-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A170F] py-3 text-[11px] uppercase tracking-[0.2em] text-[#F7F5F0] transition-colors duration-500 hover:bg-[#2C402B]"
            >
              <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
