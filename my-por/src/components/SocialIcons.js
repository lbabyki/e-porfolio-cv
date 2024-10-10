import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import ZaloIcon from "../assets/img/zalo-icon.jpg";
import "../assets/style/Hero.css";
const SocialIcons = () => {
  return (
    <div className="social-logo">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook color="#1877F2" />
      </a>
      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
        <img src={ZaloIcon} alt="Zalo" style={{ width: 26, height: 26 }} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub color="white" />
      </a>
    </div>
  );
};
export default SocialIcons;
