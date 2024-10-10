import React, { useEffect, useRef } from "react";
import Header from "./Header";
import "../assets/style/Hero.css";

const wordList = [
  "JS development",
  "React front-end",
  "Fullstack development",
  "Python classification",
];

const Hero = ({ setCurrentPage, currentPage }) => {
  const wordRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const changeWords = () => {
      if (wordRef.current) {
        wordRef.current.classList.add("hidden");

        setTimeout(() => {
          wordRef.current.textContent = wordList[index];
          wordRef.current.classList.remove("hidden");
        }, 100);

        index = (index + 1) % wordList.length;
      }
    };

    const intervalId = setInterval(changeWords, 3000);
    changeWords();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <div className="welcom-word">
        <p>Welcome to My World</p>
        <h1>Hi, I'm Lê Hoàng Giang</h1>
        <h1 className="change-word" ref={wordRef}>
          .
        </h1>
        <h1>based in Việt Nam.</h1>
      </div>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default Hero;
