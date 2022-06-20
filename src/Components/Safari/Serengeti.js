import React from "react";
import "./css/Serengeti.css";
import { safari_data } from "../Data";

const Serengeti = () => {
  return (
    <div className="serengeti">
      <div className="serengeti__header__container">
        <span className="serengeti__liner"></span>
        <h1>Serengeti</h1>
      </div>
      <div className="serengeti__txtImg__container">
        <div className="serengeti__text__container">
          <p>{safari_data[0].desc}</p>
        </div>
        <div className="serengeti__Img__container">
          <img src={safari_data[0].path} alt="" className="serengeti__Img" />
        </div>
      </div>
    </div>
  );
};

export default Serengeti;
