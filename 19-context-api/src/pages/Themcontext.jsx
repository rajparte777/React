
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'



 export const themeContextData = createContext()

const Themcontext = (props) => {

    const [name, setName] = useState('Tom')
  return (
    <div>
 <themeContextData.Provider value={[name,setName]}>
    {props.children}
 </themeContextData.Provider>
    </div>
  )
}

export default Themcontext


















// Manual way of passing child data to parent

// import React from 'react'

// const Themcontext = (props) => {


    
//   return (
//     <div>
//         {props.children}
//     </div>
//   )
// }

// export default Themcontext