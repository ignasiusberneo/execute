// import './App.css'
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Example from "./components/Example";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import OurClient from "./components/OurClient";

function App() {
  const tentangKamiRef = useRef(null);
  const produkRef = useRef(null);
  const hasilKaryaRef = useRef(null);
  const klienKamiRef = useRef(null);
  const kontakRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Navbar
        onNavClick={{
          tentangKami: () => scrollToSection(tentangKamiRef),
          produk: () => scrollToSection(produkRef),
          hasilKarya: () => scrollToSection(hasilKaryaRef),
          klienKami: () => scrollToSection(klienKamiRef),
          kontak: () => scrollToSection(kontakRef),
        }}
      />
      <Hero />
      <Box ref={tentangKamiRef}>
        <AboutUs />
      </Box>
      <Skills />
      <div ref={produkRef}>
        <Services />
      </div>
      <div ref={hasilKaryaRef}>
        <Example />
      </div>
      <Testimonials />
      <div ref={klienKamiRef}>
        <OurClient />
      </div>
      <WhyChooseUs />
      <div ref={kontakRef}>
        <Footer />
      </div>
    </Box>
  );
}

export default App;
