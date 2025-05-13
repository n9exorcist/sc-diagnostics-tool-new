import React, { createContext } from "react";
import { theme } from "./theme";

type ThemecontextProviderProps = {
  children: React.ReactNode;
};
// By specifying children as React.ReactNode, you allow the component to accept any renderable content,
// providing flexibility in what can be passed as children

// Creating context from here

export const Themecontext = createContext(theme);

export const ThemecontextProvider = ({
  children,
}: ThemecontextProviderProps) => {
  return (
    <Themecontext.Provider value={theme}>{children}</Themecontext.Provider>
  );
};
