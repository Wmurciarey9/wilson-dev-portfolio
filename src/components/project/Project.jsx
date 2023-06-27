import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./project.scss";

export const Project = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="project"
      id="project-section"
      style={{
        backgroundImage:
          darkMode &&
          'url("https://www.transparenttextures.com/patterns/inspiration-geometry.png")',
        backgroundColor: darkMode && "black",
      }}
    >
      <div className="left">
        <h2>{props.title}</h2>
        <div className="skillsUsed">
          <span>{props.techOne}</span>
          <span>{props.techTwo}</span>

          <span>{props.techThree}</span>
          <span>{props.techFour}</span>
        </div>
        <p>{props.description}</p>

        <div className="buttons">
          <button className="whiteBtn">
            <a href={props.liveUrl} target="_blank" rel="noreferrer">
              See Live
            </a>
          </button>
          <button>
            <a href={props.gitHub} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="right">
        <img className={props.className} src={props.img} alt="" />
      </div>
    </div>
  );
};
