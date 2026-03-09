import React from "react";
import { Routes, Route, ScrollRestoration } from "react-router-dom";
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
import YearInPhotos from "./components/projects/YearInPhotos.js";
import Vets from "./components/projects/Vets.js";
import PolicyPages from "./components/projects/PolicyPages.js";
import AppleNews from "./components/projects/AppleNews.js";



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
        <Route path="/year-in-photos" element={<YearInPhotos />} />
        <Route path="/vets-series" element={<Vets />} />
        <Route path="/policy-pages" element={<PolicyPages />} />
        <Route path="/pills-interactive" element={<AbortionPills />} />
        <Route path="/oldest-restos" element={<OldestRestos />} />
        <Route path="/shifting-frontiers" element={<ShiftingFrontiers />} />
        <Route path="/dr-interactive" element={<DeathRow />} />
        <Route path="/apple-news" element={<AppleNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;
