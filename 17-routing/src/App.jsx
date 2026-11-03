import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import contact from './pages/contact'

const App = () => {
  return (
 <div>
  
   <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<contact />} />
  </Routes>
    
 </div>
  )
}

export default App