import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {

  const whatsappNumber = "919999999999";

  const message = encodeURIComponent(
    "Hello Trinity Catering, I would like to enquire about corporate catering."
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 1,
        type: "spring",
      }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#C89A2E] text-white shadow-xl md:bottom-7 md:right-7"
      aria-label="WhatsApp Trinity Catering"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;