import React from "react";

import { NavButton } from "../../Navbar/NavItem/styles";
import { MenuItem } from "./styles";

interface IDropdownItem {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  goToMenu?: string;
  children?: any;
  setActiveMenu?(menu: any): any;
}

function DropdownItem({
  leftIcon,
  rightIcon,
  children,
  goToMenu,
  setActiveMenu,
}: IDropdownItem) {
  return (
    <MenuItem onClick={() => goToMenu && setActiveMenu!(goToMenu)}>
      <NavButton as="span">{leftIcon}</NavButton>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </MenuItem>
  );
}

export default DropdownItem;
