import { useState } from 'react'
import { memo } from 'react'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const onClicked = useCallback(()=>{
    console.log("hi thetre")
  },[])
  
  return (
    <div>
      <CustomButton onClick={onClicked}/>
      <button onClick={()=> setCount(count+1)}>Counter {count}</button>
    </div>
  )
}

const CustomButton = memo(({onClick})=>{
  console.log("rendered.....")
  return <div>
    <button onClick={onClick}>click here</button>
  </div>
})

export default App
