import React from "react";
import "./css/Topbar.css";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="other__contacts">
          <div>
            <BsTelephone />
            <span className="phone__number">
            +255&nbsp;&nbsp;735&nbsp;&nbsp;554&nbsp;&nbsp;664&nbsp;&nbsp;
            +255&nbsp;&nbsp;692&nbsp;&nbsp;511&nbsp;&nbsp;867
            </span>
          </div>
          <div>
            <BsEnvelope />
            <span className="mail__info">enquiries@jionisafaris.co.tz</span>
          </div>
        </div>
        <div className="social__media">
          <div>
            <a href="https://www.facebook.com/jioni.safaris.92">
              <FiFacebook />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/jionisafaris">
              <FiTwitter />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/jioni_safaris/?hl=en">
              <FiInstagram />
            </a>
          </div>
          <div>
            <a href="https://www.tripadvisor.co.uk/Attraction_Review-g297913-d17479382-Reviews-Jioni_Safaris-Arusha_Arusha_Region.html">
              <FaTripadvisor />
            </a>
          </div>
          <div>
            <a href="https://tz.linkedin.com/in/sadiq-almassi-47918b33">
              <FiLinkedin />
            </a>
          </div>
          <div>
            <a href="mailto:mikemajebz23@gmail.com">
              <AiOutlineGooglePlus />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
