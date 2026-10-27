import React from 'react'

const App = () => {

  //  const a =localStorage.setItem('user','raj')
  //  const b=localStorage.setItem('user','joy')

  // const get =localStorage.getItem('user')
  //  console.log(get);
   
//  localStorage.clear()
   
   const user ={
    'name' : 'raj',
    age : 21
   }
   localStorage.setItem('user',JSON.stringify(user));
    const z= JSON.parse(localStorage.getItem('user'))
   console.log(z);

  return (
    <div>App</div>
  )
}

export default App