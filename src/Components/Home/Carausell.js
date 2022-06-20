import React, { useState } from "react";
import "./css/Carausell.css";
import Carousel from "nuka-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { carousel_slides } from "../Data";

function Carausell() {
  let slideToShow = 2;
  let transition = "scroll3d";
  const [mobile, setMobile] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  if (mobile) {
    transition = "scroll";
    slideToShow = 1;
  }
  window.removeEventListener("resize", () => setMobile(false));
  return (
    <div className="carausell">
      <div className="carausel__header">
        <span className="line"></span>
        <h1>Wildlife</h1>
      </div>
      <div className="carausel__container">
        <Carousel
          className="carousel__arrows"
          slidesToShow={slideToShow}
          dragging={true}
          swiping={true}
          autoplay={true}
          wrapAround={true}
          transitionMode={transition}
          renderCenterLeftControls={({ previousSlide }) => (
            <AiOutlineLeft
              className="carausel__left__arrow"
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <AiOutlineRight
              className="carausel__right__arrow"
              onClick={nextSlide}
            />
          )}
        >
          {carousel_slides.map(({ id, path, desc }) => (
            <div className="carausel__Img__container">
              <span className="carausel__desc">{desc}</span>
              <img src={path} alt="" className={`carausel__Img__${id}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carausell;
