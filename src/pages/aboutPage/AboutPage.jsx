import React, { useContext } from "react";
import { About } from "../../components/about/About";
import { Navbar } from "../../components/navbar/Navbar";
import { Toggle } from "../../components/toggle/Toggle";
import { ThemeContext } from "../../context";
export const AboutPage = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#141516" : "",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Navbar />
      <About />
    </div>
  );
};
