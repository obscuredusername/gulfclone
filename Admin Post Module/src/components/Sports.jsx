import React from 'react';
import Navbar from './navbar';
import Header from './header';
import Navbar2 from './navbar2';
import Navbar3 from './navbar3';
import Bodycont from './bodycont';
import { navItems,navItem2,navItem3,body } from './data'; // Importing navItems from data file

function Sports() {
  return (
    <>
      <Navbar navItems={navItems} /> 
      <Header  title={'Sports'}/>
      <Navbar2 navItem2={navItem2}/>
      <Navbar3 navItem3={navItem3} />
      <Bodycont body={body}/>
    </>
  );
}

export default Sports;
