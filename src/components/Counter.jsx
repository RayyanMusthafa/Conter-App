import React, { useState } from 'react'

function Counter() {

// State Creation
const [counter,setCounter]=useState(0)

//Function definition  
function increment (){
    setCounter(counter+1)
}

function decrement (){
    setCounter(counter > 0 ? counter - 1 : 0);
}

function reset (){
    setCounter(0)
}


 return (
    <div style={{textAlign:'center',padding:'50px',margin:'150px'}}>
        <h1 style={{margin:'20px'}}>{counter}</h1>
        <button onClick={increment} style={{margin:'3px',padding:'5px',backgroundColor:'green',color:'white',borderRadius:'5px'}}>Increment</button>
        <button onClick={decrement} style={{margin:'3px',padding:'5px',backgroundColor:'blue',color:'white',borderRadius:'5px'}}>Decrement</button>
        <button onClick={reset} style={{margin:'3px',padding:'5px',backgroundColor:'red',color:'white',borderRadius:'5px'}}>Reset</button>
    </div>
  )
}

export default Counter