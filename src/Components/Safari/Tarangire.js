import React from "react";
import "./css/Tarangire.css";
import { safari_data } from "../Data";

const Tarangire = () => {
  return (
    <div className="tarangire">
      <div className="tarangire__header__container">
        <span className="tarangire__liner"></span>
        <h1>Tarangire</h1>
      </div>
      <div className="tarangire__txtImg__container">
        <div className="tarangire__text__container">
          <p>{safari_data[3].desc}</p>
        </div>
        <div className="tarangire__Img__container">
          <img src={safari_data[3].path} alt="" className="tarangire__Img" />
        </div>
      </div>
    </div>
  );
};

export default Tarangire;
