import { getDatabase, ref, push, set } from "firebase/database";
import { app } from './firebase/Firebase'; // Update the path accordingly

const db = getDatabase(app);

// Function to add a new post to Firebase
export const addPostToFirebase = (category, postData) => {
  try {
    // Get a reference to the posts node in the database
    const postsRef = ref(db, `posts/${category}`);

    // Push the new post data to generate a unique key
    const newPostRef = push(postsRef);

    // Set the data under the unique key
    set(newPostRef, postData);

    console.log('Post added successfully to Firebase!');
  } catch (error) {
    console.error('Error adding post to Firebase:', error);
    throw error; // Throw the error for handling in the caller function
  }
};
