import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (

  
      <div className='bg-cyan-800 text-white text-lg flex justify-between px-5 items-center h-[80px]'>
         <h2 className='text-5xl font-bold text-red-400 px-5'>YouTube</h2>
         <div className='flex gap-6 px-3 text-lg font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>AboutUs</Link>
        <Link to='/products'>Products</Link>
 
         </div>
        
    </div>

  )
}

export default Navbar