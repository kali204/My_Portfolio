import React, { useState } from "react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Right Menu */}
      <ul className="navbar-menu">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <li
            key={index}
            className={`nav-item ${active !== null && active !== index ? "blurred" : ""}`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
