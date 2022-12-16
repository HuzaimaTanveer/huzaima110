import React from "react";
import { Container } from "react-bootstrap";
import "./Resume.scss";
const Resume = () => {
  return (
    <div id="resume">
      <div className="resume pt-5">
        <div className="container">
          <div className="title ">
            <h2>Resume</h2>
          </div>
          <div className="description">
            <p className="pt-4 ">
            I'm a Front end developer. I am currently working with Technologies such as ReactJS, HTML/CSS & Bootstrap 4&5.
              I am very amorous and passionate with my work. I have attained the
              learning and abilities that is required to make your plan, a
              sucess. I am proficient in developing creating user interfaces,
              writing and testing codes, troubleshooting simple/complex issues
              and implementing new features based on user feedback.
            </p>
          </div>
          <Container>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 education">
                <h3 className="heading pb-2">Education</h3>
                <div className="d-flex">
                  <div className="resume-item"></div>
                  <div className="education-information ">
                    <div className="mx-3 py-3">
                      <ul className="ms-3">
                        <li className="pt-3">
                          <h5 className="mb-1">Intermediate</h5>
                          Al-Noor Group of Colleges
                        </li>
                        <li className="pt-3">
                          <h5 className="mb-1 institute">
                            Short Course Front end Developer
                          </h5>
                          Arfa Karim Tower (Pny)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 experience">
                <h3 className="heading pb-2">Experience</h3>
                <div className="d-flex">
                  <div className="resume-item"></div>
                  <div className="experience-information ">
                    <div className="mx-3 py-3">
                      <h5>
                        <a href="https://wellcreator.com/">Wellcreater</a>
                      </h5>
                      <ul className="ms-3">
                        <li className="pt-2">6 month internship complete</li>
                        <li className="pt-2">2 month job experience</li>
                        <li className="pt-2">
                          Working on React.js as a Front-end develpor with
                          Material UI , Bootstrap and others.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Resume;
