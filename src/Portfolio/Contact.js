import React from "react";
import "./Contact.scss";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div id="contact">
      <div className="contact ">
        <div className="container">
          <div className="title ">
            <h2>Contact </h2>
          </div>
          <div className="contact-detail">
            <div className="row ">
              <div className="col-xl-5 col-lg-5 col-md-6 col-12 mx-lg-5 ">
                <h3 className="text-center">Get in touch with me!</h3>
                <p className="text-center">
                  Want a quote or wanna discuss a project? Or better wanna steal
                  me from my current employer? Email me
                  <h6 className="text-center">huzaimasmile@gmail.com</h6>
                </p>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-12 mt-4">
                <div className="d-flex gap-5 justify-content-center">
                  <div className="icon-whatsApp">
                    <a href="https://wa.me/923344929435" target="_blank">
                      <ImWhatsapp className="icon" />
                    </a>
                  </div>
                  <div className="icon-email">
                    <MdEmail className="icon" />
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
export default Contact;
