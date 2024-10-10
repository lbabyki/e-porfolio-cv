import React, { useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projectsmain from "./pages/Projectsmain";
import "./styles.css";
import ContactForm from "./pages/Contact";
// import Skills from "./pages/Skills";
import Header from "./components/Header";
import SkillsListmain from "./pages/Skillsmain";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const pages = {
    home: <Home setCurrentPage={setCurrentPage} />,
    projects: <Projectsmain />,
    contact: <ContactForm />,
    skills: <SkillsListmain />,
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {pages[currentPage]}
      <Footer />
    </div>
  );
};

export default App;
