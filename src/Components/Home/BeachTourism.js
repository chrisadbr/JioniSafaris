import React from "react";
import "./css/BeachTourism.css";
import { beach_tourism_data } from "../Data";

const BeachTourism = () => {
  return (
    <div className="beach__tourism">
      <div className="beach__tourism__container">
        <div className="beach__header__container">
          <span className="beach__header__line"></span>
          <h1>Beach Tourism</h1>
        </div>
        <div className="beach__text__image__container">
          <div className="beach__text__container">
            <p>
             {beach_tourism_data.text}
            </p>
          </div>
          <div className="beach__img__container">
            <div>
              <img src={beach_tourism_data.path} alt="" className="beach__resort__img" />
            </div>
            <div className="beach__img__footnote">Lazy Laguna Island Lodge</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachTourism;
