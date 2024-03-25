import React from 'react';
import Postlist from './postlist'; // Import the Postlist component

const Subsection = ({ body }) => { // Destructure the body prop
  const { heading, content } = body; // Destructure the heading and content from the body object

  return (
    <div className='container mt-5 sbsect'>
      <div className='row post'>
        <p className='sb-title'>{heading}</p> {/* Access the heading */}
        <Postlist className={'col-md-2'} body={content} /> {/* Pass content as body to Postlist */}
      </div>
    </div>
  );
};

export default Subsection;
