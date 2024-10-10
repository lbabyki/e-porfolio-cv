// src/pages/Projects.js
import React from "react";
import Project from "../components/Project";
import "../assets/style/main.css";

export const projects = [
  {
    title: "E-porfolio CV",
    description: "My first web built by react",
    link: "https://github.com/lbabyki/e-porfolio-cv",
    urlimg: "https://bkhost.vn/wp-content/uploads/2022/08/ReactJs-la-gi.jpg",
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    link: "https://github.com/lbabyki/e-porfolio-cv",
    urlimg:
      "https://th.bing.com/th/id/OIP.ay4Afle8-Q66LAMJpEHX_gHaEK?rs=1&pid=ImgDetMain",
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    link: "https://github.com/lbabyki/e-porfolio-cv",
    urlimg:
      "https://th.bing.com/th/id/OIP.ay4Afle8-Q66LAMJpEHX_gHaEK?rs=1&pid=ImgDetMain",
  },
  {
    title: "Project 4",
    description: "Description of project 4.",
    link: "https://github.com/lbabyki/e-porfolio-cv",
    urlimg:
      "https://th.bing.com/th/id/OIP.ay4Afle8-Q66LAMJpEHX_gHaEK?rs=1&pid=ImgDetMain",
  },
];
const Projects = () => {
  return (
    <div className="project-block">
      <h1 className="project-title">My Latest Projects</h1>
      <div className="project-block-item">
        {projects.slice(0, 3).map((project, index) => (
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

export default Projects;
