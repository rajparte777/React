import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState("")
const [text, setText] = useState("")
const [notes, setNotes] = useState([])



const click =(e)=>{
  e.preventDefault();
  console.log('click');
const card =[...notes]
card.push({
  title : title,
  text:text

});
    setNotes(card);
   setTitle('');
   setText('');
    
}

  return (
    <div className='w-full h-screen  p-5  flex    gap-4 bg-gray-800'>
           <div className="title flex flex-col  w-1/3 ">
            <h1 className='font-bold text-4xl mb-3 text-white'>Add Notes</h1>

            <form className='' action="">

        {/* INPUT  DETAIL */}
             <input className='item w-full border-none my-3 text-xl  px-2 py-3 bg-mist-100 rounded-lg'
              type="text"
               placeholder='Enter Notes Heading'
               value={title}
               onChange={(e)=>{
                    
                      setTitle(e.target.value)
                      console.log("input");
               }}
            />

             {/* DETAIL TEXT */}
             <textarea 
             className='border w-full rounded-lg my-4 px-3 h-[100px] text-xl pt-2 bg-mist-100' 
             name="" id=""
              placeholder='Write Detail Here...'
              value={text}
              onChange={(e)=>{
                      setText(e.target.value);
                      console.log("details");
               }}
              >
              </textarea>
             
             {/* BUTTON TO SUBMIT */}
             <button className='border w-full rounded-lg py-2 font-bold bg-gray-600 text-white hover:bg-gray-950' onClick={(e)=>{
               click(e);
               
             }}>Add Notes</button>
            </form>
           </div>

           {/* DIV2 */}
           
          <div className="notes flex flex-wrap border-l-2 gap-4    w-3/4 p-4">
              
                
             {notes.map((elem,index)=>{
             return(
               <div className="card w-[200px] h-[200px] relative bg-amber-100 p-2 rounded-2xl" key={index}> 
                  <h1 className='text-2xl font-bold leading-tight px-1'>{elem.title}</h1>
                  <p className='text-xl text-gray-500 mt-1 px-1'>{elem.text}</p>
               </div>

             )
              

             })}
          
            
           
          </div>

    </div>
  )
}

export default App