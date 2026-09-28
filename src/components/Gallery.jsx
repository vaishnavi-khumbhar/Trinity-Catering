import { motion } from "framer-motion";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    title: "Corporate Events",
    size: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85",
    title: "Buffet Experience",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85",
    title: "Celebrations",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    title: "Event Experience",
    size: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
    title: "Food",
    size: "small",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B88920]">
              <span className="h-px w-8 bg-[#C89A2E]" />
              Event Gallery
            </p>

            <h2 className="mt-5 font-display text-5xl leading-none sm:text-6xl">
              More Than Food.
              <br />
              <span className="text-[#B88920]">
                The Complete Experience.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-8 text-[#4a4a4a] sm:text-[16px]">
            Explore food, buffet setups, hospitality and event experiences
            that bring the complete Trinity approach to life.
          </p>

        </div>

        {/* Gallery */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden ${
                item.size === "large"
                  ? "sm:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >

              <div
                className={`relative h-full min-h-[260px] ${
                  item.size === "large"
                    ? "lg:min-h-[560px]"
                    : "lg:min-h-[270px]"
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C89A2E]">
                    Trinity
                  </p>

                  <h3 className="mt-1 font-display text-2xl text-white">
                    {item.title}
                  </h3>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;