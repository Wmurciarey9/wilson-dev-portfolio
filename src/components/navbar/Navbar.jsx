import "./navbar.scss";

import Logo from "../../images/brandTransparent.png";
import WhiteLogo from "../../images/whiteTransparent.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import resume from "./resume.pdf";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={isScrolled ? "navbar scrolled" : "navbar"}
      style={{ backgroundColor: darkMode ? "#303030" : "", color: darkMode && "whitesmoke" }}
    >
      <div className="container">
        <div className="left">
          <Link to={`/`}>
            <Tippy content="Home">
              <img src={Logo} alt="" style={{ content: darkMode && 'url("' + WhiteLogo + '")' }} />
            </Tippy>
          </Link>
        </div>
        <div className="right">
          <div className="iconItem">
            <a href="https://github.com/Wmurciarey9" target="_blank">
              <Tippy content="GitHub">
                <GitHubIcon className="icon" style={{ color: darkMode && "#fff" }} />
              </Tippy>
            </a>
          </div>
          <div className="iconItem">
            <a href="https://www.linkedin.com/in/wmurciarey" target="_blank">
              <Tippy content="LinkedIn">
                <LinkedInIcon className="icon" style={{ color: darkMode && "#fff" }} />
              </Tippy>
            </a>
          </div>
          <div className="iconItem">
            <a href={resume} download="resume.pdf">
              <Tippy content="Resume">
                <InsertDriveFileIcon className="icon" style={{ color: darkMode && "#fff" }} />
              </Tippy>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
