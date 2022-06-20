import React, { useRef } from "react";
import { Navbar } from "../General/Navbar/Navbar";
import Topbar from "../General/TopBar/Topbar";
import ClimbindAndTrekBanner from "./ClimbindAndTrekBanner";
import Kilimanjaro from "./Kilimanjaro";
import Meru from "./Meru";
import NgorongoroTrek from "./NgorongoroTrek";
import TrekkingPackages from "./TrekkingPackages";
import Footer from "../General/Footer/Footer";

const ClimbingAndTrek = () => {
  const kiliRef = useRef();
  return (
    <div>
      <Topbar />
      <Navbar />
      <ClimbindAndTrekBanner toKiliRef={kiliRef} />
      <Kilimanjaro ref={kiliRef} />
      <Meru />
      <TrekkingPackages />
      <NgorongoroTrek />
      <Footer />
    </div>
  );
};

export default ClimbingAndTrek;
