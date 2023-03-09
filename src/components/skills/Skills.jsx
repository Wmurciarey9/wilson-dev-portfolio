import React from "react";
import "./skills.scss";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export const Skills = () => {
  return (
    <div className="skills">
      <span>SKILLS</span>
      <div className="containerSkills">
        <div className="skill-item">
          <Tippy content="HTML">
            <i class="color-hover icon fa-brands fa-html5"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="CSS">
            <i class="color-hover icon fa-brands fa-css3"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="JAVASCRIPT">
            <i class="color-hover icon fa-brands fa-js"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="NODE.JS">
            <i class="color-hover icon fa-brands fa-node-js"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="REACT">
            <i class="color-hover icon fa-brands fa-react"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="GIT">
            <i class="color-hover icon fa-brands fa-git-alt"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="GITHUB">
            <i class="color-hover icon fa-brands fa-github"></i>
          </Tippy>
        </div>
        <div className="skill-item">
          <Tippy content="SASS">
            <i class="color-hover icon fa-brands fa-sass"></i>
          </Tippy>
        </div>
      </div>
    </div>
  );
};
