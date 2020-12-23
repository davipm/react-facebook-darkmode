import styled from "styled-components/macro";

interface Props {
  menuHeight?: number | null
}

export const Wrapper = styled.div<Props>`
  position: absolute;
  top: 58px;
  width: 300px;
  height: ${({ menuHeight }) => menuHeight && menuHeight}px;
  padding: 1rem;
  transform: translateX(-45%);
  background-color: ${(props) => props.theme.colors.primary};
  border: var(--border);
  border-radius: var(--border-radius);
  transition: height var(--speed) ease;
  overflow: hidden;
`;
