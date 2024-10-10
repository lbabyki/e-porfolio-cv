// src/pages/SkillsList.js
import React from "react";
import Skill from "../components/Skill";
import "../assets/style/skill.css";
import { skills } from "./Skillsmain";
const SkillsList = () => {
  const hardSkills = skills.filter((skill) => skill.type === "hard");
  return (
    <div className="skills-list">
      <h1>My Main Skills</h1>
      <div className="skills-container">
        {hardSkills.slice(0, 3).map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            description={skill.description}
            type={skill.type}
            percentage={skill.percentage}
            imgUrl={skill.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
