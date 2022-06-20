import React from "react";
import "./css/Stonetown.css";
import { stonetown } from "../Data";

const Stonetown = () => {
  return (
    <div className="stonetown">
      <div className="stonetown__header">
        <span className="stonetown__liner"></span>
        <h1>Stown Town</h1>
      </div>
      <div className="stonetown__textImg__container">
        <div className="stonetown__text">
          <p>{stonetown.text}</p>
        </div>
        <div className="stonetown__Img__container">
          <img src={stonetown.path} alt="" className="stonetown__Img" />
        </div>
      </div>
    </div>
  );
};

export default Stonetown;
