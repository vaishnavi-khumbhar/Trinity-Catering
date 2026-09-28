import { motion } from "framer-motion";
import { useContact } from "../context/ContactContext";

const MobileCTA = () => {
  const { openContact } = useContact();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 1.2,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="fixed bottom-5 left-1/2 z-[65] -translate-x-1/2 lg:hidden"
    >
      <button
        onClick={openContact}
        className="
          group
          flex
          items-center
          justify-center
          rounded-full
          border
          border-[#C89A2E]
          bg-[#C89A2E]
          px-6
          py-3
          text-[#111111]
          shadow-[0_8px_28px_rgba(200,154,46,0.30)]
          transition-all
          duration-300
          hover:bg-[#d6aa42]
          hover:shadow-[0_10px_32px_rgba(200,154,46,0.38)]
          active:scale-95
        "
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
          Get a Quote
        </span>
      </button>
    </motion.div>
  );
};

export default MobileCTA;