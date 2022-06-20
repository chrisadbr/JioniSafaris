import React from "react";
import "./css/ZanzibarBanner.css";

function ZanzibarBanner({ refToPrisonIsland }) {
  const scrolltoPrisonIsland = () => {
    if (refToPrisonIsland.current) {
      refToPrisonIsland.current.scrollIntoView();
    }
  };
  return (
    <div className="zanzibar__banner">
      <div className="zanzinbar__moto__container">
        <h1>The Prison Island</h1>
        <button
          className="spice__island__explore__btn"
          onClick={scrolltoPrisonIsland}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default ZanzibarBanner;
