import React, { useState, useRef, useEffect, useContext } from "react";
import { ReactComponent as CogIcon } from "../../assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../assets/icons/bolt.svg";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { NavContext } from "../Navbar/NavbarContext";
import DropdownItem from "./DropdownItem";
import Menu from "./Menu";
import Checkbox from "../Checkbox";

interface IDropdown {
  toggleDark?(): void;
}

function Dropdown({ toggleDark }: IDropdown) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<any>(null);
  const dropdownRef = useRef<any>(null);
  const { handleOpen } = useContext(NavContext);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);

    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  // TODO: get this value dynamic
  function calcHeight(el: HTMLElement) {
    switch (activeMenu) {
      case "main":
        setMenuHeight(245);
        break;
      case "settings":
        setMenuHeight(300);
        break;
      case "items":
        setMenuHeight(300);
        break;
      default:
        setMenuHeight(menuHeight);
        break;
    }
  }

  function closeDropdown(e: any) {
    if (dropdownRef.current?.contains(e.target)) return;
    if (handleOpen) {
      handleOpen();
    }
  }

  return (
    <Wrapper style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
        unmountOnExit
      >
        <Menu>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon height={20} width={20} fill="#fff" />}
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

export default Dropdown;

const Wrapper = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  padding: 1rem;
  transform: translateX(-45%);
  background-color: ${(props) => props.theme.colors.primary};
  border: var(--border);
  border-radius: var(--border-radius);
  transition: height var(--speed) ease;
  overflow: hidden;

  .menu {
    height: 100%;
  }
`;
