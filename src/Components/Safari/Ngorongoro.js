import React from "react";
import "./css/Ngorongoro.css";
import { safari_data } from "../Data";

const Ngorongoro = () => {
  return (
    <div className="ngorongoro">
      <div className="ngorongoro__header__container">
        <span className="ngorongoro__liner"></span>
        <h1>Ngorongoro</h1>
      </div>
      <div className="ngorongoro__txtImg__container">
        <div className="ngorongoro__Img__container">
          <img src={safari_data[1].path} alt="" className="ngorongoro__Img" />
        </div>
        <div className="ngorongoro__txt__container">
          <p>{safari_data[1].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Ngorongoro;
