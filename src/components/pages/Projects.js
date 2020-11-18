import React from "react";

import Project from "./Project";

import "../../assets/styles/dist/css/projects.css";

const projectsList = [
  {
    projectLink: "https://kaushikdev.github.io/budget",
    projectTitle: "Budget Manager",
    tag: "Javascript",
  },
  {
    projectLink: "https://kaushikdev.github.io/blog",
    projectTitle: "Blog",
    tag: "Javascript",
  },
  {
    projectLink: "https://kaushikdev.github.io/weather",
    projectTitle: "Weather Forecast",
    tag: "Javascript",
  },
  {
    projectLink: "https://kaushikdev.github.io/reactodo",
    projectTitle: "Reactodo",
    tag: "React",
  },
  {
    projectLink: "https://kaushikdev.github.io/arkanoid",
    projectTitle: "Breakout",
    tag: "Javascript",
  },
  {
    projectLink: "https://kaushikdev.github.io/quotes",
    projectTitle: "Quotes",
    tag: "Javascript",
  },
  {
    projectLink: "https://kaushikdev.github.io/sketch",
    projectTitle: "Sketch",
    tag: "Javascript",
  },
  {
    projectLink: "https://kaushikdev.github.io/TickyBotClone",
    projectTitle: "TickyBot Clone",
    tag: "HTML",
  },
];

const projectsArr = projectsList.map((project, index) => {
  return (
    <Project
      key={index}
      view={project.projectLink}
      title={project.projectTitle}
      tag={project.tag}
    />
  );
});

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__grid">{projectsArr}</div>
    </div>
  );
};

export default Projects;
