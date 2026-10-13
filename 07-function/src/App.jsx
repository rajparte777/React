import React from 'react'

const App = () => {

function sun(elem){
  console.log(CustomElementRegistry.value);
  
}

 
  return (
<>
    <div className="main">
      <input onChange={sun} type="text" placeholder='Inputs'  />
      <button onClick={()=>{
        console.log("button click");
      }}>Submit</button>
   
   
    </div>
    <div className="box" onMouseMove={(elem)=>{
         console.log(elem.screenX);
    }}>
    
   </div>

       <div className="div" onScroll={(ele)=>{
       console.log(elem.currentTarget.scrollTop);
       }}>
         <div className="box1" >   Box1  </div>  
         <div className="box2" >   Box2  </div>  
         <div className="box3" >   Box3  </div>  
        </div>  
   </>
  )
}

export default App