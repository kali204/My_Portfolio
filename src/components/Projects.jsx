import React from "react";
import "./projects.css";
import {
  FaComments,
  FaWallet,
  FaShoppingCart,
  FaNetworkWired,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaNetworkWired />,
    title: "Decentralized Proximity-Based Chat",
    description:
      "A real-time peer-to-peer chat system that works without internet or cellular towers, focusing on proximity-based communication and decentralized networking.",
    techStack: "Java, Android, P2P Networking, WebSockets",
    github: "https://github.com/kali204/proximity-chat",
    website: "",
  },
  {
    icon: <FaComments />,
    title: "TapTable – Real-Time Interactive Platform",
    description:
      "A real-time interactive platform built for low latency communication and scalable event handling.",
    techStack: "React, Node.js, WebSockets, MongoDB",
    github: "https://github.com/kali204/taptable",
    website: "",
  },
  {
    icon: <FaWallet />,
    title: "Paytm Wallet System (ACID Properties)",
    description:
      "Implemented a Paytm-like wallet system focusing on ACID properties, transaction consistency, rollback mechanisms, and concurrency handling.",
    techStack: "Java, Spring Boot, MySQL",
    github: "https://github.com/kali204/Paytm",
    website: "",
  },
  {
    icon: <FaShoppingCart />,
    title: "Scalable E-Commerce Platform",
    description:
      "A full-stack e-commerce application with authentication, cart, order flow, and database-driven architecture.",
    techStack: "React, Node.js, MongoDB, REST APIs",
    github: "https://github.com/kali204/ecommerce",
    website: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        Real-world systems, not just demo apps
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-inner">
              {/* Front */}
              <div className="project-front">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
              </div>

              {/* Back */}
              <div className="project-back">
                <p>{project.description}</p>
                <span>{project.techStack}</span>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  )}
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noreferrer">
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
