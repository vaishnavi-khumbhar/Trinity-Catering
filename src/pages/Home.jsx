import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import WhyTrinity from "../components/WhyTrinity";
import Services from "../components/Services";
import Cuisines from "../components/Cuisines";
import MenuPreview from "../components/MenuPreview";
import Gallery from "../components/Gallery";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyTrinity />
      <Services />
      <Cuisines />
      <MenuPreview />
      <Gallery />
      <HowWeWork />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Home;