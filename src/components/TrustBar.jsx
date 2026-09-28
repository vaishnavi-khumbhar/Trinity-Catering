import { motion } from "framer-motion";

const TrustBar = () => {
  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

        {/* Years Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-8 text-center"
        >
          <p className="font-display text-4xl text-[#C89A2E]">
            30+
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/50">
            Years Experience
          </p>
        </motion.div>

        {/* Events Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="px-6 py-8 text-center"
        >
          <p className="font-display text-4xl text-[#C89A2E]">
            5000+
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/50">
            Events Served
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-6 py-8 text-center"
        >
          <p className="font-display text-4xl text-[#C89A2E]">
            Pune
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/50">
            Corporate Catering
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustBar;