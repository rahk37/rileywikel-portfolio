import React, { useEffect } from "react";
import "./About.css";
import "./About-queries.css";
import { IonIcon } from "@ionic/react";

import { schoolSharp } from "ionicons/icons";
import { personSharp } from "ionicons/icons";
import { heartSharp } from "ionicons/icons";

import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true, easing: "ease" });
  }, []);

  return (
    <>
      <section id="about" className="about-container">
        <div className="container" data-aos="fade-up">
          <h1 className="header-main">About Me</h1>
          <div className="section-header-line"></div>
        </div>

        <div className="container grid grid--2-cols about-grid">
          <div className="text-box" data-aos="flip-right">
            <p className="about-icon">
              <IonIcon icon={schoolSharp}></IonIcon>
            </p>
            <h3 className="about-tert header-tert">Education</h3>
            <p className="about-content-text">
              I graduated from{" "}
              <a
                href="https://www.msoe.edu/"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Milwaukee School of Engineering</strong>
              </a>{" "}
              with a bachelor's degree in Software Engineering and a minor in
              User Experience, achieving Honor's list all four years while
              committing to the{" "}
              <a
                href="https://order-of-the-engineer.org/"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Order of the Engineer</strong>
              </a>{" "}
              and the{" "}
              <a
                href="http://pledge-of-the-computing-professional.org/"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Pledge of the Computing Professional</strong>
              </a>
              . I also hold an Associate's degree in Natural Sciences and
              Mathematics from North Iowa Area Community College.
            </p>
          </div>

          <div className="about-img-box" data-aos="flip-left">
            <div className="about-img-hover"></div>
            <img
              src={require("../../imgs/education.jpg")}
              className="about-img"
              alt="Riley Wikel graduating from Milwaukee School of Engineering 
              (MSOE) with a bachelor's degree in Software Engineering and a minor 
              in User Experience"
            />
          </div>

          <div className="about-img-box" data-aos="flip-right">
            <div className="about-img-hover"></div>
            <img
              src={require("../../imgs/background.jpg")}
              className="about-img"
              alt="Riley Wikel pitching for North Iowa Area Community College as 
              a Closing Pitcher against Kirkwood Community College"
            />
          </div>

          <div className="text-box" data-aos="flip-left">
            <p className="about-icon">
              <IonIcon icon={personSharp}></IonIcon>
            </p>
            <h3 className="about-tert header-tert">Background</h3>
            <p className="about-content-text">
              At three years old, I began playing baseball and became the only
              freshman to make varsity in high school with a pitch speed of 85
              mph. As a senior, I led the state in strikeouts, earned a{" "}
              <a
                href="https://www.perfectgame.org/all_americans/Default.aspx?Year=2015&List=Central"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Perfect Game</strong>
              </a>{" "}
              All-American Honorable Mention, and received college offers. I
              also played soccer and wrestled. In college, I pitched in the low
              90s, played in the{" "}
              <a
                href="https://northwoodsleague.com/"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Northwoods League</strong>
              </a>
              , and received professional interest.
            </p>
          </div>

          <div className="text-box" data-aos="flip-right">
            <p className="about-icon">
              <IonIcon icon={heartSharp}></IonIcon>
            </p>
            <h3 className="about-tert header-tert">Hobbies</h3>
            <p className="about-content-text">
              I am deeply passionate about sports data analytics and utilize my
              research skills to develop winning{" "}
              <a
                href="https://en.wikipedia.org/wiki/Algorithm"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>algorithms</strong>
              </a>
              . During my leisure time, I engage in diverse interests including
              watching{" "}
              <a
                href="https://www.ufc.com/"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>UFC</strong>
              </a>{" "}
              matches, reading non-fiction books on finance and psychology, and
              exploring the fascinating universes of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Harry_Potter"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Harry Potter</strong>
              </a>
              ,{" "}
              <a
                href="https://www.marvel.com/"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Marvel</strong>
              </a>
              ,{" "}
              <a
                href="https://www.starwars.com/"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Star Wars</strong>
              </a>
              , and{" "}
              <a
                href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>The Lord of the Rings</strong>
              </a>
              . I also enjoy freshwater fishing and the exhilaration of catching
              trophy{" "}
              <a
                href="https://www.fws.gov/species/walleye-sander-vitreus"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>walleye</strong>
              </a>
              . In addition, I am an avid gamer and excel in{" "}
              <a
                href="https://www.clashroyale.com"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Clash Royale</strong>
              </a>{" "}
              and{" "}
              <a
                href="https://www.smashbros.com"
                className="content-link"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Super Smash Bros. Ultimate</strong>
              </a>
              .
            </p>
          </div>

          <div className="about-img-box" data-aos="flip-left">
            <div className="about-img-hover"></div>
            <img
              src={require("../../imgs/hobby.jpg")}
              className="about-img"
              alt="Riley Wikel graduating from Milwaukee School of Engineering 
              (MSOE) with a bachelor's degree in Software Engineering and a minor 
              in User Experience"
            />
          </div>
        </div>
      </section>
    </>
  );
}
