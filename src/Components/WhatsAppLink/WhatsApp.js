import React, { useState } from "react";
import "./css/WhatsApp.css";
import { ImWhatsapp } from "react-icons/im";

const WhatsApp = () => {
  const min_height = 700;
  const [show, showIcon] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > min_height) {
      showIcon(true);
    } else {
      showIcon(false);
    }
  };
  window.addEventListener("scroll", toggleVisibility);
  const openLink = () => {
    window.open("https://api.whatsapp.com/send?phone=255754446894");
  };
  return (
    <div className="whatsapp">
      {show && <ImWhatsapp className="whatsapp__icon" onClick={openLink} />}
    </div>
  );
};

export default WhatsApp;
