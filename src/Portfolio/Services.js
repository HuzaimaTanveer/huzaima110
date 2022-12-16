import React from "react";
import "./Services.scss";
const Services = () => {
  return (
    <div id="services">
      <div className="services ">
        <div className="container">
          <div className="title">
            <h2>Services</h2>
          </div>
          <div className="row mt-xl-5 mt-2">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12 mx-lg-3"
              style={{ paddingTop: "30px" }}
            >
              <h3 className="text-center py-2">What services do i Provide?</h3>
              <div className="description">
                <p>
                  I mainly just do Web Development. I have just been developing
                  web application and web based softwares since, i have started
                  working at <a href="https://wellcreator.com">Wellcreator</a>.
                  But, I do develop applications using React js. Most
                  applications, I have developed are done under working{" "}
                  <a href="https://wellcreator.com">Wellcreator</a>.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-12 ">
              <div className="card">
                <div className="icon">
                  <img src="develpor.png" className="img-fluid" />
                </div>
                <div className="text-center">
                  <h5 className="pt-3">Web Developement</h5>
                  <p className="pt-2">
                    We believe in hand coded web development with fully
                    customization options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
