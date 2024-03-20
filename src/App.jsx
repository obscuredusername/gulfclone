import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {UAE,Main} from "./components";

import UAE from "./components/Uae"
import Main from "./components/Main"
import World from "./components/world"
import Ujobs from "./components/ujob"
import Tech from "./components/tech"
import Sports from "./components/Sports"
import CreatePost from "./components/createpost";

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
        <Route path="/admin" element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
