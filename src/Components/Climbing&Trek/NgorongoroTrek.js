import React from "react";
import "./css/NgorongoroTrek.css";
import { climbing_trek } from "../Data";

const NgorongoroTrek = () => {
  return (
    <div className="ngorongoro__trek">
      <div className="ngorongoro__trek__header">
        <span className="ngorongoro__trek__liner"></span>
        <h1>Ngorongoro Trekking</h1>
      </div>
      <div className="ngorongoro__trek__ImgText__container">
        <div className="ngorongoro__trek__text">
          <p>{climbing_trek[2].text}</p>
        </div>
        <div className="ngorongoro__trek__Img">
          <img src={climbing_trek[2].path} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NgorongoroTrek;
