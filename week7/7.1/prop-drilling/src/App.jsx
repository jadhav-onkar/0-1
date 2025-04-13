import { useState } from 'react'
import React from 'react'

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

// prop drilling makes code look clean make tree diagram to understand
function Counter(){
  const [count, setCount] = useState(0)
  return (
    <div> 
    Count {count} <br />
    <UpdateCounter setCount={setCount} />
    </div>

  )
}

const  UpdateCounter = ({setCount})=>{
  return(
  <>
    <button onClick={()=>{setCount(c => c+1)}}>Increment</button>
    <button onClick={()=>{setCount(c => c-1)}}>Decreament</button>
  </>
  )
}
export default App
