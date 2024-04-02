import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main"
import Login from "./components/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
