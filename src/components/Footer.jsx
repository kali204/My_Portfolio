import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2 className="footer-logo">Abhay Dev</h2>
        <p className="footer-text">Building Web Application & AI Applications with Passion 🚀</p>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/kali204" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/abhay-deopa-b56b81325/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/AbhayDeopa1" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/codemaster08/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="footer-bottom">© 2024 Abhay Singh Deopa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
