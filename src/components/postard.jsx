import React, { useState } from 'react';

const Postcard = ({  imgSrc, titleText }) => {
  

  return (
    <div
      style={{marginTop: '10px', borderRight:'1px solid #ccc ' }}
      className='post'
    >
      <img
        src={imgSrc} // Take the image source as a prop
        alt="Resizable Image"
        style={{ width: '90%',paddingLeft:'0px' ,height: 'auto',borderTop:'3px solid #e56501' }}
      />
      <h4 style={{ textAlign: 'center', margin: '10px ' }}>{titleText}</h4>
    </div>
  );
};

export default Postcard;
