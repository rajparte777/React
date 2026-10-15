import React from 'react'

const App = () => {

const submit =(e)=>{
  e.preventDefault();
  console.log("form submit");

}

  return (
    <div>

      <form action="" onSubmit={(e)=>{
        submit(e);
      }}>
        <input type="text" placeholder='enter your name' name="" id="" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App