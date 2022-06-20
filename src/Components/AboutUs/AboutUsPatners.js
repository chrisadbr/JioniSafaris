import React from "react";
import "./css/AboutUsPatners.css";
import { patner_logos } from "../Data";

const AboutUsPatners = () => {
  return (
    <div className="aboutUs__patners">
      <div className="aboutUs__logoContainer">
        {patner_logos.map(({ id, path }) => (
          <div className={`logo__${id}`}>
            <img src={path} alt={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPatners;
