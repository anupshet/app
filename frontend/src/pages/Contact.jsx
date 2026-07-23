import { RevealText } from "../components/site/RevealText";
import EnquiryForm from "../components/site/EnquiryForm";
import { WhatsAppButton, CallButton } from "../components/site/Buttons";
import { BUSINESS } from "../lib/config";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { IMAGES } from "../lib/config";

export default function Contact() {
  return (
    <main data-testid="contact-page">
      <section className="relative isolate h-[60svh] min-h-[440px] w-full overflow-hidden bg-[#0A170F]">
        <img src={IMAGES.bedroom} alt="Warm wooden bedroom interior" className="absolute inset-0 h-full w-full scale-110 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A170F]/60 via-[#0A170F]/30 to-[#0A170F]/95" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-14 lg:px-10 lg:pb-20">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#F7F5F0]/80">Chapter · Contact</p>
          <RevealText as="h1" lines={["Let's plan your", "escape together."]}
            className="mt-6 max-w-3xl font-serif text-[10vw] font-light leading-[0.9] tracking-tight text-[#F7F5F0] md:text-[7vw] lg:text-[6rem]" />
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 lg:px-10">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">Direct lines</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1] tracking-tight text-[#0A170F] md:text-5xl">
              Reach {BUSINESS.name}
            </h2>

            <ul className="mt-10 space-y-6">
              <ContactLine icon={MessageCircle} label="WhatsApp" value={BUSINESS.whatsapp} testId="contact-whatsapp-line" />
              <ContactLine icon={Phone}         label="Phone"    value={BUSINESS.phone}    testId="contact-phone-line" />
              <ContactLine icon={Mail}          label="Email"    value={BUSINESS.email}    testId="contact-email-line" />
              <ContactLine icon={MapPin}        label="Based in" value="Wayanad, Kerala"   testId="contact-address-line" />
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppButton />
              <CallButton variant="primary" className="!bg-[#0A170F] !text-[#F7F5F0] hover:!bg-[#2C402B]" />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="border border-[#0A170F]/10 bg-white p-8 md:p-12">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#0A170F]/60">Enquiry Form</p>
              <h3 className="mt-2 font-serif text-3xl leading-tight text-[#0A170F] md:text-4xl">
                Tell us about your stay.
              </h3>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactLine({ icon: Icon, label, value, testId }) {
  return (
    <li className="flex items-center gap-4 border-b border-[#0A170F]/15 pb-6" data-testid={testId}>
      <div className="grid h-10 w-10 place-items-center rounded-full border border-[#0A170F]/20">
        <Icon className="h-4 w-4 text-[#8B5A2B]" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#0A170F]/60">{label}</p>
        <p className="mt-1 font-serif text-2xl leading-none text-[#0A170F]">{value}</p>
      </div>
    </li>
  );
}
