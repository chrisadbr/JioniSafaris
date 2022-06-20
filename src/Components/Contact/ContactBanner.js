import React from "react";
import "./css/ContactBanner.css";

const ContactBanner = ({ toContactRef }) => {
  const toContactComp = () => {
    if (toContactRef.current) {
      toContactRef.current.scrollIntoView();
    }
  };
  return (
    <div className="contact__banner">
      <div className="contact__banner__motto__container">
        <div className="contact__banner__moto">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact__banner__link">
          <button
            to={"#"}
            className="contact__banner__btn"
            onClick={toContactComp}
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
