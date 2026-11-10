import { useEffect } from "react";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Hækkeklipning from "./pages/hækkeklipning";
import Beskaeringskunst from "./pages/beskæringkunst";
import BeskaeringFaeldning from "./pages/beskaeringFaeldning";
import Tagrenderensning from "./pages/tagrenderensning";
import Graesslaaning from "./pages/græsslåning";
import Lugning from "./pages/lugning";
import Gallery from "./pages/gallery";

// Start every new page at the top instead of keeping the old scroll position
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/hækkeklipning" element={<Hækkeklipning />} />
        <Route path="/services/beskæringskunst" element={<Beskaeringskunst />} />
        <Route path="/services/beskaering-faeldning" element={<BeskaeringFaeldning />} />
        <Route path="/services/tagrenderensning" element={<Tagrenderensning />} />
        <Route path="/services/græsslåning" element={<Graesslaaning />} />
        <Route path="/services/lugning" element={<Lugning />} />
      </Routes>
    </HashRouter>
  );
}