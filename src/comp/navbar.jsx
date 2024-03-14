import React from 'react';
import '../index.css';

function Navbar({navItems}) {
  

  const renderNavItems = () => {
    return navItems.map((item, index) => (
      <a key={index} href={item.link} className='nav-link'>
        {item.text}
      </a>
    ));
  };

  return (
    <div className='nbr'>
      <p className='nbr-coupon'>Coupons</p>
      <div className='nbr-bn'>
        {renderNavItems()}
      </div>
    </div>
  );
}

export default Navbar;
