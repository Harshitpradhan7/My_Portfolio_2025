import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
       
      </div>
    </>
  )
}

export default App
