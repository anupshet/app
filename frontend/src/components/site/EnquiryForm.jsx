import { useState } from "react";
import { openWhatsApp, detailedEnquiryMessage } from "../../lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

const ROOMS = ["Bungalow", "Valley View", "Arayum Purayum", "Forest View", "Not Sure"];
const MEALS = ["CP", "MAP", "AP", "Not Sure"];

const initial = {
  name: "", phone: "",
  checkIn: "", checkOut: "",
  adults: "2", children: "0",
  roomType: "", mealPlan: "",
  message: "",
};

export default function EnquiryForm({ compact = false, testId = "enquiry-form" }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please share your name";
    if (!/^[\d+\-\s()]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.checkIn) e.checkIn = "Select a check-in date";
    if (!form.checkOut) e.checkOut = "Select a check-out date";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      e.checkOut = "Check-out must be after check-in";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = detailedEnquiryMessage(form);
    openWhatsApp(msg);
  };

  const inputBase =
    "w-full rounded-none border-b border-[#0A170F]/25 bg-transparent px-0 py-3 text-[#0A170F] placeholder-[#0A170F]/40 outline-none transition-colors focus:border-[#8B5A2B]";
  const label = "block text-[10px] uppercase tracking-[0.24em] text-[#0A170F]/60";

  return (
    <form
      onSubmit={onSubmit}
      data-testid={testId}
      className={`grid gap-6 ${compact ? "" : "md:grid-cols-2"}`}
      noValidate
    >
      <div className={compact ? "" : "md:col-span-2"}>
        <label className={label}>Name</label>
        <input
          value={form.name}
          onChange={set("name")}
          type="text"
          className={inputBase}
          placeholder="Your full name"
          data-testid="form-name"
          required
        />
        {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
      </div>

      <div>
        <label className={label}>Phone</label>
        <input
          value={form.phone}
          onChange={set("phone")}
          type="tel"
          className={inputBase}
          placeholder="+91 · · · · · · · · · ·"
          data-testid="form-phone"
          required
        />
        {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
      </div>

      <div>
        <label className={label}>Guests (Adults · Children)</label>
        <div className="grid grid-cols-2 gap-3">
          <input value={form.adults} onChange={set("adults")} type="number" min="1" className={inputBase} data-testid="form-adults" />
          <input value={form.children} onChange={set("children")} type="number" min="0" className={inputBase} data-testid="form-children" />
        </div>
      </div>

      <div>
        <label className={label}>Check-in</label>
        <input value={form.checkIn} onChange={set("checkIn")} type="date" className={inputBase} data-testid="form-checkin" required />
        {errors.checkIn && <p className="mt-1 text-xs text-red-700">{errors.checkIn}</p>}
      </div>

      <div>
        <label className={label}>Check-out</label>
        <input value={form.checkOut} onChange={set("checkOut")} type="date" className={inputBase} data-testid="form-checkout" required />
        {errors.checkOut && <p className="mt-1 text-xs text-red-700">{errors.checkOut}</p>}
      </div>

      <div>
        <label className={label}>Room Type</label>
        <select value={form.roomType} onChange={set("roomType")} className={inputBase} data-testid="form-roomtype">
          <option value="">Select a room</option>
          {ROOMS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div>
        <label className={label}>Meal Plan</label>
        <select value={form.mealPlan} onChange={set("mealPlan")} className={inputBase} data-testid="form-mealplan">
          <option value="">Select a plan</option>
          {MEALS.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      <div className={compact ? "" : "md:col-span-2"}>
        <label className={label}>Message (optional)</label>
        <textarea
          value={form.message}
          onChange={set("message")}
          rows={3}
          className={inputBase + " resize-none"}
          placeholder="Anything specific about your stay?"
          data-testid="form-message"
        />
      </div>

      <div className={`flex items-center justify-between gap-4 ${compact ? "" : "md:col-span-2"}`}>
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
