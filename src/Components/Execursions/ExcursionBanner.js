import React from "react";
import { Link } from "react-router-dom";
import "./css/ExcursionBanner.css";

const ExcursionBanner = () => {
  return (
    <div className="excursion__banner">
      <div className="excursion__safari__banner">
        <div className="excursion__banner__header">
          <h1>Luxury Safari deals</h1>
        </div>
        <div className="excursion__banner__link">
          <Link to="/" className="excursion__link">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExcursionBanner;
