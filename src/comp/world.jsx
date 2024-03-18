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
  const [bodyData, setBodyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const databaseRef = ref(db);

      console.log("Fetching data...");

      // Listen for changes to the 'uae' node in the database
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Data from Firebase:", data.news.world.world);
        setBodyData(data.news.world.world || []);
      });
    };

    // Call the fetchData function
    fetchData();
  }, []);

  console.log("Render - Body Data:", bodyData);

  return (
    <>
      <Navbar navItems={navItems} />
      <Header title={'WORLD'} />
      <Navbar2 navItem2={navItem2} />
      <Navbar3 navItem3={navItem3} />
      {/* Render Bodycont only if bodyData is not null */}
      {bodyData.length > 0 ? <Bodycont body={bodyData} /> : <p>Loading...</p>}
    </>
  );
}

export default World;
