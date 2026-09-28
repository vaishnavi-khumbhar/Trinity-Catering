import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cuisines } from "../data/cuisines";
import { useContact } from "../context/ContactContext";

const Cuisines = () => {
  const [active, setActive] = useState(cuisines[0]);
  const { openContact } = useContact();

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B88920]">
              <span className="h-px w-8 bg-[#C89A2E]" />
              Food & Cuisines
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl">
              One Caterer.
              <br />
              <span className="text-[#B88920]">
                Multiple Cuisines.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#4a4a4a] sm:text-[17px] lg:justify-self-end">
            Menus designed around your event, audience, preferences and
            budget — from Indian favourites to global cuisines.
          </p>

        </div>

        {/* Tabs */}
        <div className="mt-12 flex gap-2 overflow-x-auto border-b border-black/10 pb-3 scrollbar-hide">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine.id}
              onClick={() => setActive(cuisine)}
              className={`whitespace-nowrap px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition ${
                active.id === cuisine.id
                  ? "bg-[#111111] text-[#C89A2E]"
                  : "text-[#777] hover:text-[#111]"
              }`}
            >
              {cuisine.shortName}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">

          <div className="relative min-h-[420px] overflow-hidden bg-[#111111] sm:min-h-[550px]">

            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.name}
                initial={{
                  opacity: 0,
                  scale: 1.06,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-7 sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C89A2E]">
                Curated Cuisine
              </p>

              <h3 className="mt-2 font-display text-5xl text-white sm:text-6xl">
                {active.name}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[#F8F5EE] p-7 sm:p-10">

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B88920]">
                {active.shortName}
              </p>

              <h3 className="mt-5 font-display text-4xl">
                Menus built
                <br />
                around your event.
              </h3>

              <p className="mt-5 text-base leading-8 text-[#4a4a4a] sm:text-[16px]">
                {active.description}
              </p>
            </div>

            <button
              onClick={openContact}
              className="group mt-10 flex w-fit items-center gap-3 border-b border-[#111] pb-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#C89A2E] hover:text-[#B88920]"
            >
              Request Custom Menu

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cuisines;