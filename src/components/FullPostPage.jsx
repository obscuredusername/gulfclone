import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from '../firebase/Firebase';

import Navbar from './navbar';
import Header from './header';
import Navbar2 from './navbar2';
import { navItems, navItem2, navItem3, body } from './data'; // Importing navItems from data file

function FullPostPage({ samplePosts }) {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const searchPostData = async () => {
      try {
        const db = getDatabase(app);
        const rootRef = ref(db);
        
        onValue(rootRef, (snapshot) => {
          const databaseData = snapshot.val();
          for (const category in databaseData.posts) {
            const postsInCategory = databaseData.posts[category];
            for (const postIdInCategory in postsInCategory) {
              const postData = postsInCategory[postIdInCategory];
              if (postIdInCategory === postId) {
                setPost(postData);
                return;
              }
            }
          }
        });
      } catch (error) {
        console.error('Error searching post data:', error);
      }
    };

    searchPostData();
  }, [postId]);

  return (
    <div>
      <Navbar navItems={navItems} />
      <Header title={post?.title || 'Loading...'} />
      <Navbar2 navItem2={navItem2} />
      <div style={{ padding: '20px', maxWidth: '100%', overflow: 'hidden' }}>
        {post ? (
          <div>
            <h2>{post.title}</h2>
            <img
              src={post.imageUrl}
              alt={post.title}
              style={{ width: '60%', height: 'auto', marginBottom: '10px' }}
            />
            <p>{post.summary}</p>
            <p>{post.description}</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default FullPostPage;
