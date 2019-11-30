import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
  NavLink
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">Alvaro Castillo</LogoContainer>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/self">MySelf</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
