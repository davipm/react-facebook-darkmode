import React from "react";
import styled from "styled-components";

import Logo from "../../assets/Logo";

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

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: var(--nav-size);
  background-color: ${(props) => props.theme.colors.primary};
  ${(props) =>
    props.theme.title === "dark"
      ? `border-bottom: var(--border);`
      : `box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);`}
`;

const NavBarNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  max-height: 100%;
`;
