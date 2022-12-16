import React from "react";
import { FaFacebookF, BsListNested } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { SiIndeed } from "react-icons/si";
import "./Sidebar.scss";
import ScrollSpy from "./ScrollSpy";
const Sidebar = ({ isopen }) => {
  return (
    <div id="sidebar">
      <div className="sidebar">
        <div className="profile-imgs text-center">
          <img src="profile.PNG" className="profile-img mt-3" />
        </div>
        <div className="profile-title">
          <h4 className="text-center text-white pt-2">Huzaima Tanveer</h4>
        </div>
        <div className="social-media-icons">
          <div className="facebook icons-bg">
            <FaFacebookF className="icon" />
          </div>
          <div className="whatsApp icons-bg">
            <a href="https://wa.me/923344929435" target="_blank">
              <IoLogoWhatsapp className="icon" />
            </a>
          </div>
          <div className="linkedin icons-bg">
            <a
              href="https://www.linkedin.com/in/huzaima-tanveer/"
              target="_blank"
            >
              <ImLinkedin2 className="icon" />
            </a>
          </div>
          <div className="indeed icons-bg">
            <SiIndeed className="icon" />
          </div>
        </div>
        <div className="navs">
          <ScrollSpy />
        </div>
        <div className="email">
          <p className="text-white text-center">huzaimasmile@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
