import React, { useContext } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ThemeContext } from "../../context";
import "./footer.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
      <div className="boxOne">
        <h1>Get in touch! Let's work together</h1>
        <h5>
          Hit me up to discuss your company job openings, the project you have
          in mind or software you want to develop. I'm here to help.
        </h5>

        <button>
          <a href="https://wa.link/jipbe4" target="_blank">
            LET'S TALK
          </a>
        </button>
        <ArrowUpwardOutlinedIcon />
        <p>Direct private message throught whatsapp.</p>
      </div>
      <div className="blackBox">
        <h3> © 2023 Wilson Dev | All rights reserved</h3>
        <div className="icons">
          <div className="iconItem">
            <a href="https://github.com/Wmurciarey9" target="_blank">
              <Tippy content="GitHub">
                <GitHubIcon
                  className="icon"
                  style={{ color: darkMode && "#000" }}
                />
              </Tippy>
            </a>
          </div>
          <div className="iconItem">
            <a href="https://www.linkedin.com/in/wmurciarey" target="_blank">
              <Tippy content="LinkedIn">
                <LinkedInIcon
                  className="icon"
                  style={{ color: darkMode && "#fff" }}
                />
              </Tippy>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
