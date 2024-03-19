import React, { useState, useEffect } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'; // Import Bootstrap Navbar components

function Navbar({ navItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as per your design
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderNavItems = () => {
    return navItems.map((item, index) => (
      <Nav.Link key={index} href={item.link} className={scrolled ? 'nav-link scrolled' : 'nav-link'} style={{ color: 'white' }} >
        {item.text}
      </Nav.Link>
    ));
  };

  return (
    <>
      <BootstrapNavbar expand="lg" className={`nbr${scrolled ? ' scrolled' : ''} ${isMobile ? 'nbr-mobile' : ''}`} >
        {isMobile && (
          <button className="menu-btn" onClick={toggleSidebar}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        )}
        <BootstrapNavbar.Brand className={`nbr-coupon${scrolled ? ' scrolled' : ''}`} href="#" style={{ color: 'white' }}>Coupons</BootstrapNavbar.Brand>
        {!isMobile && (
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        )}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className={`mr-auto ${isMobile ? 'flex-column' : 'mr-auto'}`}>
            {renderNavItems()}
            {!isMobile && (
              <Nav.Link href="#" className={`nav-link${scrolled ? ' scrolled' : ''}`} style={{ color: 'white' }}>Link</Nav.Link>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
      {isMobile && (
        <div className={`sidebar${sidebarOpen ? ' open' : ''}`}  style={{ backgroundColor: 'black '}}> {/* Applied inline style for background color */}
          <button className="close-sidebar" onClick={toggleSidebar}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <Nav className="flex-column">
            {renderNavItems()}
            {/* Add more Nav.Link components for the sidebar if needed */}
          </Nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
