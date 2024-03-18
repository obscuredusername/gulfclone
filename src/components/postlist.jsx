import React from 'react';
import Postcard from './postard'; // Adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Postlist = ({ className, body }) => { // Combine props into a single object
  return (
    <div className="container">
      <div className="row bodymain">
        {body.map((postcard, index) => (
          <div key={index} className={className}> {/* Use className from props */}
            <Postcard
              imgSrc={postcard.imgSrc}
              titleText={postcard.titleText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postlist;
