import React, { ReactNode } from "react";

import { useNavbarContext } from "../NavbarContext";
import { Wrapper, NavButton } from "./styles";

interface INavItem {
  icon: JSX.Element;
  children?: ReactNode;
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
