import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  width: 200px;
  position: fixed;
  top: 100px; /* Adjusted top position to prevent overlap with the website title */
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  z-index: 2;
  text-align: center;
  border-right: 1px solid #ccc;
`;

export const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 1rem;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
`;

export const MainContent = styled.div`
  margin-left: 230px;
  padding: 20px;
  z-index: 1;
`;
