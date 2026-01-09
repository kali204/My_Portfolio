import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-tagline">
          Building intelligent systems & real-world products 🚀
        </p>

        <p className="about-text">
          I’m a <strong>Full Stack & AI Developer</strong> who loves turning
          complex ideas into <strong>scalable, real-world applications</strong>.
          My core strength lies in <strong>problem-solving</strong>,
          system thinking, and building products that actually work in
          <strong>real-life constraints</strong>.
        </p>

        <p className="about-text">
          Currently, I’m working on projects like a{" "}
          <strong>decentralized proximity-based chat app</strong>,
          exploring <strong>ACID properties through Paytm-like systems</strong>,
          and building <strong>scalable full-stack platforms</strong>.
          I enjoy working close to the core logic — from backend design
          to real-time systems.
        </p>

        <div className="skills">
          <span>React</span>
          <span>Java</span>
          <span>Python</span>
          <span>SQL</span>
          <span>System Design</span>
          <span>AI / ML</span>
          <span>Real-time Apps</span>
        </div>
      </div>
    </section>
  );
};

export default About;
