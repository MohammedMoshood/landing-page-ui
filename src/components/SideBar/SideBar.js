import React from "react";
import { Icon, CloseIcon, SideBarContainer , SideBarLink , SideBarMenu,SideBarWrapper ,ButtonSignup,Buttondiv } from "./SideBarElements.js";

const SideBar = ({isOpen , toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="home">
            Home
          </SideBarLink>
          <SideBarLink onClick={toggle} to="services">
            Services
          </SideBarLink>
          <SideBarLink onClick={toggle} to="pricing">
            Pricing
          </SideBarLink>
          <SideBarLink onClick={toggle} to="about">
            About
          </SideBarLink>
          <SideBarLink onClick={toggle} to="contact">
            Contact
          </SideBarLink>
        </SideBarMenu>
        <Buttondiv>
          <ButtonSignup to="login">Log in</ButtonSignup>
          <ButtonSignup to="signup">Sign up</ButtonSignup>
        </Buttondiv>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
