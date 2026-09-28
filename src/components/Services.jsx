import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#F8F5EE] py-5 sm:py-5"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B88920]">
              <span className="h-px w-8 bg-[#C89A2E]" />
              What We Cater
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.95] text-[#111111] sm:text-6xl">
              Corporate Catering
              <br />
              <span className="text-[#B88920]">
                for Every Occasion.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#4a4a4a] sm:text-[17px] lg:justify-self-end">
            From office celebrations and corporate meetings to conferences,
            launches and employee events, Trinity works around your
            requirement to create the right food experience.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                }}
                className="group relative min-h-[370px] overflow-hidden bg-[#111111]"
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative flex h-full min-h-[370px] flex-col justify-end p-6">

                  <div className="mb-auto">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#C89A2E]/50 bg-black/20 text-[#C89A2E] backdrop-blur-sm">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C89A2E]">
                      0{index + 1}
                    </p>

                    <h3 className="font-display text-3xl text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/70 sm:text-[15px]">
                      {service.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Explore
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;