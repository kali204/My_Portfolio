import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <p className="section-subtitle">A Glimpse into My Journey</p>
        
        <div className="about-content">
          <p className="about-description">
            I’m a passionate **AI & Full Stack Developer** with expertise in **Python, JavaScript, C++, and SQL**.  
            With a strong foundation in **Machine Learning, Artificial Intelligence, and Web Development**,  
            I create intelligent, scalable, and high-performing applications. I love **solving complex problems**  
            and **pushing the boundaries of technology** to make impactful solutions.  
          </p>

          <p className="about-description">
            My projects, including **MindMend (AI Chatbot), PayMe (Fintech App)**,  
            showcase my ability to blend **AI and software development** seamlessly.  
            Let’s **collaborate and innovate together!**
          </p>

          {/* Skills Section */}
          <div className="skills-grid">
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
