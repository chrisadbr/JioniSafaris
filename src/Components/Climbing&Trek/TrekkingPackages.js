import React from "react";
import "./css/TrekkingPackages.css";
import { climbing_trek } from "../Data";
import { FiHeart } from "react-icons/fi";
import { handleLike } from "../Helper";

const TrekkingPackages = () => {
  return (
    <div className="trekking__packages">
      <div className="trekking__packages__container">
        {climbing_trek.map(({ id, title, package_path, trekking_package }) => (
          <div className="trekking__container">
            <div className="trekking__bcg">
              <img src={package_path} alt="" />
            </div>
            <div className={`trekking__${id}`}>
              <div className="trekking__title">
                <h2>{title}</h2>
              </div>
              <div className="trekking__package">
                <h4>{trekking_package}</h4>
                <FiHeart
                  className={`heart__icon__${id}`}
                  onClick={handleLike}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekkingPackages;
