import React from "react";
import { Link } from "react-router-dom";
import "./css/AboutUsBanner.css";

const AboutUsBanner = () => {
  return (
    <div className="aboutUs__banner">
      <div className="aboutUs__motto__container">
        <h1>Jioni Safaris Limited</h1>
        <div className="aboutUs__banner__link__container">
          <Link to={"/contact"} className="aboutUs__banner__link">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
