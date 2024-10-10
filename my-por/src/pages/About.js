import React from "react";
import Aboutinfor from "../components/about";
import "../assets/style/about.css";
import portrait from "../assets/img/mypicturewithblue.jpg";
const Aboutme = () => {
  return (
    <div className="about-block">
      <img src={portrait} alt="that is me"></img>
      <Aboutinfor />
    </div>
  );
};
export default Aboutme;
