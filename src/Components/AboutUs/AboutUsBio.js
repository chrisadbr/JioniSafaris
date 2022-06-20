import React from "react";
import "./css/AboutUsBio.css";
import { aboutUs_bio } from "../Data";

const AboutUsBio = () => {
  return (
    <div className="aboutUs__bio">
      <div className="aboutUs__bio__header">
        <span className="aboutUs__bio__liner"></span>
        <h1>About Us</h1>
      </div>
      <div className="aboutUs__txtImg">
        <div className="aboutUs__bio__img">
          <div className="aboutUs__bioImg__innerDiv"></div>
        </div>
        <div className="aboutUs__bio__txt__container">
          <div className="aboutUs__bio__txt">
            <div className="aboutUs__bio__txtheader">
              <h2>{aboutUs_bio.header}</h2>
            </div>
            <p>{aboutUs_bio.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBio;
