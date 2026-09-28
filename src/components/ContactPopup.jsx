import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Check,
} from "lucide-react";
import { useContact } from "../context/ContactContext";

const eventTypes = [
  "Corporate Event",
  "Office Celebration",
  "Annual Celebration",
  "Conference / Seminar",
  "Product Launch",
  "Employee Event",
  "Client / Dealer Meet",
  "Corporate Lunch / Dinner",
  "Other",
];

const CustomSelect = ({ value, onChange, options, placeholder, required }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Hidden native select keeps HTML5 required-field validation working */}
      <select
        required={required}
        value={value}
        onChange={() => {}}
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        tabIndex={-1}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between border bg-white/[0.04] px-4 py-3.5 text-left text-sm text-white transition-all duration-300 ${
          open
            ? "border-[#C89A2E] bg-white/[0.06]"
            : "border-white/15 hover:border-white/30"
        }`}
      >
        <span className={value ? "text-white" : "text-white/35"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-[#C89A2E] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-20 max-h-64 overflow-y-auto border border-white/10 bg-[#1a1a1a] py-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            {options.map((opt) => {
              const active = opt === value;
              return (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-[13px] transition-colors duration-200 ${
                      active
                        ? "bg-[#C89A2E]/15 text-[#C89A2E]"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span>{opt}</span>
                    {active && <Check size={14} className="shrink-0" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPopup = () => {
  const { isContactOpen, closeContact } = useContact();
  const [eventType, setEventType] = useState("");

  return (
    <AnimatePresence>
      {isContactOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContact}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
          />

          {/* Side Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 260,
            }}
            className="fixed right-0 top-0 z-[210] h-screen w-full max-w-[500px] overflow-y-auto bg-[#111111] text-white shadow-2xl"
          >
            <div className="relative min-h-full p-6 sm:p-10">

              {/* Close */}
              <button
                onClick={closeContact}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#C89A2E] hover:text-[#C89A2E]"
              >
                <X size={19} />
              </button>

              {/* Header */}
              <div className="pt-10">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C89A2E]">
                  Trinity Catering • Pune
                </p>

                <h2 className="font-display text-5xl leading-[0.95] sm:text-6xl">
                  Let's Plan
                  <br />
                  <span className="text-[#C89A2E]">
                    Your Event.
                  </span>
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                  Tell us what you're planning. We'll help you figure out
                  the right catering experience for your event.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Trinity Catering will contact you soon.");
                  closeContact();
                }}
                className="mt-10 space-y-5"
              >

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/50">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="trinity-input"
                  />
                </div>

               

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/50">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91"
                      className="trinity-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/50">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="trinity-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/50">
                    Event Type *
                  </label>

                  <CustomSelect
                    required
                    value={eventType}
                    onChange={setEventType}
                    options={eventTypes}
                    placeholder="Select event type"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/50">
                      Expected Guests
                    </label>

                    <input
                      type="number"
                      min="1"
                      placeholder="Approx. guests"
                      className="trinity-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/50">
                      Event Date
                    </label>

                    <input
                      type="date"
                      className="trinity-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/50">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us about your event..."
                    className="trinity-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 bg-[#C89A2E] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#111111] transition-all duration-300 hover:bg-white"
                >
                  Request a Quote
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </form>

              {/* Contact Details */}
              <div className="mt-10 border-t border-white/10 pt-7">
                <div className="grid gap-4 sm:grid-cols-3">

                  <div className="flex items-center gap-3">
                    <Phone
                      size={16}
                      className="text-[#C89A2E]"
                    />
                    <span className="text-xs text-white/60">
                      Call Us
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail
                      size={16}
                      className="text-[#C89A2E]"
                    />
                    <span className="text-xs text-white/60">
                      Email Us
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      className="text-[#C89A2E]"
                    />
                    <span className="text-xs text-white/60">
                      Pune
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;