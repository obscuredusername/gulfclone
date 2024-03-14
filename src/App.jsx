import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Main from './comp/main';
import UAE from './comp/uae';
import World from './comp/world';

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
         <Route path="/uae" element={<UAE />} />
         <Route path="/world" element={<World />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
