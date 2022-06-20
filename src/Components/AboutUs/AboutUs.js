import React from "react";
import { Navbar } from "../General/Navbar/Navbar";
import Topbar from "../General/TopBar/Topbar";
import AboutUsBanner from "./AboutUsBanner";
import AboutUsBio from "./AboutUsBio";
import AboutUsGallery from "./AboutUsGallery";
import AboutUsPatners from "./AboutUsPatners";
import Footer from "../General/Footer/Footer";
import AboutUsReview from "./AboutUsReview";

const AboutUs = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <AboutUsBanner />
      <AboutUsBio />
      <AboutUsReview />
      <AboutUsGallery />
      <AboutUsPatners />
      <Footer />
    </div>
  );
};

export default AboutUs;
