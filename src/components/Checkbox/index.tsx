import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { InputDarkMode } from "./styles";

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
      <label htmlFor="darkmode" />
    </>
  );
}

export default Checkbox;
