import React, { useState, useEffect } from 'react';
import '../index.css'; // Import your CSS file

function Navbar3({ navItem3 }) {
  const [isMobile, setIsMobile] = useState(false);

  const NavItem = ({ text, link }) => (
    <li className='nbr3-item'>
      <a href={link} className='nbr3-link'>
        {text}
      </a>
    </li>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile view starts at 768px width
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='nbr3'>
      <nav className='nbr3-nav'>
        <ul className={`nbr3-list ${isMobile ? 'd-none d-md-block' : ''}`}>
          {navItem3.map((item, index) => (
            <NavItem key={index} text={item.text} link={item.link} />
          ))}
        </ul>
        <button className={`nbr3-bn ${isMobile ? 'btn btn-warning btn-block d-block d-md-none' : ''}`} style={{ width: isMobile ? '100%' : 'auto',backgroundColor: '#9c0331',color:'white' }}>
         {isMobile ? 'Orange Button' : 'Desktop Button'}
        </button>
      </nav>
    </div>
  );
}

export default Navbar3;
