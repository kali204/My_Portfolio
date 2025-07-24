import React from "react";

const About = () => {
  return (
    <section className="about" id="about" aria-label="About Me Section">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <p className="section-subtitle">A Glimpse into My Journey</p>

        <div className="about-content">
          <p className="about-description">
            I’m a passionate <strong>AI & Full Stack Developer</strong> with expertise in <strong>Python, JavaScript, C++, and SQL</strong>.  
            With a strong foundation in <strong>Machine Learning, Artificial Intelligence, and Web Development</strong>,  
            I create intelligent, scalable, and high-performing applications. I love <strong>solving complex problems</strong>  
            and <strong>pushing the boundaries of technology</strong> to make impactful solutions.
          </p>

          <p className="about-description">
            My projects, including <strong>MindMend (AI Chatbot)</strong> and <strong>PayMe (Fintech App)</strong>,  
            showcase my ability to blend <strong>AI and software development</strong> seamlessly.  
            Let’s <strong>collaborate and innovate together!</strong>
          </p>

          {/* Skills Section */}
          <div className="skills-grid" aria-label="Skills List">
            <div className="skill-card">AI & Machine Learning</div>
            <div className="skill-card">Full Stack Development</div>
            <div className="skill-card">Python & C++</div>
            <div className="skill-card">React & Flask</div>
            <div className="skill-card">Database Management</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
