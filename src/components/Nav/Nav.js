import React, { useState } from 'react';
import './Nav.css';
import LogoSvgComponent from '../../assets/SVG/logo';


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleDropdownClick = () => {
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><LogoSvgComponent/></div>
      <div className={`navbar-links ${showMenu ? 'show' : 'naa'}`}>
        <a href="#training">Training</a>       
        <a href="#enterprise">Enterprise</a>
        <div className="dropdown">
        <a href="#contact" onClick={handleDropdownClick} className="dropdown-link">
            Contact <span className="arrow"><i class="fa-solid fa-angle-down"></i></span>
          </a>
          <div className="dropdown-content">
            <a href="#contactdropdown">Contact Dropdown</a>
          </div>
        </div>
        <a href="#buy">Buy Credits</a>
        <div className="dropdown">
        <a href="#fullaccess" onClick={handleDropdownClick} className="dropdown-link">
            Full Access <span className="arrow"><i class="fa-solid fa-angle-down"></i></span>
          </a>
          <div className="dropdown-content">
            <a href="#fullaccessdropdown">Full Access Dropdown</a>
          </div>
        </div>
        <a href="#getstarted"> <span className='get-started'>Get Started <i class="fa-solid fa-arrow-right"></i></span></a>

      </div>
      <span className="get-started-text">Get Started <i class="fa-solid fa-arrow-right"></i></span>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰ 
      </div>
    </nav>
  );
};

export default Nav;
