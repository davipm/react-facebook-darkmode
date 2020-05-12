import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { ReactComponent as PlusIcon } from "./assets/icons/plus.svg";
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg";
import { ReactComponent as MessageIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/caret.svg";

import usePersistedState from "./utils/usePesistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Global from "./styles/Global";

import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Dropdown from "./components/Dropdown";
import NavbarContext from "./components/Navbar/NavbarContext";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <NavbarContext>
        <Navbar>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<MessageIcon />} />
          <NavItem icon={<BellIcon />} />

          <NavItem icon={<CaretIcon />}>
            <Dropdown toggleDark={toggleTheme} />
          </NavItem>
        </Navbar>
      </NavbarContext>
      <Global />
    </ThemeProvider>
  );
}

export default App;
