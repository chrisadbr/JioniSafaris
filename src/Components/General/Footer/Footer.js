import React from "react";
import "./css/Footer.css";
import Logo from "../../Asset/jioni_safaris_logo.png";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo__container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer__text__container">
          &copy; 2019 - {year} All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
