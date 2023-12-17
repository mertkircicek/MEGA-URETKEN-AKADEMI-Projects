// Portfolio.js
import React from "react";
import Menu from "./Menu";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "./Portfolio.css";

const Portfolio = () => {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];

  const handleEmailClick = () => {
    window.location.href = "mailto:kircicekmert0@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/mert-k%C4%B1r%C3%A7i%C3%A7ek-a23664299/");
  };

  return (
    <div className="portfolio-container">
      <Menu />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection skills={skills} />
      <ContactSection
        handleEmailClick={handleEmailClick}
        handleLinkedInClick={handleLinkedInClick}
      />
      <Footer />
    </div>
  );
};

export default Portfolio;