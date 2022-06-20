import React from "react";
import "./css/ZanzibarExcursion.css";
import { excursion_data } from "../Data";
import { FiHeart } from "react-icons/fi";
import { handleLike } from "../Helper";

const ZanzibarExcursion = () => {
  return (
    <div className="zanzibar__excursion">
      <div className="zanzibar__excursion__header">
        <span className="zanzibar__exercusion__liner"></span>
        <h1>Zanzibar</h1>
      </div>
      <div className="zanzibar__execursion__txtImg">
        <div className="zanzibar__exercusion__Img">
          <div className="zanzibar__exercusion__innerDiv"></div>
        </div>
        <div className="zanzibar__exercusion__text__container">
          <div className="zanzibar__execursion__text">
            <div className="zanzibar__text__header">
              <h2>{excursion_data[1].header}</h2>
              <div className="zanzibar__exercusion__icon">
                <FiHeart className="zanzibar__fiHeart" onClick={handleLike} />
              </div>
            </div>
            <div className="zanzibar__exercusion__para">
              <p>{excursion_data[1].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZanzibarExcursion;
