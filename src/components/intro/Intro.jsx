import React from "react";
import "./intro.scss";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className="intro">
      <h1>
        HI, I'M <span className="coloredText"> WILSON</span>
      </h1>

      <h2>I'M A SOFTWARE DEVELOPER</h2>

      <div className="miniNavbar">
        <span>Skills</span>
        <span>Projects</span>
        <span>About</span>
      </div>
      <div className="buttons">
        <Link to={`/contact`}>
          <button>HIRE ME</button>
        </Link>
      </div>
    </div>
  );
};
