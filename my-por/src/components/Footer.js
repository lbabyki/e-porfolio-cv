import React from "react";
import logo from "../assets/img/Giang.png";
import "../assets/style/Footer.css";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <footer>
      <div className="footer-css">
        <img src={logo} alt="My logo" />
        CainG
      </div>
      <SocialIcons />
      <div className="footer-copyright">
        {" "}
        <p style={{ color: "#7f8089" }}>
          &copy; {new Date().getFullYear()} My Portfolio build by React
        </p>
      </div>
    </footer>
  );
};
export default Footer;
