import React, { useImperativeHandle, useRef, forwardRef } from "react";
import "./css/Kilimanjaro.css";
import { climbing_trek } from "../Data";

const Kilimanjaro = forwardRef((props, ref) => {
  const kiliRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      kiliRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));
  return (
    <div className="kilimanjaro" ref={kiliRef}>
      <div className="kilimanjaro__header__container">
        <span className="kilimanjaro__liner"></span>
        <h1 className="kilimanjaro__h1">The Pride of Africa</h1>
      </div>
      <div className="kilimanjaro__img__text__container">
        <div className="kilimanjaro__text__container">
          <p>{climbing_trek[0].text}</p>
        </div>
        <div className="kilimanjaro__img__container">
          <img
            src={climbing_trek[0].path}
            alt=""
            className="kilimanjaro__img"
          />
        </div>
      </div>
    </div>
  );
});

export default Kilimanjaro;
