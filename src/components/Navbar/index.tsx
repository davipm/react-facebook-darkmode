import React, { ReactNode } from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Wrapper, NavBarNav } from "./styles";

interface INavbar {
  children: ReactNode;
}

const Navbar = ({ children }: INavbar) => (
  <Wrapper>
    <Logo />
    <NavBarNav>{children}</NavBarNav>
  </Wrapper>
)

export default Navbar;
