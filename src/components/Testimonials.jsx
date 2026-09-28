import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#F8F5EE] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B88920]">
            Client Experience
          </p>

          <h2 className="mt-4 font-display text-5xl sm:text-6xl">
            Trusted by
            <span className="text-[#B88920]">
              {" "}Corporate Teams.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
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
                delay: index * 0.1,
              }}
              className="relative border border-black/10 bg-white p-7 sm:p-8"
            >

              <Quote
                size={28}
                className="text-[#C89A2E]"
              />

              <p className="mt-7 font-display text-2xl leading-snug text-[#222]">
                “{item.quote}”
              </p>

              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#222]">
                  {item.name}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#999]">
                  {item.role}
                </p>
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;