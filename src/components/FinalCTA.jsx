import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useContact } from "../context/ContactContext";

const FinalCTA = () => {
  const { openContact } = useContact();

  const whatsappNumber = "919999999999";

  const message = encodeURIComponent(
    "Hello Trinity Catering, I am planning a corporate event in Pune."
  );

  return (
    <section className="relative overflow-hidden bg-[#111111]">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-36">

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C89A2E]"
        >
          Ready When You Are
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 font-display text-5xl leading-none text-white sm:text-7xl"
        >
          Planning a Corporate
          <br />
          <span className="text-[#C89A2E]">
            Event in Pune?
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-[17px]"
        >
          Tell us what you are planning.
          We will help you figure out the rest.
        </motion.p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

          <button
            onClick={openContact}
            className="group flex items-center justify-center gap-3 bg-[#C89A2E] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#111111] transition hover:bg-white"
          >
            Get a Corporate Quote

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#C89A2E] hover:text-[#C89A2E]"
          >
            WhatsApp Us
            <MessageCircle size={16} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;