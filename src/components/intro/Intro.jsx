import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";
import Arrow from "../images/arrow.gif";
import "./intro.scss";

export const Intro = () => {
  const projectBtn = () => {
    document
      .querySelector("#project-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  // const skillsBtn = () => {
  //   document
  //     .querySelector("#skills-section")
  //     .scrollIntoView({ behavior: "smooth" });
  // };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <h1>
        HI, I'M <span className="coloredText"> WILSON</span>
      </h1>

      <h2>I'M A SOFTWARE DEVELOPER</h2>
      <div className="resumeArrow">
        <img src={Arrow} alt="" />
        <p>Get my CV here!</p>
      </div>
      <div className="miniNavbar">
        {/* <Link onClick={skillsBtn} to="/">
          <span>Skills</span>
        </Link>
        <FiberManualRecordIcon className="icon" /> */}
        <Link onClick={projectBtn} to="/">
          <span style={{ color: darkMode && "#fff" }}>Projects</span>
        </Link>
        <FiberManualRecordIcon className="icon" />
        <Link to={`/about`}>
          <span style={{ color: darkMode && "#fff" }}>About</span>
        </Link>
      </div>
      <div className="buttons">
        <Link to={`/contact`}>
          <button>HIRE ME</button>
        </Link>
      </div>
    </div>
  );
};
