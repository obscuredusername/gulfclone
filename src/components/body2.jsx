import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThreePosts({body}) {

  return (
    <div className='container mt-5'>
      <div className='row bodymain'>
        {body.map(post => (
          <div key={post.id} className='col-4'>
            <div className='' style={{ position: 'relative' }}>
              <div style={{ display: 'flex' }}>
                <img className='p2ig' src={post.picture} alt={post.title} />
                <p className='p2heading'>{post.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreePosts;
