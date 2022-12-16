import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./About.scss";

const About = () => {
  return (
    <div id="detail">
      <div className="detail">
        <div className="container">
          <div className="title">
            <h2>About</h2>
          </div>
          <div className="description py-4 col-lg-11 col-12">
            <p>
              Let's start with the name, My name is
              <strong> Huzaima Tanveer</strong>. I have been coding since the
              2021 fall as a hobby, but that change in the of 2022 when i was
              approched by <a href="https://wellcreator.com">Wellcreator</a> to
              join them as a junior software developer. After joining them, they
              helped me sharpen my skills-set and much more. Now currently, I'm
              helping them design and develop unique and top-notch softwares.
            </p>
          </div>
          <div className="person-information ">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="bg-img"></div>
              </div>
              <div className="col-lg-8 col-md-8 col-12  pt-5">
                <h2 className="pb-2">Front end Developer</h2>{" "}
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6   py-2 d-flex gap-1 ">
                    <span className="arrow-icon">
                      <IoIosArrowForward />
                    </span>
                    <strong>Birthday:</strong> <span>3 Jan 2003</span>
                  </div>

                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6   py-2 d-flex gap-1">
                    <span className="arrow-icon">
                      <IoIosArrowForward />
                    </span>
                    <strong>Age:</strong> <span>20</span>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6   py-2 d-flex gap-1 ">
                    <span className="arrow-icon">
                      <IoIosArrowForward />
                    </span>
                    <strong>Education:</strong>
                    <span className="text-nowrap">Fsc Pre-Engineering</span>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6   py-2 d-flex gap-1">
                    <span className="arrow-icon">
                      <IoIosArrowForward />
                    </span>
                    <strong>Phone:</strong>
                    <span>
                      <a href="tel:03344929435">03344929435</a>
                    </span>
                  </div>

                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6   py-2 d-flex gap-1">
                    <span className="arrow-icon">
                      <IoIosArrowForward />
                    </span>
                    <strong>City:</strong> <span>Lahore</span>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6   py-2 d-flex gap-1">
                    <span className="arrow-icon">
                      <IoIosArrowForward />
                    </span>
                    <strong>Nationality:</strong> <span>Pakistan</span>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6   py-2 d-flex gap-1">
                    <span className="arrow-icon">
                      <IoIosArrowForward />
                    </span>
                    <strong>Gender:</strong> <span>Male</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
