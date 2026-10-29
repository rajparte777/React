import {useEffect, useState} from 'react'


const App = () => {

  const [a, setA] = useState(0)
  useEffect(function(){
     console.log('useEffect is clicked');
  },[]
  )

  function aclick(){
    console.log('buttonclicked');
    setA(a+1);
  }
  function bclick(){
    console.log('buttonclicked');
    setA(a+1);
  }

  return (
    <>
    <h1>{a}</h1>
    <button onClick={aclick}>Click</button>
    
    <button onClick={bclick}>Click</button>
    
    </>
  )
}

export default App