import React, { useState } from "react";
import "./css/OurPackages.css";
import { packages } from "../Data";
import Carousel from "nuka-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";

const OurPackages = () => {
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    //
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
    return width;
  }
  let SlideToShowNumber = 0;
  const width = useWindowWidth();
  if (width < 768) {
    SlideToShowNumber = 1;
  } else {
    SlideToShowNumber = 2;
  }

  return (
    <div className="our__packages">
      <div className="ourPackages__container">
        <div className="header__container">
          <span className="header__line"></span>
          <h1>Our Packages</h1>
        </div>
        <div className="package__cards__container">
          <Carousel
            className="carousel__arrows__patners"
            slidesToShow={SlideToShowNumber}
            dragging={true}
            swiping={true}
            autoplay={true}
            wrapAround={true}
            transitionMode="scroll"
            renderCenterLeftControls={({ previousSlide }) => (
              <AiOutlineLeft
                className="pt__left__arrow"
                onClick={previousSlide}
              />
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <AiOutlineRight
                className="pt__right__arrow"
                onClick={nextSlide}
              />
            )}
          >
            {packages.map(({ id, header, desc, image }) => (
              <div className={`${"package__container__" + id}`}>
                <div className="package__image__container">
                  <img src={image} alt={header} className={`${"img__" + id}`} />
                </div>
                <div className="package__header">{header}</div>
                <div className="package__desc">
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurPackages;
