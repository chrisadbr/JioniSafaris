import React from "react";
import "./css/CulturalTourism.css";
import { cultural__data } from "../Data";

const CulturalTourism = () => {
  return (
    <div className="cultural__tourism">
      <div className="cultural__header">
        <span className="cultural__line"></span>
        <h1>Culture Tourism</h1>
      </div>
      <div className="cultural__container">
        <div className="cultural__text">
          <p>
           {cultural__data.text}
          </p>
        </div>
        <div className="cultural__image__container">
          <img src={cultural__data.path} alt="" className="maasai_img" />
        </div>
      </div>
    </div>
  );
};

export default CulturalTourism;
