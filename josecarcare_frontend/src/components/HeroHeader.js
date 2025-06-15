// Jose Car Care/josecarcare_frontend/src/components/HeroHeader.js

import React, { useState, useEffect, useRef } from 'react'; // NEW: Import useEffect and useRef

function HeroHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // NEW: Create a ref for the navigation menu container
  const hamburgerRef = useRef(null); // NEW: Create a ref for the hamburger icon

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // NEW: useEffect to handle clicks outside the menu
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside the nav menu AND outside the hamburger icon
      if (navRef.current && !navRef.current.contains(event.target) && 
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    }

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts or effect re-runs
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]); // Re-run effect if menuOpen state changes (to re-attach listener if needed, though 'mousedown' is static)


  return (
    <div className="hero-header-container">
      <div className="hero-logo">
        <span className="hero-logo-jose">JOSE</span>
        <span className="hero-logo-carcare">CAR CARE</span>
      </div>

      

      {/* Hamburger Icon - Attach ref */}
      <div className="hamburger-icon" onClick={toggleMenu} ref={hamburgerRef}> {/* NEW: Attach ref */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="hero-phone">
        <a href="tel:+916238804932" className="hero-phone-link">
          +91 62388 04932
        </a>
      </div>

      {/* Navigation Menu - Attach ref */}
      <nav className={`hero-nav ${menuOpen ? 'open' : ''}`} ref={navRef}> {/* NEW: Attach ref */}
        <ul className="hero-nav-list">
          <li><a href="#about-section" className="hero-nav-link" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#services-section" className="hero-nav-link" onClick={toggleMenu}>Services</a></li>
          <li><a href="#contact-section" className="hero-nav-link" onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HeroHeader;