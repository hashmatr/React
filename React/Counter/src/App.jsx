 import './App.css'
// import { useState } from 'react'
// function App() {
//  const [Count,setCount] = useState(0)
//      function Increment(){
//      setCount(Count+1) 
//     }
//     function Decrement(){
//       setCount(Count-1)
//     }
//   return (
//     <>
//      <div>
//     <h1>Counter</h1>
//     <p>Count: {Count}</p>
//     <button onClick={Increment}>Increment Value</button>
//     <button onClick={Decrement}>Decrement Value</button>
//      </div>
//     </>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'
const App = () => {
const [value,setvalue] = useState(1)
// const [multipliedValue,setMultipliedValue] = useState(1)
let multipliedValue = value*5
function multiply(){
  setvalue(value+1)
}
return (
    <>
    <h1>Main Value: {value}</h1>
    <button onClick={multiply}>Click to Multiply by 5</button>
    <h2>Multiplied value: {multipliedValue} </h2>
    </>
  )
}
export default App