import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Topper from "./components/Topper";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import "@fontsource/source-serif-4";
import About from "./components/About";
import FirstPager from "./FirstPager";

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<FirstPager />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </main>
  );
}

export default Main;
