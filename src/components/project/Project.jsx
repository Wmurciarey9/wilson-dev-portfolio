import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./project.scss";

export const Project = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="project"
      style={{
        backgroundImage:
          darkMode &&
          'url("https://www.transparenttextures.com/patterns/diagmonds.png")',
        backgroundColor: "black",
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
            <a href={props.liveUrl} target="_blank">
              See Live
            </a>
          </button>
          <button>
            <a href={props.gitHub} target="_blank">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="right">
        <img className="image" src={props.img} alt="" />
      </div>
    </div>
  );
};
