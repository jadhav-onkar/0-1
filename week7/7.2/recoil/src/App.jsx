import { useState } from 'react'
import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atom/count';

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

function Counter(){
  console.log("rendering...")
  return (
    <div> 
    <RecoilRoot>
      <RenderCounter />
      <UpdateCounter  />
      <IsEven />
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
  const setCount = useSetRecoilState(countAtom)
  const countReset = useResetRecoilState(countAtom)
  console.log("buttons rerenders..")
  return(
  <>
    <button onClick={()=>{setCount(c=>c+1)}}>Increment</button>
    <button onClick={()=>{setCount(c=>c-1)}}>Decreament</button>
    <button onClick={countReset}>Reset</button>
  </>
  )
}

const IsEven = ()=>{
  const count = useRecoilValue(countAtom)
  return <div>
    {count%2 == 0 ? "It is even" : ""}
  </div>
}
export default App
