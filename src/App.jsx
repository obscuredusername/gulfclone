import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './comp/navbar'
import Header from './comp/header'
import Navbar2 from './comp/navbar2'
import Navbar3 from './comp/navbar3'
import Adbox from './comp/adbox'
import Bodycont from './comp/bodycont'
import Postlist from './comp/postlist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Header/>
     <Navbar2/>
     <Navbar3/>
     <Bodycont/>      
    </>
  )
}

export default App
