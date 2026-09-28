import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
} from "lucide-react";
import { useContact } from "../context/ContactContext";

const MenuPreview = () => {
  const { openContact } = useContact();

  return (
    <section
      id="menus"
      className="relative overflow-hidden bg-[#111111] py-24 sm:py-32"
    >

      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#C89A2E]/20" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#C89A2E]/10" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C89A2E]"
          >
            Curated For Your Event
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl leading-none text-white sm:text-7xl"
          >
            Explore Our
            <br />
            <span className="text-[#C89A2E]">
              Menus.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-[17px]"
          >
            Discover curated menu options and let us help you customise
            the right food experience for your event.
          </motion.p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/menu/trinity-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#C89A2E] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#111111] transition hover:bg-white"
            >
              View Menu PDF
              <Download size={15} />
            </a>

            <button
              onClick={openContact}
              className="flex items-center justify-center gap-3 border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#C89A2E] hover:text-[#C89A2E]"
            >
              Request Custom Menu
              <ArrowUpRight size={15} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MenuPreview;