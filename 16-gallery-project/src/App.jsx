
import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
 const [index, setIndex] = useState(1)

  useEffect(()=>{
 const getData = async () => {
    const resp = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    )

    console.log(resp.data)
    setData(resp.data)
  }
 getData()
  },[index])

 

  return (
    <div className='p-5 bg-gray-800 min-h-screen'>
              {/* <h1 className='fixed bg-black rounded text-5xl text-white'>{index}</h1> */}
      {/* <div>
        <button   className='px-4 py-2 bg-lime-400 text-2xl text-black border-2 rounded-2xl' onClick={getData} >   Get Data </button>
      </div> */}

      <div className="main mt-4 flex flex-wrap gap-8">
        {data.map((elem) => (
          <div key={elem.id} className='w-50 mt-3'>
    
            <div className='h-40 rounded-xl overflow-hidden'>
              <img  className='h-full w-full object-cover'  src={elem.download_url}  alt={elem.author}     />
            </div>

            <div className='py-2'>
              <h3 className='text-white font-bold'>   {elem.author}
              </h3>
            </div>
            

          </div>

        ))}


      </div>
            <div className='mt-4 flex justify-center items-center'>
              <button className='px-3 py-2 font-bold bg-yellow-300 rounded-2xl border-2 cursor-pointer' onClick={()=>{
                console.log("previous button");
                if(index>1){
                  setIndex(index-1)
                }

              }}>Previous</button>
              <span className='text-white font-bold'>{'page no  '  + index}</span>
              <button className='px-5 my-2 mx-4 cursor-pointer py-2 font-bold bg-yellow-300 rounded-2xl border-2' onClick={()=>{
       console.log("next button");
       setIndex(index+1)
              }}>Next</button>
              
            </div>
    </div>
  )
}

export default App
