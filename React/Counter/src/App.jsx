import './App.css'
import { useState } from 'react'
function App() {
 const [Count,setCount] = useState(0)
     function Increment(){
     setCount(Count+1) 
    }
    function Decrement(){
      setCount(Count-1)
    }
  return (
    <>
     <div>
    <h1>Counter</h1>
    <p>Count: {Count}</p>
    <button onClick={Increment}>Increment Value</button>
    <button onClick={Decrement}>Decrement Value</button>
     </div>
    </>
  )
}

export default App
