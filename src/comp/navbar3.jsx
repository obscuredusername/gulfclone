import React from 'react';
import '../index.css'; // Import your CSS file

function Navbar3() {
  const NavItem = ({ text, link }) => (
    <li className='nbr3-item'>
      <a href={link} className='nbr3-link'>
        {text}
      </a>
    </li>
  );

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    // Add more items as needed
  ];

  return (
    <div className='nbr3'>
      <nav className='nbr3-nav'>
        <ul className='nbr3-list'>
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} link={item.link} />
          ))}
        </ul>
        <button className='nbr3-bn'>Orange Button</button>
      </nav>
    </div>
  );
}

export default Navbar3;
