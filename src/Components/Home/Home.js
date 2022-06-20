import React from "react";
import Footer from "../General/Footer/Footer";
import { Navbar } from "../General/Navbar/Navbar";
import Topbar from "../General/TopBar/Topbar";
import Banner from "./Banner";
import BeachTourism from "./BeachTourism";
import Carausell from "./Carausell";
import CulturalTourism from "./CulturalTourism";
import OurPackages from "./OurPackages";
import SafariExpedition from "./SafariExpedition";

function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Banner />
      <CulturalTourism />
      <SafariExpedition />
      <Carausell />
      <BeachTourism />
      <OurPackages />
      <Footer />
    </div>
  );
}

export default Home;
