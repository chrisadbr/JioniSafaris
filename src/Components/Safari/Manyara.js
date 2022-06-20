import React from "react";
import "./css/Manyara.css";
import { safari_data } from "../Data";

const Manyara = () => {
  return (
    <div className="manyara">
      <div className="manyara__header__container">
        <span className="manyara__liner"></span>
        <h1>Lake Manyara</h1>
      </div>
      <div className="manyara__txtImg__container">
        <div className="manyara__txt__container">
          <p>{safari_data[2].desc}</p>
        </div>
        <div className="manyara__Img__container">
          <img src={safari_data[2].path} alt="" className="manyara__Img" />
        </div>
      </div>
    </div>
  );
};

export default Manyara;
