import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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


import MobileCTA from "./components/MobileCTA";
/* =========================
   SCROLL TO TOP
========================= */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

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
      {/* Scroll page to top whenever route changes */}
      <ScrollToTop />

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* Navbar */}
      <Navbar />

      {/* Main Pages */}
      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />



<MobileCTA />


{/* Mobile CTA */}
<MobileCTA />

      {/* Contact Popup */}
      <ContactPopup />
    </>
  );
};

export default App;