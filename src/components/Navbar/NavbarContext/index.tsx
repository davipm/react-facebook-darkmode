import React, { useState, createContext, useContext, ReactNode } from "react";

type NavbarContext = {
  open?: boolean;
  handleOpen?(): void;
};

interface INavbarContext {
  children: ReactNode;
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

export function useNavbarContext() {
  return useContext(NavContext);
}
