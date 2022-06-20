import React, { useState } from "react";
import "./css/AboutUsGallery.css";
import Carousel from "nuka-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { about_gallery } from "../Data";

const AboutUsGallery = () => {
  let slideToShow = 2;
  let transition = "scroll3d";
  const [mobile, setMobile] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
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
    <div className="aboutUs__gallery">
      <div className="aboutUs__gallery__header">
        <span className="aboutUs__gallery__liner"></span>
        <h1>Our safari expeditions</h1>
      </div>
      <div className="aboutUs__Img__container__slider">
        <Carousel
          className="carousel__arrows__aboutUs"
          slidesToShow={slideToShow}
          dragging={true}
          swiping={true}
          autoplay={true}
          wrapAround={true}
          transitionMode={transition}
          renderCenterLeftControls={({ previousSlide }) => (
            <AiOutlineLeft
              className="aboutUs__left__arrow"
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <AiOutlineRight
              className="aboutUs__right__arrow"
              onClick={nextSlide}
            />
          )}
        >
          {about_gallery.map(({ id, path }) => (
            <div className="aboutUs__Img__container">
              <img src={path} alt="" className={`aboutUs__Img__${id}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUsGallery;
