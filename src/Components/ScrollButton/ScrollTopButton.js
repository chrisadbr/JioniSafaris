import React, { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import "./css/ScrollTopButton.css";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  //
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setVisible(true);
    } else if (window.pageYOffset <= 1000) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="scroll__top__button">
      {visible && (
        <FiArrowUpCircle className="scroll__top__btn" onClick={scrollToTop} />
      )}
    </div>
  );
};

export default ScrollTopButton;
