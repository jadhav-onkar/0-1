import { useState } from 'react'
import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atom/count';

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

function Counter(){
  return (
    <div> 
    <RecoilRoot>
      <RenderCounter />
      <UpdateCounter  />
    </RecoilRoot>
    </div>

  )
}

function RenderCounter(){
  const count = useRecoilValue(countAtom)
  return (<div>
    count: {count}
  </div>)
}

const  UpdateCounter = ()=>{
  const [,setCount] = useRecoilState(countAtom)

  return(
  <>
    <button onClick={()=>{setCount(c=>c+1)}}>Increment</button>
    <button onClick={()=>{setCount(c=>c-1)}}>Decreament</button>
  </>
  )
}
export default App
