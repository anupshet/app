import EnquiryForm from "./EnquiryForm";

export default function CheckAvailability({ testId = "check-availability", resort, destinationMode = false }) {
  const stayLabel = resort?.name || "your stay";
  return (
    <section className="border-b border-[#0A170F]/10 bg-[#F7F5F0] py-16 md:py-20" data-testid={testId}>
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#8B5A2B]" data-testid={`${testId}-eyebrow`}>Destina Tours &amp; Travels</p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-[1.08] text-[#0A170F] md:text-6xl" data-testid={`${testId}-heading`}>Check Availability</h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#0A170F]/70" data-testid={`${testId}-description`}>
            Share your dates and guest details for {stayLabel}. We’ll confirm the latest available options and pricing.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="border border-[#0A170F]/12 bg-white p-6 md:p-10" data-testid={`${testId}-form-panel`}>
            <EnquiryForm compact resort={resort} destinationMode={destinationMode} testId={`${testId}-form`} />
          </div>
        </div>
      </div>
    </section>
  );
}