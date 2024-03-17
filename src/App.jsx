import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Main from './comp/main';
import UAE from './comp/uae';
import World from './comp/world';
import Sports from './comp/Sports';
import Ujobs from './comp/ujob';
import Tech from './comp/tech';

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
         <Route path="/uae" element={<UAE />} />
         <Route path="/world" element={<World />} />
         <Route path="/Sports" element={<Sports/>} />
         <Route path="/Ujobs" element={<Ujobs/>} />
         <Route path="/tech" element={<Tech/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
