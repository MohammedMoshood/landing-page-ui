import React , {useState} from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  Button,
  ButtonGroup
} from "./NavbarElements";

const NavBar = ({toggle}) => {
    const [isHovering, setIsHovering] = useState(false);
     const handleMouseEnter = () => {
       setIsHovering(true);
     };

     const handleMouseLeave = () => {
       setIsHovering(false);
     };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <h1>XupLi</h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing">Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign up</NavLinks>
            </NavItem>
          </NavMenu>
          <ButtonGroup>
            <Button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              to="/login"
              style={{
                color: "white",
                backgroundColor: isHovering ? "blue" : "#2D353D",
              }}
            >
              Log in
            </Button>
          </ButtonGroup>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
