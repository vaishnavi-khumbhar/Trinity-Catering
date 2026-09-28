import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <>
      <section className="bg-[#111111] px-5 pb-20 pt-40 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89A2E]">
            Our Services
          </p>

          <h1 className="mt-5 font-display text-6xl leading-none sm:text-8xl">
            Catering for
            <br />
            <span className="text-[#C89A2E]">
              Business Occasions.
            </span>
          </h1>
        </div>
      </section>

      <Services />
    </>
  );
};

export default ServicesPage;