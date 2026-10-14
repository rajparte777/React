import React, { useState } from 'react'

const App = () => {

  const [num, setfirst] = useState(0) 

 

  return (
   <>
    <div  id='h1'>
      <h1>{num}</h1> 
      
      </div>
      <div id='btn'>

      <button onClick={()=>{
        setfirst(num+1);
      }}>Increase</button>


      <button  onClick={()=>{
        if(num>0){
          setfirst(num-1);
        }
      }}>Decrease</button>


      <button onClick={()=>{
        setfirst(0);
      }}>Reset</button>


    </div></>
  )
}

export default App