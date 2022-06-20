import React from "react";
import { Navbar } from "../General/Navbar/Navbar";
import Topbar from "../General/TopBar/Topbar";
import Manyara from "./Manyara";
import Ngorongoro from "./Ngorongoro";
import SafariBanner from "./SafariBanner";
import SafariPackages from "./SafariPackages";
import Serengeti from "./Serengeti";
import Tarangire from "./Tarangire";
import Footer from "../General/Footer/Footer";

const Safari = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SafariBanner />
      <Serengeti />
      <Ngorongoro />
      <Manyara />
      <Tarangire />
      <SafariPackages />
      <Footer />
    </div>
  );
};

export default Safari;
