import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ThreePosts() {
  const posts = [
    {
      id: 1,
      title: 'vivo V30 brings studio-like portrait photography to you',
      picture: '/pic4.jpg', // Replace with the correct relative path
    },
    {
      id: 2,
      title: 'Episode 2: Gulf News ‘Your Ramadan Table’ food show',
      picture: '/pic5.jpg', // Replace with the correct relative path
    },
    {
      id: 3,
      title: 'Tell Me Why Ramadan is the perfect time to donate',
      picture: '/pic4.jpg', // Replace with the correct relative path
    },
  ];

  return (
    <div className='container mt-5'>
      <div className='row bodymain'>
        {posts.map(post => (
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
