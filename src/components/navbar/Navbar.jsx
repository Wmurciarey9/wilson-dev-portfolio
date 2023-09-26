import "./navbar.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import Logo from "../../images/brandTransparent.png";
import WhiteLogo from "../../images/whiteTransparent.png";
import WilsonCV from "./WilsonCV.pdf";

import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional

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
      style={{
        backgroundColor: darkMode ? "#141516" : "",
        color: darkMode && "whitesmoke",
      }}
    >
      <div className="container">
        <div className="left">
          <Link to={`/`}>
            <Tippy content="Home">
              <img
                src={Logo}
                alt=""
                style={{ content: darkMode && 'url("' + WhiteLogo + '")' }}
              />
            </Tippy>
          </Link>
        </div>
        <div className="right">
          <div className="iconItem">
            <a
              href="https://github.com/Wmurciarey9"
              target="_blank"
              rel="noreferrer"
            >
              <Tippy content="GitHub">
                <GitHubIcon
                  className="icon"
                  style={{ color: darkMode && "#fff" }}
                />
              </Tippy>
            </a>
          </div>
          <div className="iconItem">
            <a
              href="https://www.linkedin.com/in/wmurciarey"
              target="_blank"
              rel="noreferrer"
            >
              <Tippy content="LinkedIn">
                <LinkedInIcon
                  className="icon"
                  style={{ color: darkMode && "#fff" }}
                />
              </Tippy>
            </a>
          </div>
          <div className="iconItem">
            <a href={WilsonCV} download="CVWilsonDev.pdf">
              <Tippy content="Resume">
                <InsertDriveFileIcon
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
