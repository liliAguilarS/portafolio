import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-gallery">
        <div className="project-item">
          <img src="/path/to/project-image.jpg" alt="Project 1" />
          <p>Project 1 Description</p>
        </div>
        {/* Añadir más proyectos aquí */}
      </div>
    </section>
  );
}

export default Projects;
