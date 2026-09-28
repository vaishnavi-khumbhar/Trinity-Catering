import WhyTrinity from "../components/WhyTrinity";
import HowWeWork from "../components/HowWeWork";

const About = () => {
  return (
    <>
      <section className="bg-[#111111] px-5 pb-20 pt-40 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89A2E]">
            About Trinity
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-6xl leading-none sm:text-8xl">
            More Than Food.
            <br />
            <span className="text-[#C89A2E]">
              A Catering Partner.
            </span>
          </h1>
        </div>
      </section>

      <WhyTrinity />
      <HowWeWork />
    </>
  );
};

export default About;