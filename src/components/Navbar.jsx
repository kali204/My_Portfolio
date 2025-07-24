import React, { useState } from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const menuItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Keyboard accessibility handler for hamburger toggle
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className={`navbar-toggle${open ? " open" : ""}`}
        onClick={toggleMenu}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Right Menu */}
      <ul className={`navbar-menu${open ? " active" : ""}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item${active !== null && active !== index ? " blurred" : ""}`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onClick={handleLinkClick}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
