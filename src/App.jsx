import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Main from './comp/main';
import Uae from '../src/comp/Uae';
import World from './comp/world';
import Sports from './comp/Sports';
import Ujobs from './comp/ujob';
import Tech from './comp/tech';

function App() {


  return (
    <BrowserRouter>
        <Routes>
         <Route path="/" element={<Main/>} />
         <Route path="/uae" element={<Uae />} />
         <Route path="/world" element={<World />} />
         <Route path="/Sports" element={<Sports/>} />
         <Route path="/Ujobs" element={<Ujobs/>} />
         <Route path="/tech" element={<Tech/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
