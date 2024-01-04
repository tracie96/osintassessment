import React, { useState } from 'react';
import './Nav.css';
import LogoSvgComponent from '../../assets/SVG/logo';


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
console.log({showMenu})
  const handleDropdownClick = () => {
    // Implement your dropdown logic here
    console.log('Dropdown clicked');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><LogoSvgComponent/></div>
      <div className={`navbar-links ${showMenu ? 'show' : 'naa'}`}>
        <a href="#">Training</a>       
        <a href="#">Enterprise</a>
        <div className="dropdown">
        <a href="#" onClick={handleDropdownClick} className="dropdown-link">
            Contact <span className="arrow"><i class="fa-solid fa-angle-down"></i></span>
          </a>
          <div className="dropdown-content">
            <a href="#">Contact Dropdown</a>
          </div>
        </div>
        <a href="#">Buy Credits</a>
        <div className="dropdown">
        <a href="#" onClick={handleDropdownClick} className="dropdown-link">
            Full Access <span className="arrow"><i class="fa-solid fa-angle-down"></i></span>
          </a>
          <div className="dropdown-content">
            <a href="#">Full Access Dropdown</a>
          </div>
        </div>
        <a href="#"> <span className='get-started'>Get Started <i class="fa-solid fa-arrow-right"></i></span></a>

      </div>
      <span className="get-started-text">Get Started <i class="fa-solid fa-arrow-right"></i></span>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰ 
      </div>
    </nav>
  );
};

export default Nav;
