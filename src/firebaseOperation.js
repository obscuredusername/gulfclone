// firebaseOperations.js

import { app } from './firebase/Firebase';
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

// Function to store the data in Firebase
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
