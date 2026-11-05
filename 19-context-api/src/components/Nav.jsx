import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  let navigation =useNavigate()
 function nav(){
    navigation('/')
 }



  return (
    <div className='h-[80px] flex items-center bg-black'>

        <button onClick={nav}  className='bg-lime-400 font-bold px-4 py-2 border-2 mr-3 '>Return to Home</button>
        <button onClick={()=>{
            navigation(-1)
        }} className='bg-lime-400 font-bold px-4 py-2 border-2 text-red-600 mr-3 '>Back</button>

         <button onClick={()=>{
            navigation(+1)
         }} className='bg-lime-400 font-bold px-4 py-2 border-2 text-red-600'>Next</button>
    </div>
  )
}

export default Nav