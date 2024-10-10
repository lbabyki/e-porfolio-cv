import React from "react";
import Skills from "./Skills";
import ContactForm from "./Contact";
import Hero from "../components/Hero";
import Aboutme from "./About";
import Projects from "./Projects";

const Home = ({ setCurrentPage }) => {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <Aboutme />
      <Skills />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
