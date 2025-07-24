import React, { useState } from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const menuItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`navbar-toggle${open ? " open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
        tabIndex={0}
        role="button"
        onKeyPress={(e) => (e.key === "Enter" ? setOpen((prev) => !prev) : null)}
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
