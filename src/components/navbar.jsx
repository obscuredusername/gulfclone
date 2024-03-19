import React, { useState, useEffect } from 'react';
import '../index.css';

function Navbar({ navItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderNavItems = () => {
    return navItems.map((item, index) => (
      <a key={index} href={item.link} className={scrolled ? 'nav-link scrolled' : 'nav-link'}>
        {item.text}
      </a>
    ));
  };

  return (
    <div className={`nbr ${scrolled ? 'scrolled' : ''}`}>
      <p className={`nbr-coupon ${scrolled ? 'scrolled' : ''}`}>Coupons</p>
      <div className={`nbr-bn ${scrolled ? 'scrolled' : ''}`}>
        {renderNavItems()}
      </div>
      <div className="d-md-none"> {/* Display only on mobile devices */}
        <button className="btn-custom" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {sidebarOpen && (
        <div className="sidebar d-md-none"> {/* Display only on mobile devices */}
          {/* Sidebar content */}
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      )}
      <div className="sidebtn">
        <div className="pr-subs">
          <button className="bn-subs">Subscribe</button>
        </div>
        <div className="d-none d-md-flex"> {/* Display only on non-mobile devices */}
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
    </div>
  );
}

export default Navbar;
