import React from "react";

const AboutMe = () => {
 
  const openGitHub = () => {
    window.open("https://github.com/mertkircicek", "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/mert-k%C4%B1r%C3%A7i%C3%A7ek-a23664299/", "_blank");
  };
  return (
    <section className="aboutme">
      <h1 className="biggest">Mert Kırçiçek</h1>
      <h2 className="biggest2">Student</h2>
      <p className="aboutme-text">
      I am Mert Kırçiçek.
      I'm a university student. I'm in the Computer Engineering department.
      I'm trying to improve myself in the field of React.
      
      
      </p>
      <div className="buttons">
        <button className="github-button" onClick={openGitHub}>
          GitHub Link
        </button>
        <button className="linkedin-button" onClick={openLinkedIn}>
          LinkedIn Link
        </button>
      </div>
    </section>
  );
};

export default AboutMe;