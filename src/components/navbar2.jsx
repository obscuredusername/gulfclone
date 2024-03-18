import React from 'react';
import '../index.css'; // Import your CSS file

function Navbar2({navItem2}) {
  const NavItem = ({ text, link }) => (
    <li className='nbr2-item'>
      <a href={link} className='nbr2-link'>
        {text}
      </a>
    </li>
  );

  

  return (
    <div className='nbr2'>
      <nav className='nbr2-nav'>
        <ul className='nbr2-list'>
          {navItem2.map((item, index) => (
            <NavItem  key={index} text={item.text} link={item.link} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar2;
