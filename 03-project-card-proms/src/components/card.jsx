import React from 'react'
import {Bookmark} from 'lucide-react'


const card = (promps) => {
  return (
    <div className="card">

               <div className="topo">
                <img src="https://images.seeklogo.com/logo-png/30/2/amazon-logo-png_seeklogo-302130.png" alt="" />
                <button>Save <Bookmark /></button>
               </div>
               <div className="center">
                <h3>{promps.company}  <span>5 Days Ago</span></h3>
                <h2>{promps.post}</h2>
                <div>
                  <h4>{promps.tag1}</h4>
                  <h4>{promps.tag2}</h4>
                </div>
               </div>
               <div className="bottom">
                <div>
                  <h3>{promps.pay}</h3>
                  <p>{promps.loation}</p>
                </div>
                <button>Apply Now</button>
               </div>
        
        
           

    </div>
  )
}

export default card