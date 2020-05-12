import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

interface ICheckbox {
  toggleDark?(): void;
}

function Checkbox({ toggleDark }: ICheckbox) {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <InputDarkMode
        type="checkbox"
        id="darkmode"
        onChange={toggleDark}
        checked={title === "dark"}
      />
      <LabelDarkMode htmlFor="darkmode" />
    </>
  );
}

export default Checkbox;

const LabelDarkMode = styled.label``;

const InputDarkMode = styled.input`
  display: none;

  &,
  &::before,
  &::after,
  & *,
  & *::before,
  & *::after,
  & + ${LabelDarkMode} {
    box-sizing: border-box;
    &::selection {
      background: none;
    }
  }

  & + ${LabelDarkMode} {
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

  &:checked + ${LabelDarkMode}::after {
    left: 50%;
  }

  & + ${LabelDarkMode} {
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

  &:hover + ${LabelDarkMode} {
    will-change: padding;
  }

  &:active {
    box-shadow: inset 0 0 0 2em #e8eae9;
    &::after {
      padding-right: 0.8em;
    }
  }

  &:checked + ${LabelDarkMode} {
    background-color: #3578e5;
    &:active {
      box-shadow: none;
      &:after {
        margin-left: -0.8em;
      }
    }
  }
`;
