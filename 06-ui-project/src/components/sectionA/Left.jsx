import React from 'react'

const Left = () => {
  return (
    <div className="left w-[75%] bg-amber-100 h-[80vh] flex " >

        <div className="card relative w-[23%] bg-pink-300 h-[60vh] gap-5 mx-6 my-auto rounded-3xl object-fit overflow-hidden">
             <div className="absolute top-7 left-7 bg-white text-black text-xl rounded-full px-4 py-2 z-index-1"> 1</div>
           
             <div className="absolute bottom-9 px-4 text-white text-bold  mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit architecto laudantium sit nisi illum quae corporis repellendus quod magni.</div>
              <div className="but">
                <button className="absolute bottom-4 bg-purple-300 px-4 py-1 text-bold rounded-full left-3">Satisfied</button>
              </div>
            <img src="https://i.pinimg.com/474x/69/c9/f0/69c9f0889f8c0c2c065f37178d001f0e.jpg" alt="" />
             
        </div>
    </div>
  )
}

export default Left