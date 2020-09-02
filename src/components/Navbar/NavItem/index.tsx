import React from "react";

import { useNavbarContext } from "../NavbarContext";
import { Wrapper, NavButton } from "./styles";

interface INavItem {
  icon: JSX.Element;
  children?: JSX.Element[] | JSX.Element;
}

function NavItem({ icon, children }: INavItem) {
  const { open, handleOpen } = useNavbarContext();

  return (
    <Wrapper>
      <NavButton onClick={handleOpen}>{icon}</NavButton>
      {open && children}
    </Wrapper>
  );
}

export default NavItem;
