import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as CogIcon } from "../../assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../assets/icons/bolt.svg";
import { CSSTransition } from "react-transition-group";

import DropdownItem from "./DropdownItem";
import Checkbox from "../Checkbox";
import { useNavbarContext } from "../Navbar/NavbarContext";
import { Menu } from "./Menu";

import { Wrapper } from "./styles";

interface Props {
  toggleDark?(): void;
}

export default function Dropdown({ toggleDark }: Props) {
  const [activeMenu, setActiveMenu] = useState<string>("main");
  const [menuHeight, setMenuHeight] = useState<number | null>(null);
  const dropdownRef = useRef<any>(null);
  const { handleOpen } = useNavbarContext();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function closeDropdown(e: { target: React.ReactNode }) {
    if (dropdownRef.current?.contains(e.target)) return;
    if (handleOpen) handleOpen();
  }

  return (
    <Wrapper menuHeight={menuHeight} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon height={20} width={20} />}
            goToMenu="settings"
            setActiveMenu={(event) => setActiveMenu(event)}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            rightIcon={<ChevronIcon height={20} width={20} fill="#fff" />}
            goToMenu="items"
            setActiveMenu={(event) => setActiveMenu(event)}
          >
            Items
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<Checkbox toggleDark={toggleDark} />}
          >
            Dark Mode
          </DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem
            goToMenu="main"
            setActiveMenu={(event) => setActiveMenu(event)}
            leftIcon={<ArrowIcon />}
          >
            <h2>Menus</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Menu 1</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Menu 2</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Menu 3</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Menu 4</DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "items"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem
            goToMenu="main"
            setActiveMenu={(event) => setActiveMenu(event)}
            leftIcon={<ArrowIcon />}
          >
            <h2>Items</h2>
          </DropdownItem>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
          <DropdownItem>Item 4</DropdownItem>
        </Menu>
      </CSSTransition>
    </Wrapper>
  );
}
