import styled from "styled-components";

export const Wrapper = styled.nav`
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

export const NavBarNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  max-height: 100%;
`;
