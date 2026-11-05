import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Products from './pages/Products'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Nav from './components/Nav'

const App = () => {

  

  return (
    <div className='bg-gray-900 h-screen'>
      <Navbar />
      <Nav />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/aboutus' element={<Aboutus />} />
         
           <Route path='/products' element={<Products />}> 
                <Route path='mens' element={<Mens />} />
                <Route path='womens' element={<Womens />} />
           </Route>
         </Routes>

      <Footer />
    </div>
  )
}

export default App