import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Header from './header';
import Navbar2 from './navbar2';
import Navbar3 from './navbar3';
import Bodycont from './bodycont';
import { navItems, navItem2, navItem3 } from './data'; // Importing navItems from data file
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase/Firebase'; // Adjust the path to Firebase.js if needed

function Sports() 
{
  const [headings, setHeadings] = useState([]);
  const [subHeadingPosts, setSubHeadingPosts] = useState([]);
  const [simplePosts, setSimplePosts] = useState([]);
  const [threePost1, setthreePost1] = useState([]);
  const [threePost2, setthreePost2] = useState([]);
  const [threePost3, setthreePost3] = useState([]);
  const [threePost4, setthreePost4] = useState([]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(app);
        const uaePostsRef = ref(db, 'posts/Sports');

        console.log("Fetching UAE posts...");

        onValue(uaePostsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Organize posts into separate arrays based on tags
            const headingsArray = [];
            const subHeadingPostsArray = [];
            const simplePostsArray=[];
            const threeP1 = [];
            const threeP2 = [];
            const threeP3 = [];
            const threeP4 = [];

            Object.keys(data).forEach(key => {
              const post = {
                id: key,
                ...data[key]
              };
              if (post.tags === "Heading") {
                headingsArray.push(post);
              } else if (post.tags === "Sub Heading Post") {
                subHeadingPostsArray.push(post);
              } else if (post.tags === "Simple Post") {
                simplePostsArray.push(post);
              }
              else if (post.tags === "Three Post 1") {
                threeP1.push(post);
              }
              else if (post.tags === "Three Post 2") {
                threeP2.push(post);
              }
              else if (post.tags === "Three Post 3") {
                threeP3.push(post);
              }
              else if (post.tags === "Three Post 4") {
                threeP4.push(post);
              }


            });

            setHeadings(headingsArray);
            setSubHeadingPosts(subHeadingPostsArray);
            setSimplePosts(simplePostsArray);
            setthreePost1(threeP1);
            setthreePost2(threeP2);
            setthreePost3(threeP3);
            setthreePost4(threeP4);



          } else {
            setHeadings([]);
            setSubHeadingPosts([]);
            setSimplePosts([]);
            setthreePost1([]);
            setthreePost2([]);
            setthreePost3([]);
            setthreePost4([]);
          }
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching UAE posts:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Render - Headings:", headings);
  console.log("Render - Sub Heading Posts:", subHeadingPosts);
  console.log("Render - Simple Posts:", simplePosts);
  console.log("Render - Simple Posts 1:", threePost1);
  console.log("Render - Simple Posts 2:", threePost2);
  console.log("Render - Simple Posts 3:", threePost3);
  console.log("------------------------<>-------------------------");

  return (
    <>
      <Navbar navItems={navItems} />
      <Header title={'World'} />
      <Navbar2 navItem2={navItem2} />
      {/* <Navbar3 navItem3={navItem3} /> */}
      {/* Render Bodycont only if posts have been fetched */}
      {loading ? <p>Loading...</p> : <Bodycont headings={headings} 
      subHeadingPosts={subHeadingPosts} simplePosts={simplePosts} 
      threePosts1={threePost1} 
      threePosts2={threePost2} 
      threePosts3={threePost3} 
      />}
    </>
  );
}

export default Sports;
