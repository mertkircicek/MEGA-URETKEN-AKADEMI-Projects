import React from "react";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h1 className="titles">Projects</h1>
      <div className="project-box-container">
        <div className="project-box info-box">
          <h1>CALCULATOR</h1>
          <p>HTML</p>
          <div className="project-links">
            <a
              href="https://github.com/mertkircicek/MEGA-URETKEN-AKADEMI-Projects/tree/main/hesapmakinesi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link🔗
            </a>
          </div>
        </div>
        <div className="project-box info-box">
          <h1>SUDOKU</h1>
          <p>HTML, CSS</p>
          <div className="project-links">
            <a
              href="https://github.com/mertkircicek/MEGA-URETKEN-AKADEMI-Projects/tree/main/sudoku"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 🔗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;