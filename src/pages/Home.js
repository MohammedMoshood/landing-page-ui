import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/infoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data.js";

import Services from "../components/SmallCards/Services";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
      <NavBar toggle={toggle}></NavBar>
      <HeroSection />
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObjThree}></InfoSection>
      <Services></Services>
    </>
  );
}

export default Home;
