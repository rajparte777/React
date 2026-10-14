import React from 'react'

const Left = (props) => {
  return (

   
     
    <div className="left w-[68%] bg-amber-100 h-[80vh] flex overflow-x-auto " >
       {props.cards.map(( elem)=>{
        return(

        <div className="card relative w-[23%] bg-pink-300 h-[60vh] gap-5 mx-6 my-auto rounded-3xl shrink-0  min-w-[300px] overflow-hidden">
         
             <div className="absolute top-7 left-7 bg-white text-black text-xl rounded-full px-4 py-2 z-index-1" key ={elem.id}> {elem.id}</div>
           
             <div className="absolute bottom-9 px-4 text-white text-bold  mb-8">{elem.description}</div>
              <div className="but">
                <button className="absolute bottom-4 bg-purple-300 px-4 py-1 text-bold rounded-full left-3">{elem.buttonText}</button>
              </div>
            <img className="w-full h-full object-cover" src={elem.image} alt="" />
             
        </div>
           ) }
  )}
    </div>
  
  )
  }
  

export default Left