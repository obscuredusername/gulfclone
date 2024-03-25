// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEx_xKLLMkzf7POFq1Xs0HuNNAdul98F4",
  authDomain: "gulfnews-cae96.firebaseapp.com",
  projectId: "gulfnews-cae96",
  storageBucket: "gulfnews-cae96.appspot.com",
  messagingSenderId: "127551642565",
  appId: "1:127551642565:web:d54164d5e771ffc6a649ac",
  measurementId: "G-2JMZCHHDTL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }; // Export the app instance