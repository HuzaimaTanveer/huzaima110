import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Portfolio.scss";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";
import ScrollTop from "./ScrollTop";
import Resume from "./Resume";
import Sidebar1 from "./Sidebar1";
const Portfolio = () => {
  const [isopen, setisOpen] = useState(false);

  const ToggleSidebar = () => {
    isopen === true ? setisOpen(false) : setisOpen(true);
  };
  return (
    <>
      <div id="portfolio">
        <div className="portfolio">
          <div className="sidebar">
            <Sidebar1 isopen={isopen} ToggleSidebar={ToggleSidebar} />
            <Sidebar />
          </div>
          <div id="/">
            <Home ToggleSidebar={ToggleSidebar} isopen={isopen} />
          </div>
          <div className="multi-pages--data">
            <div id="about">
              <About />
            </div>

            <div id="resume">
              <Resume />
            </div>
            <div className="skills">
              <Skills />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="contact">
              <Contact />
            </div>

            <div>
              <ScrollTop />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

{
  /*
  
  <div id="about">
              <About />
            </div>
  <div>
              <Skills />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="contact">
              <Contact />
            </div> */
}
