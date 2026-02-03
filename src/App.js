import logo from "./logo.svg";

import "./App.css";
import NavBar from "./components/NavBar";
import Topper from "./components/Topper";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import "@fontsource/source-serif-4";
import About from "./components/About";
import Main from './Main'

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
      {/* <Topper />
      <ProjectGrid id={"project"} />
         <About />
      <Footer /> */}
    </div>
  );
}

export default App;
