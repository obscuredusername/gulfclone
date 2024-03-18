import React, { useState, useEffect } from 'react';
import '../index.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,700,0,200" />
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
        <div className='sidebtn'>
        <div className='pr-subs'>
          <button className="bn-subs">Subscribe</button>
        </div>
          <button className="btn-custom">
            <span class="material-symbols-outlined">person</span>
          </button>
          <button className="btn-custom">
            <span class="material-symbols-outlined">notifications</span>
          </button>
          <button className="btn-custom">
            <span class="material-symbols-outlined">search</span>
          </button>
        
      </div>
    </div>
  );
}

export default Navbar;
