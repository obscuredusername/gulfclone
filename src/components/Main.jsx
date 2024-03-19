import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Header from './header';
import Navbar2 from './navbar2';
import Navbar3 from './navbar3';
import Bodycont from './bodycont';
import { navItems, navItem2, navItem3, body } from './data'; // Importing navItems from data file
import Footer from './footer';
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../firebase/Firebase'; // Adjust the path to Firebase.js if needed

function Main() {
  const [bodyData, setBodyData] = useState([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const databaseRef = ref(db);

      console.log("Fetching data...");

      // Listen for changes to the 'uae' node in the database
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Data from Firebase:", data.news.uae.uae);
        setBodyData(data.news.uae.uae || []);
      });
    };

    // Call the fetchData function
    fetchData();

    // Check if viewport is mobile on initial render
    setIsMobile(window.innerWidth <= 768);

    // Event listener to check if viewport changes to mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log("Render - Body Data:", bodyData);

  return (
    <>
      <Navbar navItems={navItems} />
      <Header title={'SHARJA'} />
      {isMobile ? null : <Navbar2 navItem2={navItem2} />}
      <Navbar3 navItem3={navItem3} />
      <Bodycont className="end" body={body} />
      <Footer />
    </>
  );
}

export default Main;
