import React from "react";
import { useContext } from "react";
import { Themecontext } from "./ThemeContext";

// Step6: Consuming it here

const Box = () => {
  const theme = useContext(Themecontext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        margin: theme.primary.margin,
      }}
    >
      Box
    </div>
  );
};

export default Box;
