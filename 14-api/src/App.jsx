import React from 'react'


 function response(){

     fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(resp => resp.json())
    .then(user=> console.log(user))


    // const a =await data.json();
    // console.log(a);
    // console.log(data);
}

const App = () => {
  return (
<>
  <button onClick={response}>Button</button>
 
  </>
  )
}

export default App