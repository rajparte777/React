import React from 'react'
import { useContext } from 'react'
import { Link} from 'react-router-dom'
import { themeContextData } from '../pages/Themcontext'

const Navbar = () => {
   
   const [name,setName]= useContext(themeContextData)
  return (

  
      <div className='bg-cyan-800 text-white text-lg flex justify-between px-5 items-center h-[80px]'>
         <h2 className='text-5xl font-bold text-red-400 px-5'>{name}</h2>
         <div className='flex gap-6 px-3 text-lg font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>AboutUs</Link>
        <Link to='/products'>Products</Link>
     
     <button className='bg-green-500 px-3 py-2 border-2 rounded-2xl ' onClick={()=> setName('YOuTube')}> Change name  </button>
 
         </div>
        
    </div>

  )
}

export default Navbar