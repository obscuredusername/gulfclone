import React, { useState, useEffect } from 'react';
import '../index.css';

function Navbar({ navItems }) {
  const [scrolled, setScrolled] = useState(false);

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

  const renderNavItems = () => {
    return navItems.map((item, index) => (
      <a key={index} href={item.link} className={scrolled ? 'nav-link scrolled' : 'nav-link'}>
        {item.text}
      </a>
    ));
  };

  return (
    <div className={scrolled ? 'nbr scrolled' : 'nbr'}>
      <p className={scrolled ? 'nbr-coupon scrolled' : 'nbr-coupon'}>Coupons</p>
      <div className={scrolled ? 'nbr-bn scrolled' : 'nbr-bn'}>
        {renderNavItems()}
      </div>
    </div>
  );
}

export default Navbar;
