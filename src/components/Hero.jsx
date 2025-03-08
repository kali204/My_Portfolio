import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/Hero.png"; // Ensure correct path

const Hero = () => {
  const fullText = "Abhay Singh Deopa";
  const typingSpeed = 150; 
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setTypedText(""); // Reset text before animation starts
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1)); // Properly update text without undefined
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup interval
  }, []); // Run only once when component mounts

  return (
    <section className="hero">
      {/* Left Side - Text */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{typedText}</span>
          <motion.span 
            className="cursor"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </h1>
        <p className="hero-subtitle">AI & Full Stack Developer</p>
        <p className="hero-subtitle">Building Web & AI Applications</p>
        <p className="hero-brand">PayMe | AI Chatbot</p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* Right Side - Hero Image */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={HeroImage} alt="Developer" className="hero-image" />
      </motion.div>
    </section>
  );
};

export default Hero;
