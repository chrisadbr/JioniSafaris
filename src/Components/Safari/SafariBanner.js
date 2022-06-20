import React from "react";
import "./css/SafariBanner.css";
import Carousel from "nuka-carousel";
import { safari_banner_data } from "../Data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SafariBanner = () => {
  return (
    <div className="safari__banner">
      <div className="safari__carosel__container">
        <Carousel
          className="carousel__arrows__patners"
          slidesToShow={1}
          dragging={true}
          swiping={true}
          autoplay={true}
          wrapAround={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <AiOutlineLeft
              className="safari__left__arrow"
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <AiOutlineRight
              className="safari__right__arrow"
              onClick={nextSlide}
            />
          )}
        >
          {safari_banner_data.map(({ path, title, text }) => (
            <div className="safari__inner__carosel">
              <div className="safari__details__container">
                <h1 className="safari__details__header">{title}</h1>
                <p className="safari__details__para">{text}</p>
              </div>
              <div className="safari__banner__Img">
                <img src={path} alt="" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SafariBanner;
