import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { useContact } from "../context/ContactContext";
import trinityLogo from "../assets/logo/trinity-logo.jpeg";

const Footer = () => {
  const { openContact } = useContact();

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0A] text-white">

      {/* Decorative gold line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89A2E]/50 to-transparent" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#C89A2E]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex w-fit items-center rounded-xl border border-[#C89A2E]/40 bg-white p-2 shadow-sm">
              <img
                src={trinityLogo}
                alt="Trinity Catering"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </div>

            <p className="mt-6 max-w-md font-display text-3xl leading-tight text-white/90">
              Your Corporate Catering Partner,
              <span className="text-[#C89A2E]">
                {" "}Not Just Your Caterer.
              </span>
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              From menu planning and budgeting to setup, hospitality and
              execution, Trinity works alongside your team to create a
              catering experience built around your event.
            </p>

          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C89A2E]">
              Quick Links
            </p>

            <div className="mt-5 flex flex-col gap-3.5 text-sm text-white/60">

              <a href="/" className="group flex w-fit items-center gap-2 transition hover:text-white">
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-3" />
                Home
              </a>

              <a href="/about" className="group flex w-fit items-center gap-2 transition hover:text-white">
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-3" />
                About
              </a>

              <a href="/services" className="group flex w-fit items-center gap-2 transition hover:text-white">
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-3" />
                Services
              </a>

              <a href="/menus" className="group flex w-fit items-center gap-2 transition hover:text-white">
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-3" />
                Menus
              </a>

              <a href="/gallery" className="group flex w-fit items-center gap-2 transition hover:text-white">
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-3" />
                Gallery
              </a>

              <button
                onClick={openContact}
                className="group flex w-fit items-center gap-2 text-left transition hover:text-white"
              >
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-3" />
                Contact
              </button>

            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C89A2E]">
              Contact
            </p>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#C89A2E]"
                />

                <span className="text-sm text-white/60">
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#C89A2E]"
                />

                <span className="text-sm text-white/60">
                  hello@trinitycatering.in
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#C89A2E]"
                />

                <span className="text-sm text-white/60">
                  Pune, Maharashtra
                </span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-7 flex gap-2">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#C89A2E] hover:bg-[#C89A2E]/10 hover:text-[#C89A2E]"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#C89A2E] hover:bg-[#C89A2E]/10 hover:text-[#C89A2E]"
              >
                <FaFacebookF size={16} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[0.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Trinity Catering. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Good Food
            <span className="text-[#C89A2E]">◆</span>
            Great Moments
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;