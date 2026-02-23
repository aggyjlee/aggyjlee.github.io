import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Topper from "./components/Topper";
import ProjectGrid from "./components/ProjectGrid";

import "@fontsource/source-serif-4";
import About from "./components/About";
import FirstPager from "./FirstPager";
import Illos from "./components/Illos";
import Print from "./components/Print";
import MediaDesign from "./components/MediaDesign";

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<FirstPager />} />
        <Route path='/about' element={<About />}/>
        <Route path='/print' element={<Print />} />
        <Route path='/illos' element={<Illos />} />
        <Route path='/media-design' element={<MediaDesign />} />
      </Routes>
    </main>
  );
}

export default Main;
