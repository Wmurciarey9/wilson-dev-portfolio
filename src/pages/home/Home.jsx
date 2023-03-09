import React, { useContext } from "react";
import { Intro } from "../../components/intro/Intro";
import { Navbar } from "../../components/navbar/Navbar";
import { Projects } from "../../components/projects/Projects";
import { Skills } from "../../components/skills/Skills";
import { ThemeContext } from "../../context";
import { Toggle } from "../../components/toggle/Toggle";

export const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#303030" : "", color: darkMode && "white" }}>
      <Toggle />
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
};
