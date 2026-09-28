import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ContactPopup from "./components/ContactPopup";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Menu from "./pages/Menu";
import GalleryPage from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />

      <ContactPopup />
    </>
  );
};

export default App;