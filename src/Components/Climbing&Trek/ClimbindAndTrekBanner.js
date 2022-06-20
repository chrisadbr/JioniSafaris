import React from "react";
import "./css/ClimbingAndTrekBanner.css";
import africa from "../Asset/africa.png";

const ClimbindAndTrekBanner = ({ toKiliRef }) => {
  const scrollToKili = () => {
    if (toKiliRef.current) {
      toKiliRef.current.scrollIntoView();
    }
  };
  return (
    <div className="climbing__trek__banner">
      <div className="climbing__trek__motto__container">
        <h1>The pride of </h1>
        <span className="motto__image">
          <img src={africa} alt="" className="africa__png" />
        </span>
      </div>
      <button className="motto__link" onClick={scrollToKili}>
        Learn More
      </button>
    </div>
  );
};

export default ClimbindAndTrekBanner;
