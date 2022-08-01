import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: antiquewhite;
  height:80px;
  width: 90%;
  margin-top: -80px;
  margin-left:auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  transform: translate(0, 10px);
  z-index: 10;
  /* border-radius: 50px; */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0 24px;
  max-width: 1920px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #2d353d;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
   margin: auto;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #2d353d;
    padding: 24px 20px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  color: white;
  padding-left: 80px;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  
`;
export const NavLinks = styled(LinkScroll)`
  display: flex;
  
  align-items: center;
  font-family: "M PLUS Rounded 1c", sans-serif;
  text-decoration: none;
  padding: 0 1.2rem;
  font-weight:700;
  font-size: 20px;
  height: 100%;
  cursor: pointer;
  color: #2d353d;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const ButtonGroup = styled.nav`
  display: flex;
  align-items: center;

  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled(LinkRouter)`
  font-size: 20px;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 600;
  padding: 10px 30px;
  margin: 0px 20px;
  border-radius: 50px;
  text-decoration: none;
  border-style: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

`;