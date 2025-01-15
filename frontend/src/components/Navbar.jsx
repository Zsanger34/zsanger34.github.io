import React, { useState } from 'react';
import '../CSS Files/Navbar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../assets/icons/Github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/Linkedin.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <h2 className="logo-text">Zachary Sanger</h2>
        </Link>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/about" onClick={closeMenu}>About Me</Link></li>
        {/* <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li> */}
        <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/homelab" onClick={closeMenu}>HomeLab</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        {/* Add the icons in the hamburger dropdown for mobile view */}
        <div className="navbar-icons mobile-icons">
          <a href="https://github.com/Zsanger34" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/zachary-sanger/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="icon"/>
          </a>
        </div>
      </ul>
      {/* The icons in the navbar for desktop view */}
      <div className="navbar-icons">
        <a href="https://github.com/Zsanger34" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/zachary-sanger/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="icon"/>
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
