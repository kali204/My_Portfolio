import React from "react";
import { FaLaptopCode, FaWallet, FaGlobe, FaHome, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    icon: <FaHome />,
    title: "Homestay Website",
    description: "A beautiful and user-friendly website for booking homestays.",
    techStack: "React, Node.js, MongoDB",
    github: "https://github.com/kali204/Homestay",
    website: "https://homestay-henna.vercel.app/",
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
    icon: <FaWallet />,
    title: "Paytm ACID Project",
    description: "Implemented an ACID-compliant system to ensure secure and reliable transactions.",
    techStack: "Java, Spring Boot, MySQL",
    github: "https://github.com/kali204/Paytm",
    website: "https://your-website.com",
  },
  {
    icon: <FaGlobe />,
    title: "Tripchi Travel Agency Website",
    description: "Developed a modern, responsive website for a travel agency to showcase destinations, enable bookings, and integrate WhatsApp inquiries.",
    techStack: "HTML, CSS, JavaScript, Tailwind CSS",
    github: "https://github.com/your-username/tripchi",
    website: "https://tripchi.in",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-inner">
              {/* Front Side */}
              <div className="project-front">
                <div className="project-icon" aria-hidden="true">{project.icon}</div>
                <h3>{project.title}</h3>
              </div>

              {/* Back Side */}
              <div className="project-back">
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.techStack}</p>

                {/* GitHub & Website Links - Conditionally rendered */}
                <div className="project-links">
                  {project.github && project.github !== "https://github.com/your-github-repo" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.website && project.website !== "https://your-website.com" && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Website`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
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
