import React from "react";
import "./css/ManyaraExcursion.css";
import { excursion_data } from "../Data";
import { FiHeart } from "react-icons/fi";
import { handleLike } from "../Helper";

const ManyaraExcursion = () => {
  return (
    <div className="manyara__excursion">
      <div className="manyara__excursion__header">
        <span className="manyara__excursion__liner"></span>
        <h1>Lake Manyara</h1>
      </div>
      <div className="manyara__excursion__txtImg">
        <div className="manyara__excursion__Img">
          <div className="manyara__excursion__innerDiv"></div>
        </div>
        <div className="manyara__excursion__text__container">
          <div className="manyara__excursion__text">
            <div className="manyara__excursion__header__text">
              <h2>{excursion_data[4].header}</h2>
              <FiHeart className="manyara__fiHeart" onClick={handleLike} />
            </div>
            <div className="manyara__excursion__para">
              <p>{excursion_data[4].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManyaraExcursion;
