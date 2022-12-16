import React from "react";
import ScrollspyNav from "react-scrollspy-nav";
import { AiOutlineHome, AiOutlineFile, AiOutlineSetting } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import "./Sidebar.scss";
const ScrollSpy = ({ToggleSidebar}) => {
  return (
    <div>
      <ScrollspyNav
        scrollTargetIds={["about", "resume", "services", "contact"]}
        activeNavClass="is-active"
        scrollDuration="100"
      >
        <ul>
          <li onClick={ToggleSidebar}>
            <a href="/" className="d-flex gap-3" >
              <div>
                <AiOutlineHome className="nav-icon" />
              </div>
              <span> Home</span>
            </a>
          </li>
          <li onClick={ToggleSidebar}>
            <a href="#about" className="d-flex gap-3" >
              <div>
                <BiUser className="nav-icon" />
              </div>
              <span> About</span>
            </a>
          </li>
          <li onClick={ToggleSidebar}>
            <a href="#resume" className="d-flex gap-3" >
              <div>
                <AiOutlineFile className="nav-icon" />
              </div>
              <span>Resume</span>
            </a>
          </li>
          <li onClick={ToggleSidebar}>
            <a href="#services" className="d-flex gap-3" >
              <div>
                <AiOutlineSetting className="nav-icon" />
              </div>
              <span>Services</span>
            </a>
          </li>
          <li onClick={ToggleSidebar}>
            <a href="#contact" className="d-flex gap-3" >
              <div>
                <HiPhone className="nav-icon" />
              </div>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </ScrollspyNav>
    </div>
  );
};

export default ScrollSpy;
