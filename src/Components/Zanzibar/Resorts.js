import React from "react";
import "./css/Resorts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "nuka-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { resortSlides } from "../Data";

const Resorts = () => {
  return (
    <div className="resorts">
      <div className="resorts__crs__container">
        <Carousel
          className="carousel__arrows__patners"
          slidesToShow={1}
          dragging={true}
          swiping={true}
          autoplay={true}
          wrapAround={true}
          transitionMode="scroll"
          renderCenterLeftControls={({ previousSlide }) => (
            <AiOutlineLeft
              className="resort__left__arrow"
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <AiOutlineRight
              className="resort__right__arrow"
              onClick={nextSlide}
            />
          )}
        >
          {resortSlides.map(({ path, header, desc }) => (
            <div className="resort__slide__container">
              <div className="resort__text__container">
                <div className="resort__text__header">
                  <h2>{header}</h2>
                </div>
                <div className="resort__text__desc">
                  <p>{desc}</p>
                </div>
              </div>
              <div className="resort__Img__container">
                <img src={path} alt="" className="resort__Img__item" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Resorts;
