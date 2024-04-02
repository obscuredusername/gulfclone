// firebaseOperations.js

import { app } from './firebase/Firebase';
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

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

export const storeDataInFirebase = (data) => {
  try {
    // Reference to the root of your Firebase Realtime Database
    const databaseRef = ref(db);

    // Set the data under the root reference
    set(databaseRef, data);

    console.log('Data stored successfully in Firebase!');
  } catch (error) {
    console.error('Error storing data in Firebase:', error);
  }
};
