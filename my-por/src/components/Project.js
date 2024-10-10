import React from "react";
import "../assets/style/main.css";
const Projects = ({ title, description, link, urlimg }) => {
  return (
    <div className="project">
      <img src={urlimg} alt={title}></img>x
      <div className="project-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};
export default Projects;
