// Bodycont.js
import React from 'react';
import { Link } from 'react-router-dom';
import Adbox from './adbox';
import 'bootstrap/dist/css/bootstrap.min.css';

import ThreePosts from './body2';
import Postlist from './postlist';
import Subsection from './subsection';




function Bodycont({ headings, subHeadingPosts, simplePosts, threePosts1, threePosts2, threePosts3 }) {
  
  console.log("here in this Body cont ::ss", threePosts1)
  return (
    <div className='container mt-5' style={{ width: '75%' }}>
      <Adbox />
      <div className='row mt-3 bodymain'>
        <div className='col-md-5 p1 '>
          <div className=''>
            {headings.map(post => (
              <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                <div className=''>
                  <h3 className='p1Heading'>{post.title}</h3>
                  <p>{post.summary}</p>
                  <img className='img-fluid pimg' src={post.imageUrl} alt={post.title} />
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Sub Heading Section */}
        <div className='col-md-3 p1'>
          <div className='p2'>
            {subHeadingPosts.map(post => (
              <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                <div className=''>
                  <h3 className='fntfam'>{post.title}</h3>
                  <h5>{post.summary}</h5>
                  <img className='img-fluid pimg' src={post.imageUrl} alt={post.title} />
                </div>
              </Link>
            ))}
          </div>
          <div className='simple-post-section p2'>
            <div className='posts'>
              {simplePosts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                  <div className=''>
                    <h3 className='fntfam'>{post.title}</h3>
                    <h6>{post.summary}</h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className='simple-post-section '>
            <div className='posts'>
              {simplePosts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                  <div className=''>
                    <h3 className='fntfam'>{post.title}</h3>
                    <h6>{post.summary}</h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mapping over additional arrays */}
      {/* {threePosts1 && <ThreePosts body={threePosts1} />}
      {threePosts2 && <Postlist className={"col-md-3"} body={threePosts2} />}
      {threePosts3 && <Postlist className={"col-md-2"} body={threePosts3} />} */}

        <div className='simple-post-section '>
            <div className='posts threeP1'>
              {threePosts1.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                  <div className=''>
                    <h3 className='fntfam'>{post.title}</h3>
                  <img className='img-fluid pimg' src={post.imageUrl} alt={post.title} />

                    <h6>{post.summary}</h6>
                  </div>
                </Link>
              ))}
            </div>
        </div>
        <hr/>


        <div className='simple-post-section '>
            <div className='posts threeP1'>
              {threePosts2.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                  <div className=''>
                    <h3 className='fntfam'>{post.title}</h3>
                  <img className='img-fluid pimg' src={post.imageUrl} alt={post.title} />

                    <h6>{post.summary}</h6>
                  </div>
                </Link>
              ))}
            </div>
        </div>
        <hr/>


        <div className='simple-post-section '>
            <div className='posts threeP1'>
              {threePosts3.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                  <div className=''>
                    <h3 className='fntfam'>{post.title}</h3>
                  <img className='img-fluid pimg' src={post.imageUrl} alt={post.title} />

                    <h6>{post.summary}</h6>
                  </div>
                </Link>
              ))}
            </div>
        </div>
        <hr/>



    </div>
  );
}

export default Bodycont;


