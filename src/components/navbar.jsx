// Navbar.js
import React, { useState, useEffect } from 'react';
import '../index.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,700,0,200" />

function Navbar({ navItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Clean up the event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={scrolled ? 'nbr scrolled' : 'nbr'}>
 {!isMobileView && (
  <p className={scrolled ? 'nbr-coupon scrolled' : 'nbr-coupon'}>Coupons</p>
)}

      
      {!isMobileView && navItems.map((item, index) => (
        <a key={index} href={item.link} className={scrolled ? 'nav-link scrolled' : 'nav-link'} style={{ color: "white" }}>
          {item.text}
        </a>
      ))}
      {isMobileView && (
        <button className="btn-custom" onClick={toggleMobileMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="dropdown-menu">
          {navItems.map((item, index) => (
            <a key={index} href={item.link} className="dropdown-item">
              {item.text}
            </a>
          ))}
        </div>
      )}

      <div className='sidebtn'>
        <div className='pr-subs'>
          <button className="bn-subs">Subscribe</button>
        </div>
        <button className="btn-custom">
          <span className="material-symbols-outlined">person</span>
        </button>
        <button className="btn-custom">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="btn-custom">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
