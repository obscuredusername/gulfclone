import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Header from './header';
import Navbar2 from './navbar2';
import Navbar3 from './navbar3';
import Bodycont from './bodycont';
import { navItems, navItem2, navItem3, body } from './data'; // Importing navItems from data file
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase/Firebase'; // Adjust the path to Firebase.js if needed

function World() {
  const [headings, setHeadings] = useState([]);
  const [subHeadingPosts, setSubHeadingPosts] = useState([]);
  const [simplePosts, setSimplePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(app);
        const uaePostsRef = ref(db, 'posts/World');

        console.log("Fetching UAE posts...");

        onValue(uaePostsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Organize posts into separate arrays based on tags
            const headingsArray = [];
            const subHeadingPostsArray = [];
            const simplePostsArray = [];

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
            });

            setHeadings(headingsArray);
            setSubHeadingPosts(subHeadingPostsArray);
            setSimplePosts(simplePostsArray);
          } else {
            setHeadings([]);
            setSubHeadingPosts([]);
            setSimplePosts([]);
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

  return (
    <>
      <Navbar navItems={navItems} />
      <Header title={'UAE'} />
      <Navbar2 navItem2={navItem2} />
      {/* <Navbar3 navItem3={navItem3} /> */}
      {/* Render Bodycont only if posts have been fetched */}
      {loading ? <p>Loading...</p> : <Bodycont headings={headings} subHeadingPosts={subHeadingPosts} simplePosts={simplePosts} />}
    </>
  );
}

export default World;
