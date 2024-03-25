// Bodycont.js
import React from 'react';
import { Link } from 'react-router-dom';
import Adbox from './adbox';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bodycont({ headings, subHeadingPosts, simplePosts }) {
  return (
    <div className='container mt-5'>
      <Adbox />
      <div className='row mt-3 bodymain'>
        {/* Heading Section */}
        <div className='col-md-12'>
          <div className='heading-section'>
            <h2 className='heading'>Headings</h2>
            <div className='posts'>
              {headings.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link'>
                  <div className='post'>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <img className='img-fluid' src={post.imageUrl} alt={post.title} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Sub Heading Section */}
        <div className='col-md-12'>
          <div className='sub-heading-section'>
            <h2 className='sub-heading'>Sub Heading Posts</h2>
            <div className='posts'>
              {subHeadingPosts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link'>
                  <div className='post'>
                    <h3>{post.title}</h3>
                    <h5>{post.summary}</h5>
                    <img className='img-fluid' src={post.imageUrl} alt={post.title} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Simple Post Section */}
        <div className='col-md-12'>
          <div className='simple-post-section'>
            <h2 className='simple-post'>Simple Posts</h2>
            <div className='posts'>
              {simplePosts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link'>
                  <div className='post'>
                    <h3>{post.title}</h3>
                    <h6>{post.summary}</h6>
                    <img className='img-fluid' src={post.imageUrl} alt={post.title} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodycont;
