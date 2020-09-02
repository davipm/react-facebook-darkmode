import styled from "styled-components";

export const InputDarkMode = styled.input`
  display: none;

  &,
  &::before,
  &::after,
  & *,
  & *::before,
  & *::after,
  & + label {
    box-sizing: border-box;
    &::selection {
      background: none;
    }
  }

  & + label {
    display: block;
    outline: 0;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;

    &::before,
    &::after {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }

    &:after {
      left: 0;
    }

    &:before {
      display: none;
    }
  }

  &:checked + label::after {
    left: 50%;
  }

  & + label {
    background: #828282;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;

    &::after {
      border-radius: 50%;
      background: #fff;
      transition: all 0.2s ease;
    }
  }

  &:hover + label {
    will-change: padding;
  }

  &:active {
    box-shadow: inset 0 0 0 2em #e8eae9;
    &::after {
      padding-right: 0.8em;
    }
  }

  &:checked + label {
    background-color: #3578e5;
    &:active {
      box-shadow: none;
      &:after {
        margin-left: -0.8em;
      }
    }
  }
`;
