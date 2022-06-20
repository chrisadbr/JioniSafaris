import React from "react";
import Topbar from "../General/TopBar/Topbar";
import { Navbar } from "../General/Navbar/Navbar";
import Footer from "../General/Footer/Footer";
import ExcursionBanner from "./ExcursionBanner";
import SerengetiExcursion from "./SerengetiExcursion";
import ZanzibarExcursion from "./ZanzibarExcursion";
import NgorongoroExcursion from "./NgorongoroExcursion";
import TarangireExcursion from "./TarangireExcursion";
import ManyaraExcursion from "./ManyaraExcursion";

const Excursion = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <ExcursionBanner />
      <SerengetiExcursion />
      <ZanzibarExcursion />
      <NgorongoroExcursion />
      <TarangireExcursion />
      <ManyaraExcursion />
      <Footer />
    </div>
  );
};

export default Excursion;
