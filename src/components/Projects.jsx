import React from "react";
import { FaLaptopCode, FaDatabase, FaMobileAlt, FaRobot, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    icon: <FaRobot />,
    title: "AI Chatbot",
    description: "A smart chatbot built with NLP & Machine Learning.",
    techStack: "Python, TensorFlow, React",
    github: "https://github.com/your-github-repo",
    website: "https://your-website.com",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Dashboard",
    description: "Interactive and responsive React.js dashboard.",
    techStack: "React, Node.js, MongoDB",
    github: "https://github.com/your-github-repo",
    website: "https://your-website.com",
  },
  {
    icon: <FaDatabase />,
    title: "Database System",
    description: "Efficient data management with MySQL & MongoDB.",
    techStack: "MySQL, MongoDB, Express.js",
    github: "https://github.com/your-github-repo",
    website: "https://your-website.com",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App",
    description: "Cross-platform React Native mobile application.",
    techStack: "React Native, Firebase",
    github: "https://github.com/your-github-repo",
    website: "https://your-website.com",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-inner">
              {/* Front Side */}
              <div className="project-front">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
              </div>

              {/* Back Side */}
              <div className="project-back">
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.techStack}</p>

                {/* GitHub & Website Links */}
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
