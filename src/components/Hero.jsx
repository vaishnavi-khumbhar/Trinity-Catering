import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import { useContact } from "../context/ContactContext";

const Hero = () => {
  const { openContact } = useContact();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#111111] pt-28"
    >

      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=90"
          alt="Premium corporate event catering"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Decorative Gold Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="absolute right-[8%] top-[18%] hidden w-px bg-[#C89A2E]/70 lg:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">

        <div className="max-w-4xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#C89A2E]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C89A2E]">
              Corporate Catering • Pune
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="font-display text-[48px] leading-[0.95] text-white sm:text-[68px] lg:text-[92px]"
          >
            Your Corporate
            <br />

            <span className="text-[#C89A2E]">
              Catering Partner,
            </span>

            <br />

            Not Just Your Caterer.
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.7,
            }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base"
          >
            Custom menus. Thoughtful planning. Professional execution.
            Serving corporate events across Pune.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.85,
              duration: 0.7,
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >

            <button
              onClick={openContact}
              className="group flex items-center justify-center gap-3 bg-[#C89A2E] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#111111] transition-all duration-300 hover:bg-white"
            >
              Plan Your Event

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <a
              href="#menus"
              className="flex items-center justify-center gap-3 border border-white/30 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#C89A2E] hover:text-[#C89A2E]"
            >
              Explore Menus
            </a>

          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center justify-between border-t border-white/15 pt-5"
        >

          <p className="text-[9px] uppercase tracking-[0.28em] text-white/40">
            Good Food • Great Moments
          </p>

          <a
            href="#about"
            className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/60 sm:flex"
          >
            Scroll to explore
            <ArrowDown size={15} />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;