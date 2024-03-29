// Bodycont.js
import React from 'react';
import { Link } from 'react-router-dom';
import Adbox from './adbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreePosts from './body2';
import Postlist from './postlist';
import Subsection from './subsection';

const dummyData = [
  {
    id: 1,
    title: "How advanced analytics and AI are saving lives",
    picture: "pi1.jpg"
  },
  {
    id: 2,
    title: "Ramadan Time Table: Imsak, Iftar timings across UAE",
    picture: "pic2.jpg"
  },
  {
    id: 3,
    title: "Video: Baltimore bridge collapses after ship collision",
    picture: "pic5.jpg"
  }
];



const dummyData1 = [
  {
    imgSrc: "tech-1.jpg",
    titleText: "Why UAE 'mobility' sector is seeing more startups, jobs"
  },
  {
    imgSrc: "tech-2.jpg",
    titleText: "Hublot reinvents watchmaking"
  },
  {
    imgSrc: "tech-3.jpg",
    titleText: "Debunked: You don't need to take 10k steps daily"
  },
  {
    imgSrc: "tech-4.jpg",
    titleText: "UAE tax alert: Watch out for transfer pricing rules"
  }
];

const dummyData2 = [
  {
    imgSrc: "child.jpg",
    titleText: "Why UAE 'mobility' sector is seeing more startups, jobs"
  },
  {
    imgSrc: "pi1.jpg",
    titleText: "Hublot reinvents watchmaking"
  },
  {
    imgSrc: "tech-3.jpg",
    titleText: "Debunked: You don't need to take 10k steps daily"
  },
  {
    imgSrc: "uae-4.jpg",
    titleText: "UAE tax alert: Watch out for transfer pricing rules"
  },
  {
    imgSrc: "uae-3.jpg",
    titleText: "Debunked: You don't need to take 10k steps daily"
  },
  {
    imgSrc: "uae-1.jpg",
    titleText: "UAE tax alert: Watch out for transfer pricing rules"
  }
];
const dummyData3 = {
  heading: "UAE",
  content: [
    {
      imgSrc: "uae-1.jpg",
      titleText: "McIlroy and Lowry to team up on PGA Tour"
    },
    {
      imgSrc: "uae-2.jpg",
      titleText: "Who are the stars of the LIV Golf League?"
    },
    {
      imgSrc: "uae-3.jpg",
      titleText: "Paul Casey reveals reasons for joining LIV Golf"
    },
    {
      imgSrc: "uae-4.jpg",
      titleText: "Bubba Watson’s advice for Masters rookies"
    },
    {
      imgSrc: "uae-5.jpg",
      titleText: "Yule wins Al Zorah Masters to book Challenge Tour start"
    },
    {
      imgSrc: "tech-1.jpg",
      titleText: "Tiger Woods listed in next month’s Masters field"
    },
  ]
};
function Bodycont({ headings, subHeadingPosts, simplePosts }) {
  return (
    <div className='container mt-5' style={{ width: '75%' }}>
      <Adbox />
      <div className='row mt-3 bodymain'>
        <div className='col-md-5 p1 '>
            <div className=''>
              {headings.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }}>
                  <div className=''>
                    <h3 className='p1Heading' >{post.title}</h3>
                    <p>{post.summary}</p>
                    <img className='img-fluid pimg' src={post.imageUrl} alt={post.title}  />
                  </div>
                </Link>
              ))}
            </div>
          
        </div>
        {/* Sub Heading Section */}
        <div className='col-md-3 p1'>
            <div className='p2'>
              {subHeadingPosts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className='post-link' style={{ textDecoration: 'none' }} >
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
      <ThreePosts body={dummyData} />
      <Postlist  className={"col-md-3"} body={dummyData1}/>
      <Postlist  className={"col-md-2"} body={dummyData2}/>
      <Subsection body={dummyData3}/>
      <Subsection body={dummyData3}/>
    </div>
  );
}

export default Bodycont;
