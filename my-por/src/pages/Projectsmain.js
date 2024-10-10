// src/pages/Projects.js
import React from "react";
import Project from "../components/Project";
import "../assets/style/main.css";
import { projects } from "./Projects";
const Projectsmain = () => {
  return (
    <div className="project-block">
      <h1 className="project-banner">Blog</h1>
      <div className="project-block-item">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            urlimg={project.urlimg}
          />
        ))}
      </div>
    </div>
  );
};

export default Projectsmain;
