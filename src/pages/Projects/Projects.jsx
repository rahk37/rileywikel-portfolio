import React, { useState, useEffect } from "react";
import "./Projects.css";
import "./Projects-queries.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [showRankEmImg, setRankEmImg] = useState(false);
  const [showTextBookImg, setTextBookImg] = useState(false);
  const [showPixelImg, setPixelImg] = useState(false);
  const [showSchedImg, setSchedImg] = useState(false);
  const [showBusImg, setBusImg] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true, easing: "ease" });
  }, []);

  return (
    <>
      <section id="projects" className="projects-container">
        <div className="container">
          <h1 className="header-main" data-aos="fade-up">
            Projects
          </h1>
          <div
            className="section-header-line project-line"
            data-aos="fade-up"
          ></div>
        </div>

        <div className="projects-grid container grid grid--1-cols">
          <div className="projects-content content--left" data-aos="fade-up">
            <div className="project-content-wording">
              <h3 className="header-tert projects-tert">Rank Em</h3>

              <div className="project-technologies-container">
                <div className="project-technology angular">Angular</div>
                <div className="project-technology bootstrap">Bootstrap</div>
                <div className="project-technology aws">AWS</div>
                <div className="project-technology node">Node</div>
                <div className="project-technology sass">Sass</div>
              </div>

              <p>
                RankEm is a web app for{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Fantasy_sport"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>fantasy sports</strong>
                </a>{" "}
                leagues that allows users to rank players in{" "}
                <a
                  href="https://www.nfl.com/"
                  target="_blank"
                  className="content-link"
                  rel="noreferrer"
                >
                  <strong>NFL</strong>
                </a>
                ,{" "}
                <a
                  href="https://www.mlb.com/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>MLB</strong>
                </a>
                ,{" "}
                <a
                  href="https://www.nba.com/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>NBA</strong>
                </a>
                , and{" "}
                <a
                  href="https://www.nhl.com/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>NHL</strong>
                </a>{" "}
                using an API. Rankings can be saved to the user's account and
                exported. Home page displays top 20 rankings from the previous
                year for each sport.
              </p>
            </div>

            <div className="img-box">
              {showRankEmImg ? (
                <>
                  <div
                    className="project-img-hover img-hovered rankem-hover"
                    onMouseEnter={() => {
                      setRankEmImg(true);
                    }}
                    onMouseLeave={() => {
                      setRankEmImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img img-hovered img-img-hovered rankem-img"
                    src={require("../../imgs/projects/RankEm.png")}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div
                    className="project-img-hover rankem-hover"
                    onMouseEnter={() => {
                      setRankEmImg(true);
                    }}
                    onMouseLeave={() => {
                      setRankEmImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img rankem-img"
                    src={require("../../imgs/projects/RankEm.png")}
                    alt=""
                  />
                </>
              )}
            </div>
          </div>

          <div className="projects-content content--right" data-aos="fade-up">
            <div className="img-box">
              {showTextBookImg ? (
                <>
                  <div
                    className="project-img-hover img-hovered textbook-hover"
                    onMouseEnter={() => {
                      setTextBookImg(true);
                    }}
                    onMouseLeave={() => {
                      setTextBookImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img img-hovered img-img-hovered textbook-img"
                    src={require("../../imgs/projects/textbookconnection.PNG")}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div
                    className="project-img-hover textbook-hover"
                    onMouseEnter={() => {
                      setTextBookImg(true);
                    }}
                    onMouseLeave={() => {
                      setTextBookImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img textbook-img"
                    src={require("../../imgs/projects/textbookconnection.PNG")}
                    alt=""
                  />
                </>
              )}
            </div>

            <div className="project-content-wording">
              <h3 className="header-tert projects-tert">Textbook Connection</h3>

              <div className="project-technologies-container">
                <div className="project-technology react">React</div>
                <div className="project-technology ms-azure">Azure</div>
                <div className="project-technology bootstrap">Bootstrap</div>
                <div className="project-technology asp">asp.net</div>
              </div>

              <p>
                Textbook Connection is a full-stack web app for{" "}
                <a
                  href="https://www.msoe.edu/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Milwaukee School of Engineering</strong>
                </a>{" "}
                students to borrow textbooks from the library. Students can
                browse, select and request textbooks and{" "}
                <a
                  href="https://www.msoe.edu/academics/how-we-teach/library/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>library</strong>
                </a>{" "}
                staff are notified via email to approve or deny requests.
              </p>
            </div>
          </div>

          <div className="projects-content content--left" data-aos="fade-up">
            <div className="project-content-wording">
              <h3 className="header-tert projects-tert">Pixelgram</h3>

              <div className="project-technologies-container">
                <div className="project-technology angular">Angular</div>
                <div className="project-technology material">Material</div>
                <div className="project-technology spring-boot">
                  Spring Boot
                </div>
                <div className="project-technology java">Java</div>
              </div>

              <p>
                Pixelgram is a mock{" "}
                <a
                  href="https://www.instagram.com/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Instagram</strong>
                </a>{" "}
                web app where users post pictures with captions that others can
                like and comment on. Users can update their profile bios,
                pictures, and follow other users. The{" "}
                <a
                  href="https://help.instagram.com/424737657584573"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>app's</strong>
                </a>{" "}
                main feed has a search bar for keywords, usernames, and
                hashtags.
              </p>
            </div>

            <div className="img-box">
              {showPixelImg ? (
                <>
                  <div
                    className="project-img-hover img-hovered pixelgram-hover"
                    onMouseEnter={() => {
                      setPixelImg(true);
                    }}
                    onMouseLeave={() => {
                      setPixelImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img img-hovered img-img-hovered pixelgram-img"
                    src={require("../../imgs/projects/pixelgram.png")}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div
                    className="project-img-hover pixelgram-hover"
                    onMouseEnter={() => {
                      setPixelImg(true);
                    }}
                    onMouseLeave={() => {
                      setPixelImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img pixelgram-img"
                    src={require("../../imgs/projects/pixelgram.png")}
                    alt=""
                  />
                </>
              )}
            </div>
          </div>

          <div className="projects-content content--right" data-aos="fade-up">
            <div className="img-box">
              {showSchedImg ? (
                <>
                  <div
                    className="project-img-hover img-hovered schedtool-hover"
                    onMouseEnter={() => {
                      setSchedImg(true);
                    }}
                    onMouseLeave={() => {
                      setSchedImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img img-hovered img-img-hovered schedtool-img"
                    src={require("../../imgs/projects/SchedTool.PNG")}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div
                    className="project-img-hover schedtool-hover"
                    onMouseEnter={() => {
                      setSchedImg(true);
                    }}
                    onMouseLeave={() => {
                      setSchedImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img schedtool-img"
                    src={require("../../imgs/projects/SchedTool.PNG")}
                    alt=""
                  />
                </>
              )}
            </div>

            <div className="project-content-wording">
              <h3 className="header-tert projects-tert">Schedtool</h3>

              <div className="project-technologies-container">
                <div className="project-technology react">React</div>
                <div className="project-technology python">Python</div>
                <div className="project-technology flask">Flask</div>
                <div className="project-technology bootstrap">Bootstrap</div>
              </div>

              <p>
                Schedtool is a web application designed to help Milwaukee School
                of Engineering's{" "}
                <a
                  href="https://www.msoe.edu/academics/undergraduate-degrees/engineering/computer-science/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>computer science</strong>
                </a>{" "}
                program directors resolve class and room scheduling conflicts.
                It allows users to upload course schedules and highlights any
                conflicts in real-time. Users can then edit the schedules and
                room assignments and download the updated version.
              </p>
            </div>
          </div>

          <div
            className="projects-content projects-content--bus content--left"
            data-aos="fade-up"
          >
            <div className="project-content-wording">
              <h3 className="header-tert projects-tert">MCTS Bus Tracker</h3>

              <div className="project-technologies-container">
                <div className="project-technology node">Node</div>
                <div className="project-technology react">React</div>
                <div className="project-technology express">Express</div>
                <div className="project-technology bootstrap">Bootstrap</div>
              </div>

              <p>
                The{" "}
                <a
                  href="https://www.ridemcts.com/"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>MCTS</strong>
                </a>{" "}
                Bus Tracker app displays all buses on routes via Transit API on
                a map. Users can access specific bus{" "}
                <a
                  href="https://www.ridemcts.com/real-time"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>details</strong>
                </a>{" "}
                and search for bus routes, while the app highlights a chosen
                route and shows all current buses on that route with exact{" "}
                <a
                  href="https://www.ridemcts.com/routes-schedules/system-map"
                  className="content-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>locations</strong>
                </a>
                .
              </p>
            </div>

            <div className="img-box">
              {showBusImg ? (
                <>
                  <div
                    className="project-img-hover img-hovered bus-hover"
                    onMouseEnter={() => {
                      setBusImg(true);
                    }}
                    onMouseLeave={() => {
                      setBusImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img img-hovered img-img-hovered bus-img"
                    src={require("../../imgs/projects/bus.png")}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div
                    className="project-img-hover bus-hover"
                    onMouseEnter={() => {
                      setBusImg(true);
                    }}
                    onMouseLeave={() => {
                      setBusImg(false);
                    }}
                  ></div>
                  <img
                    className="project-img bus-img"
                    src={require("../../imgs/projects/bus.png")}
                    alt=""
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
