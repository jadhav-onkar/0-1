import { useState } from 'react'
import React from 'react'
import { CounterContext } from './Context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CounterContext.Provider value={{count, setCount}}>
        <Count  />
      </CounterContext.Provider>
    </div>
  )
}

function Count(){
  return(
    <div>
      <CounterRendre />
      <UpdateCounter />
    </div>
  )
}

function CounterRendre(){
  const  { count } = useContext(CounterContext)
  return (
    <div> 
      Count {count} <br />
    </div>

  )
}

const  UpdateCounter = ()=>{
  const { setCount } = useContext(CounterContext)
  return(
  <>
    <button onClick={()=>{setCount(c => c+1)}}>Increment</button>
    <button onClick={()=>{setCount(c => c-1)}}>Decreament</button>
  </>
  )
}
export default App
