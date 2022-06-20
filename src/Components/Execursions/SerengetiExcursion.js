import React from "react";
import "./css/SerengetiExcursion.css";
import { excursion_data } from "../Data";
import { FiHeart } from "react-icons/fi";
import { handleLike } from "../Helper";

const SerengetiExcursion = () => {
  return (
    <div className="serengeti__excursion">
      <div className="serengeti__excursion__header">
        <span className="serengeti__exercusion__liner"></span>
        <h1>Serengeti</h1>
      </div>
      <div className="serengeti__execursion__txtImg">
        <div className="serengeti__exercusion__Img">
          <div className="serengeti__exercusion__innerDiv"></div>
        </div>
        <div className="serengeti__exercusion__text__container">
          <div className="serengeti__execursion__text">
            <div className="serengeti__text__header">
              <h2>{excursion_data[0].header}</h2>
              <div className="serengeti__exercusion__icon">
                <FiHeart className="serengeti__fiHeart" onClick={handleLike} />
              </div>
            </div>
            <div className="serengeti__exercusion__para">
              <p>{excursion_data[0].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerengetiExcursion;
