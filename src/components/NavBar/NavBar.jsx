import React from "react";
import "./NavBar.css";
import "./NavBar-queries.css";
import { ReactComponent as MyLogo } from "../../imgs/Logo.svg";
import { IonIcon } from "@ionic/react";
import pdf from "../../imgs/resume/Riley Wikel.pdf";

import { homeSharp } from "ionicons/icons";
import { idCardSharp } from "ionicons/icons";
import { briefcaseSharp } from "ionicons/icons";
import { chatbubblesSharp } from "ionicons/icons";
import { closeSharp } from "ionicons/icons";
import { menuSharp } from "ionicons/icons";
import { useState } from "react";
export default function NavBar() {
  const [navBtnClicked, setNavBtnClicked] = useState(true);

  const clicked = () => {
    setNavBtnClicked(!navBtnClicked);
  };

  return (
    <>
      <div className="nav-container">
        <a className="nav-logo" href="#home">
          <MyLogo className="logo-svg" />
        </a>
        <nav className={navBtnClicked ? "nav-main" : "mobile-nav-clicked"}>
          <ul className="nav-main-list">
            <li>
              <a className="nav-main-link" href="#home" onClick={clicked}>
                <IonIcon className="nav-icon" icon={homeSharp}></IonIcon>{" "}
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="nav-main-link" href="#about" onClick={clicked}>
                <IonIcon className="nav-icon" icon={idCardSharp}></IonIcon>{" "}
                <span>About</span>
              </a>
            </li>
            <li>
              <a className="nav-main-link" href="#projects" onClick={clicked}>
                <IonIcon className="nav-icon" icon={briefcaseSharp}></IonIcon>{" "}
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a className="nav-main-link" href="#contact" onClick={clicked}>
                <IonIcon className="nav-icon" icon={chatbubblesSharp}></IonIcon>{" "}
                <span>Contact</span>
              </a>
            </li>

            <li>
              <a
                href={pdf}
                target="_blank"
                className="nav-main-btn"
                rel="noreferrer"
                onClick={clicked}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav" onClick={clicked}>
          {navBtnClicked ? (
            <IonIcon className="nav-mobile--icon" icon={menuSharp}></IonIcon>
          ) : (
            <>
              <IonIcon className="nav-mobile--icon" icon={closeSharp}></IonIcon>
            </>
          )}
        </button>
      </div>
    </>
  );
}
