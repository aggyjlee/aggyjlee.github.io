import React from "react";
import { Routes, Route } from "react-router-dom";
import "@fontsource/source-serif-4";
import About from "./components/About";
import FirstPager from "./FirstPager";
import Illos from "./components/Illos";
import Print from "./components/Print";
import MediaDesign from "./components/MediaDesign";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import AbortionPills from "./components/projects/AbortionPills.js";
import DeathRow from "./components/projects/DeathRow.js";
import OldestRestos from "./components/projects/OldestRestos.js";
import ShiftingFrontiers from "./components/projects/ShiftingFrontiers.js";

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<FirstPager />} />
        <Route path="/about" element={<About />} />
        <Route path="/print" element={<Print />} />
        <Route path="/illos" element={<Illos />} />
        <Route path="/media-design" element={<MediaDesign />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/pills-interactive" element={<AbortionPills />} />
        <Route path="/oldest-restos" element={<OldestRestos />} />
        <Route path="/shifting-frontiers" element={<ShiftingFrontiers />} />
        <Route path="/dr-interactive" element={<DeathRow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;
