import Cuisines from "../components/Cuisines";
import MenuPreview from "../components/MenuPreview";

const Menu = () => {
  return (
    <>
      <section className="bg-[#111111] px-5 pb-20 pt-40 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C89A2E]">
            Our Menus
          </p>

          <h1 className="mt-5 font-display text-6xl leading-none sm:text-8xl">
            Menus Built
            <br />
            <span className="text-[#C89A2E]">
              Around Your Event.
            </span>
          </h1>
        </div>
      </section>

      <Cuisines />
      <MenuPreview />
    </>
  );
};

export default Menu;