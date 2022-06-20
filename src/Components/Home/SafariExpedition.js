import React from "react";
import "./css/SafariExpedition.css";
import { safari_expedition } from "../Data";

const SafariExpedition = () => {
  return (
    <div className="safari__expedition">
      <div className="safariExpedition__header">
        <span className="safariExpedition__liner"></span>
        <h1>Safari Expedition</h1>
      </div>
      <div className="safariExpedition__txtImg">
        <div className="safariExpedition__Img__container">
          <img
            src={safari_expedition.path}
            alt=""
            className="safariExpedition__Img"
          />
        </div>
        <div className="safariExpedition__text">
          <p>{safari_expedition.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SafariExpedition;
