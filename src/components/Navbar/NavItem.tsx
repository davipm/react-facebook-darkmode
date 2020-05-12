import React, { useContext } from "react";
import styled from "styled-components";

import { NavContext } from "./NavbarContext";

interface INavItem {
  icon: JSX.Element;
  children?: JSX.Element[] | JSX.Element;
}

function NavItem({ icon, children }: INavItem) {
  const { open, handleOpen } = useContext(NavContext);

  return (
    <Wrapper>
      <NavButton onClick={handleOpen}>{icon}</NavButton>
      {open && children}
    </Wrapper>
  );
}

export default NavItem;

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(var(--nav-size) * 0.8);
`;

export const NavButton = styled.button`
  --button-size: calc(var(--nav-size) * 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--button-size);
  height: var(--button-size);
  margin: 2px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.bgColor};
  border: 0;
  border-radius: 50%;
  transition: filter 300ms;
  outline: 0;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  svg {
    fill: ${(props) => props.theme.colors.textColor};
    width: 20px;
    height: 20px;
  }
`;
