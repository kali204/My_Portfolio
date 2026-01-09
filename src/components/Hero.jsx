import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroImage from "../assets/Hero.png";

const Hero = () => {
  const name = "Abhay Singh Deopa";
  const [text, setText] = useState("");
  const indexRef = useRef(0);

  // Typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current <= name.length) {
        setText(name.slice(0, indexRef.current));
        indexRef.current++;
      } else {
        indexRef.current = 0;
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Scroll to projects
  const handleViewWork = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-container">
        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            Hi, I’m <br />
            <span className="hero-name">
              {text}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            I build <strong>real-world systems</strong> — from
            <strong> decentralized apps</strong> to
            <strong> transaction-safe platforms</strong>.
          </p>

          <div className="hero-stats">
            <div>
              <span className="stat-number">5+</span>
              <span className="stat-label">Production Projects</span>
            </div>
            <div>
              <span className="stat-number">ACID</span>
              <span className="stat-label">Transaction Design</span>
            </div>
            <div>
              <span className="stat-number">P2P</span>
              <span className="stat-label">Real-time Systems</span>
            </div>
          </div>

          <div className="hero-cta">
            {/* View Projects */}
            <motion.button
              className="cta-button primary"
              onClick={handleViewWork}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              View Selected Work
            </motion.button>

            {/* Contact Email */}
            <motion.a
              href="mailto:abhaystark77@gmail.com"
              className="cta-button secondary"
              whileHover={{ x: 6 }}
            >
              Contact Me →
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src={HeroImage}
            alt="Abhay Singh Deopa"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
