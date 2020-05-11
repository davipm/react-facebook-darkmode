import React from "react";
import { ReactComponent as PlusIcon } from "./assets/icons/plus.svg";
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg";
import { ReactComponent as MessageIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/caret.svg";

import Global from "./styles/Global";

import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Dropdown from "./components/Dropdown";
import NavbarContext from "./components/Navbar/NavbarContext";

function App() {
  return (
    <>
      <NavbarContext>
        <Navbar>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<MessageIcon />} />
          <NavItem icon={<BellIcon />} />

          <NavItem icon={<CaretIcon />}>
            <Dropdown />
          </NavItem>
        </Navbar>
      </NavbarContext>

      <Global />
    </>
  );
}

export default App;
