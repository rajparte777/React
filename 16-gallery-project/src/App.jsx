import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {
  const [data, setData] = useState([]) 
  useEffect(()=>{
      const getData=async ()=>{

    const resp =await axios.get('https://picsum.photos/v2/list?page=3&limit=')
    console.log(resp.data);
    setData(resp.data)
    
   
  }
    getData()
  },[])




  return (
    
       <div className='bg-gray-800 h-auto w-full px-3'>
          {/* <div>
             <button className='bg-lime-400 text-black text-xl rounded-2xl px-3 py-2 m-5 border-black' onClick={getData}>Get Data</button>
          </div> */}
          <div className='gap-10 flex flex-wrap '>
            {data.map((elem)=>(
              <div className='h-40 rounded-2xl '>
                <img src={elem.download_url } className='h-full ' alt="" />
                <h1 className='text-2xl text-white py-3'>{elem.author}</h1>
              </div>
            ))}
                
          </div>
       </div>
    
  )
}

export default App