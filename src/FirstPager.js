import React from 'react'
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Topper from "./components/Topper";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import "@fontsource/source-serif-4";
import About from "./components/About";
import Main from './Main'

const FirstPager = () => 
   (
    <div>
      <Topper />
      <ProjectGrid id={"project"} />
      <Footer />
    </div>
  )

export default FirstPager
