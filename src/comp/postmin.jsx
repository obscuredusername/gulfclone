import React from 'react';
import Postcard from './postard'; // Adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const postcardData = [
  {
    imgSrc: '/pi1.jpg',
    titleText: 'Post 1',
  },
  {
    imgSrc: '/pic2.jpg',
    titleText: 'Post 2',
  },
  {
    imgSrc: '/pic3.jpg',
    titleText: 'Post 3',
  },
  {
    imgSrc: '/pic4.jpg',
    titleText: 'Post 4',
  },
  {
    imgSrc: '/pic3.jpg',
    titleText: 'Post 3',
  },
  {
    imgSrc: '/pic4.jpg',
    titleText: 'Post 4',
  },
  
];

const Postmin = () => {
  return (
    <div className="container">
      <div className="row bodymain  post">
        {postcardData.map((postcard, index) => (
          <div key={index} className="col-md-2">
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

export default Postmin;
