import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import "./Skills.scss";
const Skills = () => {
  return (
    <div id="skills">
      <div className="skills ">
        <div className="container">
          <div className="title">
            <h2>Skills</h2>
          </div>
          <div className="pt-4 description">
            <p>
              I am web developer. I believe web design can be more miscellaneous
              and inclining. With a mission to present various possibilities of
              web development, I am pursuing new aspects through experiments and
              thoughts.
            </p>
          </div>
          <div className="progress_bar">
            <div className="row">
              <div className="col-lg-6 col-12  py-2 ">
                <div className="d-flex justify-content-between">
                  <label>HTML</label>
                  <label>100%</label>
                </div>
                <ProgressBar now={100} className="rounded-0" />
              </div>
              <div className="col-lg-6 col-12  py-2">
                <div className="d-flex justify-content-between">
                  <label>CSS</label>
                  <label>90%</label>
                </div>
                <ProgressBar now={90} className="rounded-0" />
              </div>
              <div className="col-lg-6 col-12  py-2">
                <div className="d-flex justify-content-between">
                  <label>Bootstrap</label>
                  <label>95%</label>
                </div>
                <ProgressBar now={95} className="rounded-0" />
              </div>
              <div className="col-lg-6 col-12  py-2">
                <div className="d-flex justify-content-between">
                  <label>Java Script</label>
                  <label>65%</label>
                </div>
                <ProgressBar now={65} className="rounded-0" />
              </div>
              <div className="col-lg-6 col-12  py-2">
                <div className="d-flex justify-content-between">
                  <label>React js</label>
                  <label>80%</label>
                </div>
                <ProgressBar now={80} className="rounded-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
