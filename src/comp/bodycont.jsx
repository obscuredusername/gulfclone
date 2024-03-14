import React from 'react';
import Adbox from './adbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body2 from './body2';
import Postlist from './postlist';
import Postmin from './postmin';

function Bodycont() {
  const column1Data = [
    {
      id: 1,
      title: 'Parkin hikes retail IPO shares amid over-subscription',
      summary: 'Displaced families prepare to spend holy month in Rafah amid food shortages',
      picture: '/pi1.jpg', // Use the correct relative path
    }
  ];

  const column2Data = [
    {
      id: 2,
      title: 'Photos: Gazans end fast without joy of Ramadan',
      summary: 'This is the summary of the first post in Column 2.',
      picture: '/pic2.jpg', // Use the correct relative path
    },
    
  ];

  const additionalPosts = [
    { id: 3, title: 'Live snake, monkey’s hand, amulets seized in Dubai' },
    { id: 4, title: 'Ramadan Time Table: Imsak and Iftar timings across UAE' },
  ];

  return (
    <div className='container mt-5 ' style={{ maxWidth: '75%' }}>
      <Adbox />
      <div className='row mt-3 bodymain'>
        <div className='col-md-5'>
          {column1Data.map(post => (
            <div className='p-3 p1' key={post.id}>
              <h3 className='p1Heading'>{post.title}</h3>
              <p className='p1Sum'>{post.summary}</p>
              <img className='img-fluid pimg' src={post.picture} alt={post.title} />
            </div>
          ))}
        </div>
        <div className='col-md-3 p1'>
          {column2Data.map(post => (
            <div className='p-3 p2' key={post.id}>
              <h3>{post.title}</h3>
              <img className='img-fluid pimg' src={post.picture} alt={post.title} />
            </div>
          ))}
          {additionalPosts.map(post => (
            <div className='p-3 p2headin' key={post.id}>
              <h3 className='p2heading'>{post.title}</h3>
            </div>
          ))}
        </div>
        <div className='col-md-3'>
            
        </div>
        
      </div>
      <Body2/>
      <Postlist classnme={'col-md-3'}/>
      <Postmin/>
      <Postmin/>

    </div>
  );
}

export default Bodycont;
