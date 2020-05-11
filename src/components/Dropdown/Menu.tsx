import React from "react";
import styled from "styled-components";

interface IMenu {
  children?: JSX.Element[];
}

function Menu({ children }: IMenu) {
  return <Wrapper>{children}</Wrapper>;
}

export default Menu;

const Wrapper = styled.div`
  height: 100%;
`;
