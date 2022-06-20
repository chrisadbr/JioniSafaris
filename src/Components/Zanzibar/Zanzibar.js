import React, { useRef } from "react";
import { Navbar } from "../General/Navbar/Navbar";
import Topbar from "../General/TopBar/Topbar";
import PrisonIsland from "./PrisonIsland";
import Resorts from "./Resorts";
import Stonetown from "./Stonetown";
import ZanzibarBanner from "./ZanzibarBanner";
import ZanzibarCards from "./ZanzibarCards";
import Footer from "../General/Footer/Footer";

function Zanzibar() {
  const prisonInslandRef = useRef(null);
  return (
    <div>
      <Topbar />
      <Navbar />
      <ZanzibarBanner refToPrisonIsland={prisonInslandRef} />
      <Stonetown />
      <PrisonIsland ref={prisonInslandRef} />
      <Resorts />
      <ZanzibarCards />
      <Footer />
    </div>
  );
}

export default Zanzibar;
