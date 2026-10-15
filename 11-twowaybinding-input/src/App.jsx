import React, { useState } from 'react'

const App = () => {
const [name, setfirst] = useState('')

 const sub =(e)=>{
       e.preventDefault();
      console.log(name);
      setfirst('');
 }

  return (
    <div>
     <form action="" onSubmit={(e)=>{
           sub(e);
     }}>

       <input type="text "
        value={name}
        onChange={(e)=>{
        //  console.log(e.target.value);
          setfirst(e.target.value);
        }}
        placeholder='Enter your name' />
       <button>Submit</button>


     </form>
    </div>
  )
}

export default App