import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfkxE69-gv_KTAsHKWAm8CvKqM3uvoPbI",
  authDomain: "gulfclone-cf8bf.firebaseapp.com",
  projectId: "gulfclone-cf8bf",
  storageBucket: "gulfclone-cf8bf.appspot.com",
  messagingSenderId: "722140732733",
  appId: "1:722140732733:web:6db6c38ab08853d0903954",
  measurementId: "G-87XPNRWF8S"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app); // Export firestore from Firebase

export default app; // Export app as the default export
