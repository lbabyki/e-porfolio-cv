// src/components/Skill.js
import React from "react";
import "../assets/style/skill.css"; // Đảm bảo bạn có file CSS để định dạng

const Skill = ({ title, description, percentage, imgUrl }) => {
  return (
    <div className="skill-container">
      <p className="icon-logo">{imgUrl}</p>
      <div className="skill-info">
        <h3 className="skill-title">{title}</h3>
        <p className="skill-description">{description}</p>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="skill-percentage">{percentage}%</span>
      </div>
    </div>
  );
};

export default Skill;
