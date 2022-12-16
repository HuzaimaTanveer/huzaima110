import React from "react";
import "./Home.scss";
import TypeWriterEffect from "react-typewriter-effect";

const Home = ({ ToggleSidebar, isopen }) => {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="toggle-button " onClick={ToggleSidebar}>
          <div className="first-line"></div>
          <div
            className={`${isopen ? "second-line active" : "second-line"}`}
          ></div>
        </div>
        <div className="type-writter--effect">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              fontWeight: 500,
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={["Hi, I m Huzaima Tanveer.", "I m Front end Developer"]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
