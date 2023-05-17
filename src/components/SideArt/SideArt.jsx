import React from "react";
import "./SideArt.css";
import "./sideart-queries.css";
import { IonIcon } from "@ionic/react";
import { logoLinkedin } from "ionicons/icons";
import { logoGithub } from "ionicons/icons";

export default function SideArt() {
  return (
    <>
      <div className="line-container line-left" data-aos="fade-up">
        <div className="side-line"></div>
        <a href="https://www.linkedin.com/in/rileywikel/">
          <IonIcon className="side-icon" icon={logoLinkedin}></IonIcon>
        </a>
        <a href="https://github.com/rahk37">
          <IonIcon className="side-icon" icon={logoGithub}></IonIcon>
        </a>
        <div className="side-line"></div>
      </div>

      <div className="line-container line-right" data-aos="fade-up">
        <div className="side-line line-right-top"></div>
        <a
          href="mailto:rahketdev@gmail.com?subject=Question about your services"
          style={{ textDecoration: "none" }}
        >
          <p>rahketdev@gmail.com</p>
        </a>
        <div className="side-line"></div>
      </div>
    </>
  );
}
