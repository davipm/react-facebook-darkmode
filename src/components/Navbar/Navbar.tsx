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
  background-color: var(--bg);
  border-bottom: var(--border);
`;

const NavBarNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  max-height: 100%;
`;
