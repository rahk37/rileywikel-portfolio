import React from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  const technologies = ["angular", "bootstrap", "aws", "node", "sass"];
  return (
    <>
      <div className="card-container">
        <img
          src={props.projectImgSrc}
          alt={props.projectImgAlt.toString()}
          className="project-img"
        />

        <div className="project-content">
          {/* <ul className="project-tags">
            {technologies.map((tech, key) => (
              <li className={`tag ${tech}`} key={key}>{tech}</li>
            ))}
          </ul> */}

          <h3 className="header-tert">{props.projectTitle}</h3>
          <p className="project-descrip">{props.projectDescription}</p>
        </div>
      </div>
    </>
  );
}
