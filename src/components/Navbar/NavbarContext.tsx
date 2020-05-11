import React, { useState, createContext } from "react";

type NavbarContext = {
  open?: boolean;
  handleOpen?(event?: any): any;
};

interface INavbarContext {
  children: any;
}

export const NavContext = createContext<NavbarContext>({});

function NavbarContext({ children }: INavbarContext) {
  const [open, setPen] = useState(false);

  function handleOpen() {
    setPen(!open);
  }

  return (
    <NavContext.Provider value={{ open, handleOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export default NavbarContext;
