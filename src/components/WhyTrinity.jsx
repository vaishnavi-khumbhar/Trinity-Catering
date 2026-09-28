import { motion } from "framer-motion";
import {
  Check,
  ArrowUpRight,
} from "lucide-react";
import { useContact } from "../context/ContactContext";

const WhyTrinity = () => {
  const { openContact } = useContact();

  const points = [
    "Custom Menu Planning",
    "Professional Hospitality",
    "Event Setup & Coordination",
    "Smooth Execution",
    "Corporate-Focused Approach",
    "Pune Corporate Catering",
  ];

  return (
    <section
      id="about"
      className="bg-[#F8F5EE] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          className="relative min-h-[480px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=85"
            alt="Trinity catering experience"
            className="h-full min-h-[480px] w-full object-cover"
          />

          <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-black/70 p-5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs">
            <p className="font-display text-4xl text-[#C89A2E]">
              30+
            </p>

            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-white/70">
              Years of Experience
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center">

          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B88920]">
            <span className="h-px w-8 bg-[#C89A2E]" />
            Why Trinity
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl">
            We Start With
            <br />
            <span className="text-[#B88920]">
              Your Requirement.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#4a4a4a] sm:text-[17px] sm:leading-8">
            Every corporate event has different people, priorities and
            expectations. Trinity works with you to understand the event,
            recommend the right menu, plan the setup and execute the
            experience seamlessly.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                }}
                className="flex items-center gap-3 border-b border-black/10 py-3.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[#C89A2E]">
                  <Check size={14} />
                </span>

                <span className="text-sm font-medium text-[#333] sm:text-[15px]">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={openContact}
            className="group mt-10 flex w-fit items-center gap-3 border-b border-[#111] pb-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#C89A2E] hover:text-[#B88920]"
          >
            Plan Your Event

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

        </div>

      </div>
    </section>
  );
};

export default WhyTrinity;