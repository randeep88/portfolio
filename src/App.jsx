import { useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import ProjectSec from "./components/ProjectSec.jsx";
import { ScrollProgress } from "./components/ScollProgress.jsx";
import AuroraHero from "./components/AuroraHero.jsx";
const App = () => {
  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash === "") {
      window.location.replace("/#home");
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div>
      <ScrollProgress />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AuroraHero />} />
        </Routes>
        <About />
        <Technologies />
        <ProjectSec />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
