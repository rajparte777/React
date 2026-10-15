
//changing the value using usestate from object

// import React, { useState } from 'react'

// const App = () => {
//   const [first, setfirst] = useState({user:'raj',age:30})
//  const click =()=>{
      
//             const change ={...first}
//             change.user ='tom';
//             change.age =21;
//             setfirst(change);

//  }
//   return (
//  <>

//        <h1>{first.user},{first.age}</h1>
  
//       <button onClick={click}>Submit</button>
 
//  </>
//   )
// }

// export default App







//changing the value using usestate from array[]
// import React, { useState } from 'react'

// const App = () => {
 
//    const [num, setnum] = useState([10,20,30])
//     const arr =()=>{
//       console.log('click');
//       const arr2= [...num];
//       arr2.push(40);
//       setnum(arr2);
//     }


//   return (
//     <div>
//       <h1>{num.map((elem)=>{
//                 return elem;
//       })}</h1>
//       <button onClick={arr}>Submit</button>
//     </div>
//   )
// }

// export default App






//changing the value using usestate from Batch[]

import React, { useState } from 'react'

const App = () => {
 const [num, setnum] = useState(10)

//without using batch
// const batch =()=>{
//   setnum(num+1);
//   setnum(num+1);
//   setnum(num+1);
// }


  const batch =()=>{
    setnum(prev =>(prev +2));
    setnum(prev=>(prev +2));
    setnum(prev =>(prev +2));

  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={batch}>Submit</button>
    </div>
  )
}

export default App