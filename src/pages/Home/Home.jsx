import React, { useEffect } from "react";
import "./Home.css";
import "./home-background.css";
import "./home-queries.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true, easing: "ease" });
  }, []);
  return (
    <>
      <section id="home" className="home-container">
        <div className="home-name-container" data-aos="fade-up">
          <h2>Hello, my name is...</h2>
          <h1>Riley Wikel</h1>
        </div>

        <img
          className="home-astro"
          src={require("../../imgs/backgrounds/home/astro.png")}
          alt="Astronaut floating in space"
          data-aos="fade-up-left"
        />

        <img
          className="home-satellite"
          src={require("../../imgs/backgrounds/home/satellite.png")}
          alt="Satellite floating in space"
          data-aos="fade-down-right"
        />

        <img
          className="home-meteor"
          src={require("../../imgs/backgrounds/home/meteor.png")}
          alt="Meteor floating in space aobut to hit a planet"
          data-aos="fade-down-left"
        />

        <div className="home-img-container" data-aos="fade-up">
          <img
            src={require("../../imgs/Riley.png")}
            alt="Riley Wikel, Software Developer and User Interface 
            | User Experience Designer"
          />
        </div>
        <div className="home-content" data-aos="fade-up">
          <p>Software Developer &nbsp; &bull; &nbsp; UI / UX Designer</p>
          <a href="#projects" className="btn btn--outline">
            See Projects
          </a>
        </div>
      </section>
    </>
  );
}
