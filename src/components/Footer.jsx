import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContact } from "../context/ContactContext";
import trinityLogo from "../assets/logo/trinity-logo.jpeg";

const Footer = () => {
  const { openContact } = useContact();

  /* =========================
     FOOTER LINK SCROLL
  ========================== */
  const handleFooterLink = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0A] text-white">

      {/* Decorative Gold Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89A2E]/50 to-transparent" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#C89A2E]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="grid gap-12 text-center md:grid-cols-2 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================== */}
          <div className="flex flex-col items-center lg:col-span-2">

            {/* Logo */}
            <Link
              to="/"
              onClick={handleFooterLink}
              className="flex w-fit items-center rounded-xl border border-[#C89A2E]/40 bg-white p-2 shadow-sm transition-all duration-300 hover:border-[#C89A2E] hover:shadow-lg"
            >
              <img
                src={trinityLogo}
                alt="Trinity Catering"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>

            {/* Tagline */}
            <p className="mt-6 max-w-md font-display text-3xl leading-tight text-white/90 sm:text-4xl">
              Your Corporate Catering Partner,
              <span className="text-[#C89A2E]">
                {" "}Not Just Your Caterer.
              </span>
            </p>

            {/* Description */}
            <p className="mt-5 max-w-lg text-base leading-8 text-white/55 sm:text-[17px]">
              From menu planning and budgeting to setup, hospitality and
              execution, Trinity works alongside your team to create a
              catering experience built around your event.
            </p>

          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div className="flex flex-col items-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89A2E] sm:text-sm">
              Quick Links
            </p>

            <div className="mt-6 flex flex-col items-center gap-4 text-base text-white/60">

              {/* Home */}
              <Link
                to="/"
                onClick={handleFooterLink}
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-4" />
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={handleFooterLink}
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-4" />
                About
              </Link>

              {/* Services */}
              <Link
                to="/services"
                onClick={handleFooterLink}
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-4" />
                Services
              </Link>

              {/* Menus */}
              <Link
                to="/menu"
                onClick={handleFooterLink}
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-4" />
                Menus
              </Link>

              {/* Gallery */}
              <Link
                to="/gallery"
                onClick={handleFooterLink}
                className="group flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-4" />
                Gallery
              </Link>

              {/* Contact */}
              <button
                onClick={openContact}
                className="group flex items-center gap-2 text-base text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#C89A2E] transition-all duration-300 group-hover:w-4" />
                Contact
              </button>

            </div>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div className="flex flex-col items-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89A2E] sm:text-sm">
              Contact
            </p>

            <div className="mt-6 flex flex-col items-center gap-5">

              {/* Phone */}
              <div className="flex items-center justify-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-[#C89A2E]"
                />

                <span className="text-base text-white/60">
                  +91 XXXXX XXXXX
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-[#C89A2E]"
                />

                <span className="text-base text-white/60">
                  hello@trinitycatering.in
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-3">
                <MapPin
                  size={18}
                  className="shrink-0 text-[#C89A2E]"
                />

                <span className="text-base text-white/60">
                  Pune, Maharashtra
                </span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center gap-4">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-[#C89A2E] hover:bg-[#C89A2E]/10 hover:text-[#C89A2E]"
              >
                <FaInstagram size={17} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-[#C89A2E] hover:bg-[#C89A2E]/10 hover:text-[#C89A2E]"
              >
                <FaFacebookF size={17} />
              </a>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM FOOTER
        ========================== */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:items-center lg:justify-between">

            {/* Copyright */}
            <p className="text-xs uppercase tracking-[0.12em] text-white/50 sm:text-sm">
              © 2026 Trinity Catering. All Rights Reserved.
            </p>

           

            {/* Designed & Developed */}
            <a
              href="https://advertisingandbrandingmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.08em] text-white/50 transition-colors duration-300 hover:text-[#C89A2E] sm:text-sm"
            >
              Designed & Developed By{" "}
              <span className="font-semibold text-white/80 transition-colors duration-300 hover:text-[#C89A2E]">
                Advertising Branding & Marketing
              </span>
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;