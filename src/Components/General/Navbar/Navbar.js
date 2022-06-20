import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../Asset/jioni_safaris_logo.png";
import "./css/Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import {CgMenuRightAlt} from 'react-icons/cg'

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="navbar">
      <div className="nav__mobile__icons" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="closeBtn__Menu" />
        ) : (
          <CgMenuRightAlt className="menuBtn__Btn" />
        )}
      </div>
      <div
        className={
          click ? "nav__items__container active" : "nav__items__container"
        }
      >
        <Link className="logo__container" to="/">
          <img src={Logo} alt="" className="jioni__logo" />
        </Link>
        <div className="nav__links active">
          <nav>
            <NavLink className="links" to="/" onClick={closeMobileMenu}>
              Home
            </NavLink>
            <NavLink className="links" to="/safari" onClick={closeMobileMenu}>
              Safari
            </NavLink>
            <NavLink
              to="/climbing-trek"
              className="links"
              onClick={closeMobileMenu}
            >
              Climbing & Trek
            </NavLink>
            <NavLink to="/zanzibar" className="links" onClick={closeMobileMenu}>
              Zanzibar
            </NavLink>
            <NavLink
              to="/excursions"
              className="links"
              onClick={closeMobileMenu}
            >
              Excursions
            </NavLink>
            <NavLink to="/about-us" className="links" onClick={closeMobileMenu}>
              About Us
            </NavLink>
            <NavLink to="/contact" className="links" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
