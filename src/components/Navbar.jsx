import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useContact } from "../context/ContactContext";
import trinityLogo from "../assets/logo/trinity-logo.jpeg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useContact();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Menus", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const handleContact = () => {
    setMobileMenu(false);
    openContact();
  };

  const handleLink = () => {
    setMobileMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-[80] px-3 pt-3 sm:px-5 sm:pt-5">
        <nav
          className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border px-4 py-2 backdrop-blur-xl transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2"
              : "border-white/10 bg-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-2.5"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLink}
            className="flex shrink-0 items-center rounded-xl border border-[#C89A2E]/30 bg-white p-1.5 shadow-sm transition-all duration-300 hover:border-[#C89A2E]/60 hover:shadow-md"
          >
            <img
              src={trinityLogo}
              alt="Trinity Catering"
              className="h-9 w-auto object-contain transition-all duration-500 sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleLink}
                className="group relative whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] text-[#222] transition-colors duration-300 hover:text-[#C89A2E]"
              >
                {item.label}

                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#C89A2E] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={openContact}
            className="group relative hidden shrink-0 items-center gap-2 overflow-hidden rounded-lg bg-[#111111] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#C89A2E] transition-transform duration-400 ease-out group-hover:translate-x-0" />

            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#111111]">
              Get a Quote
            </span>

            <ArrowUpRight
              size={14}
              className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#111111]"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(true)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white shadow-sm transition-transform duration-300 active:scale-90 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 250,
              }}
              className="fixed right-0 top-0 z-[100] flex h-screen w-[85%] max-w-sm flex-col bg-[#111111] p-6 sm:p-7"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center rounded-xl border border-[#C89A2E]/50 bg-white p-1.5 shadow-sm">
                  <img
                    src={trinityLogo}
                    alt="Trinity Catering"
                    className="h-9 w-auto object-contain"
                  />
                </div>

                <button
                  onClick={() => setMobileMenu(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-[#C89A2E] hover:text-[#C89A2E]"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="mt-10 flex flex-1 flex-col justify-center gap-0 sm:mt-14">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.4,
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={handleLink}
                      className="group flex items-baseline justify-between border-b border-white/10 py-4 font-display text-2xl leading-none text-white transition-colors duration-300 hover:text-[#C89A2E] sm:py-5 sm:text-[28px]"
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={18}
                        className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C89A2E]"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + navItems.length * 0.06 + 0.1,
                }}
                className="mt-auto pt-4"
              >
                <p className="mb-4 text-center text-[11px] uppercase tracking-[0.18em] text-white/40">
                  Let&apos;s plan your event
                </p>

                <button
                  onClick={handleContact}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#C89A2E] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#111111] transition-transform duration-300 active:scale-[0.98]"
                >
                  Get a Quote
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;