import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Portfolio from "../pages/Portfolio";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Quote from "../pages/Quote";

export default function AppRoutes() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/quote" element={<Quote />} />

    </Routes>
  );
}