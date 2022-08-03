import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/infoSection";
import { homeObjOne, homeObjTwo , homeObjThree } from "../components/InfoSection/Data.js";
import SmallCards from "../components/SmallCards/SmallCards";
import { smallCard1, smallCard2,smallCard3 } from "../components/SmallCards/Data";
import { InfoRow } from "../components/SmallCards/SmallCardElements";


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
      <InfoRow>
        <SmallCards {...smallCard1}></SmallCards>
        <SmallCards {...smallCard2}></SmallCards>
        <SmallCards {...smallCard3}></SmallCards>
      </InfoRow>
    </>
  );
}

export default Home;
