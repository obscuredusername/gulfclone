import React from 'react';
import Adbox from './adbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body2 from './body2';
import Postlist from './postlist';
import Subsection from './subsection';

function Bodycont({ body }) {


  console.log("malikkkkkkkkkkkkkk")
  console.log(body)

  return (
    <div className='container mt-5' style={{ maxWidth: '75%' }}>
      <Adbox />
      <div className='row mt-3 bodymain'>
        <div className='col-md-5'>
          {body && body[0] && body[0].map(post => ( // Accessing column1Data
            <div className='p-3 p1' key={post.id}>
              <h3 className='p1Heading'>{post.title}</h3>
              <p className='p1Sum'>{post.summary}</p>
              <img className='img-fluid pimg' src={post.picture} alt={post.title} />
            </div>
          ))}
        </div>
        <div className='col-md-3 p1'>
          {body && body[1] && body[1].map(post => ( // Accessing column2Data
            <div className='p-3 p2' key={post.id}>
              <h3>{post.title}</h3>
              <img className='img-fluid pimg' src={post.picture} alt={post.title} />
            </div>
          ))}
          {body && body[2] && body[2].map(post => ( // Accessing additionalPosts
            <div className='p-3 p2headin' key={post.id}>
              <h3 className='p2heading'>{post.title}</h3>
            </div>
          ))}
        </div>
        <div className='col-md-3'></div>
      </div>
      {/* <Body2 body={body[3]} /> */}
      <Postlist className={'col-md-3'} body={body[4]} />
      <Postlist className={'col-md-2'} body={body[5]} />

      <Subsection body={body[6]} />
      <Subsection body={body[7]} />
    </div>
  );
}

export default Bodycont;