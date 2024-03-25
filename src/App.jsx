import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UAE from './components/Uae';
import Main from './components/Main';
import World from './components/world';
import Ujobs from './components/ujob';
import Tech from './components/tech';
import Sports from './components/Sports';
import CreatePost from './components/createpost';
import FullPostPage from './components/FullPostPage';

const samplePosts = [
  {
    id: '1',
    title: 'Post 1',
    imageUrl: 'https://example.com/image1.jpg',
    summary: 'Summary of post 1',
    description: 'Description of post 1',
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/uae" element={<UAE />} />
        <Route path="/world" element={<World />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Ujobs" element={<Ujobs />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/admin" element={<CreatePost />} />
        {/* Pass samplePosts array as a prop to FullPostPage */}
        <Route path="/post/:postId" element={<FullPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
