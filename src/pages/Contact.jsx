import { useEffect } from "react";
import { useContact } from "../context/ContactContext";

const Contact = () => {
  const { openContact } = useContact();

  useEffect(() => {
    openContact();
  }, []);

  return (
    <section className="min-h-screen bg-[#F8F5EE] px-5 pb-20 pt-40">
      <div className="mx-auto max-w-5xl text-center">

        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B88920]">
          Contact Trinity
        </p>

        <h1 className="mt-5 font-display text-6xl leading-none sm:text-8xl">
          Let's Plan
          <br />
          <span className="text-[#B88920]">
            Your Event.
          </span>
        </h1>

        <button
          onClick={openContact}
          className="mt-8 bg-[#111111] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
        >
          Open Enquiry Form
        </button>

      </div>
    </section>
  );
};

export default Contact;