import React from "react";
import "./css/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__container">
        <div className="moto__container">
          <h1>
            Plan your per
            <span className="side__text">fect holiday with us</span>
          </h1>
          <Link className="btn__holiday" to="/safari">
            View All Our Tours
          </Link>
        </div>
        <div className="couresel__container"></div>
      </div>
    </div>
  );
};

export default Banner;
