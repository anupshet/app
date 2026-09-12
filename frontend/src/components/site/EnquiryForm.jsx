import { useState } from "react";
import { openWhatsApp, detailedEnquiryMessage } from "../../lib/whatsapp";
import { ArrowUpRight } from "lucide-react";
import { ALL_RESORTS, LANDS_END, formatPrice } from "../../lib/destinations";

const ROOMS = ["Bungalow", "Valley View", "Arayum Purayum", "Forest View", "Not Sure"];
const MEALS = ["CP", "MAP", "AP", "Not Sure"];

const initial = {
  name: "", phone: "",
  checkIn: "", checkOut: "",
  adults: "2", children: "0",
  roomType: "", mealPlan: "",
  message: "",
};

export default function EnquiryForm({ compact = false, testId = "enquiry-form", destinationMode = false, resort = null }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const selectedResort = destinationMode ? ALL_RESORTS.find((item) => item.id === form.resortId) || null : resort || LANDS_END;
  const showRoomPlans = selectedResort?.id === LANDS_END.id;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please share your name";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!/^[+\d\s()-]+$/.test(form.phone) || phoneDigits.length < 10 || phoneDigits.length > 15) e.phone = "Enter a valid phone number";
    if (!form.checkIn) e.checkIn = "Select a check-in date";
    if (!form.checkOut) e.checkOut = "Select a check-out date";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      e.checkOut = "Check-out must be after check-in";
    }
    if (!/^\d+$/.test(form.adults) || Number(form.adults) < 1) e.adults = "Enter at least one adult";
    if (!/^\d+$/.test(form.children)) e.children = "Enter a valid number of children";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = detailedEnquiryMessage(form, selectedResort);
    openWhatsApp(msg);
  };

  const inputBase =
    "min-w-0 w-full rounded-none border-b border-[#0A170F]/25 bg-transparent px-0 py-3 text-[#0A170F] placeholder-[#0A170F]/40 outline-none transition-colors focus:border-[#8B5A2B]";
  const label = "block text-[10px] uppercase tracking-[0.24em] text-[#0A170F]/60";

  return (
    <form
      onSubmit={onSubmit}
      data-testid={testId}
      className={`grid gap-6 [&>div]:min-w-0 ${compact ? "" : "md:grid-cols-2"}`}
      noValidate
    >
      {destinationMode && <div className={compact ? "" : "md:col-span-2"}>
        <label htmlFor={`${testId}-resort`} className={label}>Destination / Resort</label>
        <select id={`${testId}-resort`} data-testid="form-resort" value={form.resortId || ""} onChange={(event) => setForm((previous) => ({ ...previous, resortId: event.target.value, roomType: "", mealPlan: "" }))} className={inputBase}>
          <option value="">Help me choose a stay</option>
          {ALL_RESORTS.map((resort) => <option key={resort.id} value={resort.id} data-testid={`form-resort-option-${resort.id}`}>{`${resort.name} · ${resort.location}`}</option>)}
        </select>
        {selectedResort?.package && <p className="mt-3 text-xs leading-relaxed text-[#0A170F]/65" data-testid="form-selected-package">{[selectedResort.package.duration || selectedResort.package.positioning, selectedResort.package.category].filter(Boolean).join(" · ") || `${formatPrice(selectedResort.package.price)} / ${selectedResort.package.unit}`}</p>}
      </div>}
      <div className={compact ? "" : "md:col-span-2"}>
        <label htmlFor={`${testId}-name`} className={label}>Name</label>
        <input
          value={form.name}
          onChange={set("name")}
          type="text"
          id={`${testId}-name`}
          className={inputBase}
          placeholder="Your full name"
          data-testid="form-name"
          required
        />
        {errors.name && <p data-testid="form-error-name" className="mt-1 text-xs text-red-700">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor={`${testId}-phone`} className={label}>Phone</label>
        <input
          value={form.phone}
          onChange={set("phone")}
          type="tel"
          id={`${testId}-phone`}
          className={inputBase}
          placeholder="+91 · · · · · · · · · ·"
          data-testid="form-phone"
          required
        />
        {errors.phone && <p data-testid="form-error-phone" className="mt-1 text-xs text-red-700">{errors.phone}</p>}
      </div>

      <div>
        <label className={label}>Guests (Adults · Children)</label>
        <div className="grid grid-cols-2 gap-3">
          <input value={form.adults} onChange={set("adults")} type="number" min="1" aria-label="Adults" className={inputBase} data-testid="form-adults" />
          <input value={form.children} onChange={set("children")} type="number" min="0" aria-label="Children" className={inputBase} data-testid="form-children" />
        </div>
        {errors.adults && <p data-testid="form-error-adults" className="mt-1 text-xs text-red-700">{errors.adults}</p>}
        {errors.children && <p data-testid="form-error-children" className="mt-1 text-xs text-red-700">{errors.children}</p>}
      </div>

      <div>
        <label htmlFor={`${testId}-checkin`} className={label}>Check-in</label>
        <input id={`${testId}-checkin`} value={form.checkIn} onChange={set("checkIn")} type="date" className={inputBase} data-testid="form-checkin" required />
        {errors.checkIn && <p data-testid="form-error-checkin" className="mt-1 text-xs text-red-700">{errors.checkIn}</p>}
      </div>

      <div>
        <label htmlFor={`${testId}-checkout`} className={label}>Check-out</label>
        <input id={`${testId}-checkout`} value={form.checkOut} onChange={set("checkOut")} type="date" className={inputBase} data-testid="form-checkout" required />
        {errors.checkOut && <p data-testid="form-error-checkout" className="mt-1 text-xs text-red-700">{errors.checkOut}</p>}
      </div>

      {showRoomPlans && <div>
        <label htmlFor={`${testId}-roomtype`} className={label}>Room Type</label>
        <select id={`${testId}-roomtype`} value={form.roomType} onChange={set("roomType")} className={inputBase} data-testid="form-roomtype">
          <option value="">Select a room</option>
          {ROOMS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>}

      {showRoomPlans && <div>
        <label htmlFor={`${testId}-mealplan`} className={label}>Meal Plan</label>
        <select id={`${testId}-mealplan`} value={form.mealPlan} onChange={set("mealPlan")} className={inputBase} data-testid="form-mealplan">
          <option value="">Select a plan</option>
          {MEALS.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>}

      <div className={compact ? "" : "md:col-span-2"}>
        <label htmlFor={`${testId}-message`} className={label}>Message (optional)</label>
        <textarea
          value={form.message}
          id={`${testId}-message`}
          onChange={set("message")}
          rows={3}
          className={inputBase + " resize-none"}
          placeholder="Anything specific about your stay?"
          data-testid="form-message"
        />
      </div>

      <div className={`flex flex-wrap items-center justify-between gap-4 ${compact ? "" : "md:col-span-2"}`}>
        <p className="max-w-md text-[11px] leading-relaxed text-[#0A170F]/60">
          Submitting opens WhatsApp with your enquiry pre-filled. Final pricing &amp; availability are confirmed after we check with the resort.
        </p>
        <button
          type="submit"
          data-testid="form-submit"
          className="group inline-flex items-center gap-3 rounded-full bg-[#0A170F] px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#F7F5F0] transition-colors duration-500 hover:bg-[#2C402B]"
        >
          Send Enquiry
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}
