import React, { useImperativeHandle, useRef, forwardRef } from "react";
import "./css/PrisonIsland.css";
import { prisonisland } from "../Data";

const PrisonIsland = forwardRef((props, ref) => {
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));
  return (
    <div className="prisonisland" ref={compRef}>
      <div className="prisonisland__header">
        <span className="prisonisland__liner"></span>
        <h1>Prison Island</h1>
      </div>
      <div className="prisonisland__textImg">
        <div className="prisonisland__text">
          <p>{prisonisland.text}</p>
        </div>
        <div className="prisonisland__Img__container">
          <img src={prisonisland.path} alt="" className="prisonisland__Img" />
        </div>
      </div>
    </div>
  );
});

export default PrisonIsland;
