import React, { useRef } from "react";
import Topbar from "../General/TopBar/Topbar";
import { Navbar } from "../General/Navbar/Navbar";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Footer from "../General/Footer/Footer";

const Contact = () => {
  const contactRef = useRef();
  return (
    <div>
      <Topbar />
      <Navbar />
      <ContactBanner toContactRef={contactRef} />
      <ContactForm ref={contactRef} />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contact;
