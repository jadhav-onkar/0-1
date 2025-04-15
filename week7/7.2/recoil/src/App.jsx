import { useState } from 'react'
import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atom/count';
import { IsEvenSelector } from './store/selector/isEven';


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
  return(
  <>
    <button onClick={()=>{setCount(c=>c+1)}}>Increment</button>
    <button onClick={()=>{setCount(c=>c-1)}}>Decreament</button>
    <button onClick={countReset}>Reset</button>
  </>
  )
}

const IsEven = ()=>{
  console.log("IsEven rendered...")
  const isEven = useRecoilValue(IsEvenSelector)
  return <div>
    {isEven}
  </div>
}
export default App
