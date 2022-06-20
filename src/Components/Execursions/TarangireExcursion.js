import React from "react";
import "./css/TarangireExcursion.css";
import { excursion_data } from "../Data";
import { FiHeart } from "react-icons/fi";
import { handleLike } from "../Helper";

const TarangireExcursion = () => {
  return (
    <div className="tarangire__excursion">
      <div className="tarangire__excursion__header">
        <span className="tarangire__excursion__liner"></span>
        <h1>Tarangire</h1>
      </div>
      <div className="tarangire__excursion__txtImg">
        <div className="tarangire__excursion__Img">
          <div className="tarangire__excursion__Div"></div>
        </div>
        <div className="tarangire__excursion__text__container">
          <div className="tarangire__excursion__text">
            <div className="tarangire__excursion__txtHeader">
              <h2>{excursion_data[3].header}</h2>
              <div className="tarangire__exercusion__icon">
                <FiHeart className="tarangire__fiHeart" onClick={handleLike} />
              </div>
            </div>
            <div className="tarangire__excursion__para">
              <p>{excursion_data[3].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarangireExcursion;
