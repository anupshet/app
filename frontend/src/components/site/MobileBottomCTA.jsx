import { MessageCircle, Phone } from "lucide-react";
import { openCall, openWhatsApp, telLink } from "../../lib/whatsapp";
import { useEnquiryContext } from "../../hooks/useEnquiryContext";

export default function MobileBottomCTA() {
  const { message } = useEnquiryContext();
  return (
    <div
      data-testid="mobile-bottom-cta"
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-3 mb-3 flex gap-2 rounded-full border border-white/40 bg-white/80 p-1.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(10,23,15,0.15)]">
        <button
          onClick={() => openWhatsApp(message)}
          data-testid="mobile-cta-whatsapp"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-xs uppercase tracking-[0.18em] text-[#0A170F]"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </button>
        <a
          href={telLink()}
          onClick={(event) => { event.preventDefault(); openCall(); }}
          data-testid="mobile-cta-call"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0A170F] py-3 text-xs uppercase tracking-[0.18em] text-[#F7F5F0]"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </div>
  );
}
