import React from "react";
import "./css/ZanzibarCards.css";
import { FiHeart } from "react-icons/fi";
import { zanzibarCards } from "../Data";
import { handleLike } from "../Helper";

const ZanzibarCards = () => {
  return (
    <div className="zanzibar__cards">
      <div className="zanzibar__cards__divider"></div>
      <div className="zanzibar__cards__container">
        {zanzibarCards.map(({ id, path, title, desc }) => (
          <div className="zanzibar__card">
            <div className="zanzibar__image">
              <img src={path} alt={title} className="zanzibarCard__Img" />
            </div>
            <div className="zanzibarCard__title">
              <h4>{title}</h4>
              <span className="zanzibarCard__bookIcon">
                <FiHeart
                  className={`package__icon__${id}`}
                  onClick={handleLike}
                />
              </span>
            </div>
            <div className="zanzibarCard__desc">
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZanzibarCards;
