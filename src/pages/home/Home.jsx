import React, { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Intro } from "../../components/intro/Intro";
import { Navbar } from "../../components/navbar/Navbar";
import { Projects } from "../../components/projects/Projects";
import { Skills } from "../../components/skills/Skills";
import { Toggle } from "../../components/toggle/Toggle";
import { ThemeContext } from "../../context";

export const Home = () => {
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
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};
