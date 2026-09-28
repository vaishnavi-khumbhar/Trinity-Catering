import { motion } from "framer-motion";
import {
  Search,
  MessageSquareText,
  ClipboardCheck,
  UtensilsCrossed,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your event requirement, guests, venue, budget, timeline and expectations.",
    icon: Search,
  },
  {
    number: "02",
    title: "Consult",
    description:
      "We recommend the appropriate menu, cuisine, quantity, service style and setup.",
    icon: MessageSquareText,
  },
  {
    number: "03",
    title: "Plan",
    description:
      "We coordinate food planning, logistics, setup, hospitality and service.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We deliver professionally while you stay focused on your guests and business.",
    icon: UtensilsCrossed,
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-[#111111] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C89A2E]">
            <span className="h-px w-8 bg-[#C89A2E]" />
            How We Work
          </p>

          <h2 className="mt-5 font-display text-5xl leading-none text-white sm:text-6xl">
            Simple Process.
            <br />
            <span className="text-[#C89A2E]">
              Seamless Execution.
            </span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-0 md:grid-cols-4">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-[#C89A2E]/25 md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                className="relative border-l border-white/10 py-7 pl-6 md:border-l-0 md:px-5 md:py-0"
              >

                <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-[#C89A2E] bg-[#111111] text-[#C89A2E]">
                  <Icon size={22} />
                </div>

                <p className="mt-7 text-[10px] font-bold tracking-[0.25em] text-[#C89A2E]">
                  {step.number}
                </p>

                <h3 className="mt-2 font-display text-3xl text-white">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-white/55">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowWeWork;