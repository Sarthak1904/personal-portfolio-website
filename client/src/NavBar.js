import React from 'react';
import './NavBar.css'; // Ensure this file exists as well for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>SC</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#journey">Journey</a></li>
        {/* Updated the Resume link to point to the external URL */}
        <li><a href="https://read.cv/sarthakchoudhary" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
