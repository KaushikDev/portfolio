import React from "react";

import "../../assets/styles/dist/css/project.css";

import {
  faReact,
  faJsSquare,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ view, title, tag }) => {
  let faTagName =
    tag === "Javascript" ? faJsSquare : tag === "React" ? faReact : faHtml5;

  return (
    <div className="project">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faTagName} className="fa" />
      </div>
      <div className="live">
        <a href={view} target="_blank" rel="noopener noreferrer">
          VIEW LIVE
        </a>
      </div>
    </div>
  );
};

export default Project;
