import React from "react";
import "./css/NgorongoroExcursion.css";
import { excursion_data } from "../Data";
import { FiHeart } from "react-icons/fi";
import { handleLike } from "../Helper";

const NgorongoroExcursion = () => {
  return (
    <div className="ngorongoro__excursion">
      <div className="ngorongoro__excursion__header">
        <span className="ngorongoro__excursion__liner"></span>
        <h1>Ngorongoro</h1>
      </div>
      <div className="ngorongoro__excursion__txtImg">
        <div className="ngorongoro__excursionImg__container">
          <div className="ngorongoro__excursion__Div"></div>
        </div>
        <div className="ngorongoro__excursion__text__container">
          <div className="ngorongoro__excursion__text">
            <div className="ngorongoro__excursion__header__container">
              <h2>{excursion_data[2].header}</h2>
              <div className="ngorongoro__exercusion__icon">
                <FiHeart className="ngorongoro__fiHeart" onClick={handleLike} />
              </div>
            </div>
            <div className="ngorongoro__excursion__para">
              <p>{excursion_data[2].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgorongoroExcursion;
