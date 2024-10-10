import React, { useState, useEffect } from "react";
import logo from "../assets/img/Giang.png";
import "../assets/style/Hero.css";
import SocialIcons from "./SocialIcons";

const Header = ({ setCurrentPage, currentPage }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // Thêm state để theo dõi vị trí cuộn

  const buttons = [
    { name: "home", label: "Home" },
    { name: "projects", label: "Projects" },
    { name: "skills", label: "Skills" },
    { name: "contact", label: "Contact" },
  ];

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Kiểm tra vị trí cuộn
    };

    window.addEventListener("scroll", handleScroll); // Thêm sự kiện cuộn
    return () => {
      window.removeEventListener("scroll", handleScroll); // Dọn dẹp sự kiện khi component unmount
    };
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      {" "}
      {/* Thay đổi className dựa trên trạng thái */}
      <div className="header-css">
        <img src={logo} alt="My logo" />
        <nav className="nav">
          {buttons.map((button) => (
            <button
              key={button.name}
              onMouseEnter={() => handleMouseEnter(button.name)}
              onMouseLeave={handleMouseLeave}
              className={
                hoveredButton === button.name || currentPage === button.name
                  ? "hovered"
                  : ""
              }
              onClick={() => setCurrentPage(button.name)}
            >
              {button.label}
            </button>
          ))}
        </nav>
      </div>
      <SocialIcons />
    </header>
  );
};

export default Header;
