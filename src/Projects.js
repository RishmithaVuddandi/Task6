import React from 'react';
import projectImage1 from './images/1.jpg';
import projectImage2 from './images/2.jpg';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      link: 'https://github.com/yourusername/project1',
      image: projectImage1, // Reference the imported image
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      link: 'https://github.com/yourusername/project2',
      image: projectImage2, // Reference the imported image
    },
    // Add more project objects as needed
  ];

  return (
    <section id="Projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} /> {/* Display the image */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
