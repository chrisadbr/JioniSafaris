import React, { useRef, forwardRef, useImperativeHandle, useState } from "react";
import "./css/ContactForm.css";
import { GiPostOffice } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { MdAlternateEmail } from "react-icons/md";
import Snackbar from "@mui/material/Snackbar";

const ContactForm = forwardRef((props, ref) => {
  const [valid, isValid] = useState(true);
  const form = useRef();
  const formRef = useRef();
  // Handle to contact section form ref
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  }));
  //
  const sendEmail = (e) => {
    e.preventDefault();
    //
    const fullname = document.querySelector(".fullname__input__val").value;
    const email = document.querySelector(".email__input__val").value;
    const message = document.querySelector(".message__input__val").value;
    if (fullname.length === 0 || email.length < 5 ||  message.value === 0){
      isValid(false);
    }
    if (valid){
      emailjs
      .sendForm(
        "service_p09m0vh",
        "template_7jrj2nj",
        form.current,
        "user_3B2e2ZcqLpkP842VpH8Bt",
      )
      .then(
        (result) => {
      
        },
        (error) => {
          console.log(error.text);
        }
      );
      document.querySelector(".fullname__input__val").value = "";
      document.querySelector(".email__input__val").value = "";
      document.querySelector(".message__input__val").value = "";
    }
  };
  //
  // Snacknar code
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className="contact__form" ref={formRef}>
      <div className="contact__form__header">
        <span className="contact__form__liner"></span>
        <h1>Contact Us</h1>
      </div>
      <div className="contact__form__container">
        <div className="contact__form__">
          <form ref={form} onSubmit={sendEmail}>
            <div className="fullname__input">
              <input
                type="text"
                name="fullname"
                autoComplete="off"
                placeholder="Enter your fullname"
                className="fullname__input__val"
              />
            </div>
            <div className="email__input">
              <input
                type="email"
                name="email"
                autoComplete="none"
                placeholder="Enter your email"
                className="email__input__val"
              />
            </div>
            <div className="message__input">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                className="message__input__val"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                className="submit__btn__frm"
                value="SEND MESSAGE"
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "right",
                })}
              />
              {valid && <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Thank you, Message received"
                key={vertical + horizontal}
              />}
              {!valid && <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Please fill all the fields"
                key={vertical + horizontal}/>}
            </div>
          </form>
        </div>
        <div className="contact__other__contacts">
          <div className="contact__mail__info">
            <div className="address__location">
              <GiPostOffice className="address__icon" />
              <h3 className="address__header">Address</h3>
            </div>
            <div>
              <h3 className="address__header__h3">JIONI SAFARIS LIMITED</h3>
            </div>
            <div>
              <p>P.O.Box 1284, Arusha, Tanzania</p>
            </div>
            <div className="contact__mail__info__other">
              <div className="contact__phonenumber">
                <FiPhoneCall className="contact__phonenumber__icon" />{" "}
                <h3 className="contact__phonenumber__header">Call</h3>
              </div>
              <div>
                {" "}
                <p className="contact__phonenumber__para">
                  +255&nbsp;&nbsp;735&nbsp;&nbsp;554&nbsp;&nbsp;664 <br/>
                  +255&nbsp;&nbsp;692&nbsp;&nbsp;511&nbsp;&nbsp;867
                </p>
              </div>
              <div className="contact__email">
                <MdAlternateEmail className="contact__email__icon" />
                <h3 className="contact__email__header">Email</h3>
              </div>
              <p className="contact__email__para">enquiries@jionisafaris.co.tz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactForm;
