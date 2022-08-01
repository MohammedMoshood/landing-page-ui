import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SideBarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2d353d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SideBarWrapper = styled.div`
color:white;
`
export const SideBarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(7,80px);
text-align: center;

@media screen and (max-width:480px) {
    grid-template-rows:repeat(7,60px);
}
`
export const SideBarLink = styled(LinkScroll)`
  display: flex; 
  align-items: center;
  
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;

  &:hover {
    color: #d3a4a3;
    transition: 0.2s ease-in-out;
  }
`;
export const Buttondiv = styled.div`
display: grid;
justify-content: center;

`
export const ButtonSignup = styled(LinkRouter)`
  border-radius: 50px;
  background: #d3a4a3;
  white-space: nowrap;
  padding: 16px 45px;
  color: #010606;
  margin-top: 20px;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: pink;
    color: #010606;
  }
`;