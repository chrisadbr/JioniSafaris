import React from "react";
import "./css/Meru.css";
import { climbing_trek } from "../Data";

const Meru = () => {
  return (
    <div className="meru">
      <div className="meru__header__container">
        <span className="meru__liner"></span>
        <h1>Mount Meru</h1>
      </div>
      <div className="meru__textImg__container">
        <div className="meru__Img__container">
          <img src={climbing_trek[1].path} alt="" className="meru__Img" />
        </div>
        <div className="meru__text__container">
          <p>{climbing_trek[1].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Meru;
