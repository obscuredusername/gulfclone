import React from 'react';
import Postcard from './postard'; // Adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const postcardData = [
  {
    imgSrc: '/pi1.jpg',
    titleText: 'Beat the rush and fines: 8 Dubai Metro rules',
  },
  {
    imgSrc: '/pic2.jpg',
    titleText: 'Ramadan in UAE: Give to charities, not street beggars',
  },
  {
    imgSrc: '/pic3.jpg',
    titleText: 'How to handle Ramadan challenges on UAE roads',
  },
  {
    imgSrc: '/pic4.jpg',
    titleText: 'Fireworks, food and fun during #RamadaninDubai',
  }
];

const Postlist = ({classnme}) => {
  return (
    <div className="container">
      <div className="row bodymain">
        {postcardData.map((postcard, index) => (
          <div key={index} className={classnme}>
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
