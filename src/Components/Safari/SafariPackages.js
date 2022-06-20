import React from "react";
import "./css/SafariPackages.css";
import { safari_data } from "../Data";
import { FiHeart } from "react-icons/fi";
import { handleLike } from "../Helper";

const SafariPackages = () => {
  return (
    <div className="safari__packages">
      <div className="safari__packages__border"></div>
      <div className="safari__packages__container">
        {safari_data.map(({ id, title, package_desc }) => (
          <div className={`safari__package__${id}`}>
            <div className="safari__package__icon">
              <FiHeart
                className={`package__icon__${id}`}
                onClick={handleLike}
              />
            </div>
            <div className="safari__package__desc__container">
              <div className="safari__package__header">
                <h2>{title}</h2>
              </div>
              <div className="safari__package__desc">
                <p>{package_desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafariPackages;
