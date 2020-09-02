import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Wrapper, NavBarNav } from "./styles";

interface INavbar {
  children: JSX.Element | JSX.Element[];
}

function Navbar({ children }: INavbar) {
  return (
    <Wrapper>
      <Logo />
      <NavBarNav>{children}</NavBarNav>
    </Wrapper>
  );
}

export default Navbar;
