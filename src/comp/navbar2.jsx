import React from 'react';
import '../index.css'; // Import your CSS file

function Navbar2() {
  const NavItem = ({ text, link }) => (
    <li className='nbr2-item'>
      <a href={link} className='nbr2-link'>
        {text}
      </a>
    </li>
  );

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    
    // Add more items as needed
  ];

  return (
    <div className='nbr2'>
      <nav className='nbr2-nav'>
        <ul className='nbr2-list'>
          {navItems.map((item, index) => (
            <NavItem  key={index} text={item.text} link={item.link} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar2;
