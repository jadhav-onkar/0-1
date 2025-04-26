import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { TodoAtomFamily } from './Atoms'


function App() {

  return (
    <RecoilRoot>
      <UpdateTodo id={1}/>
      <ToDo id={1}/>
      <ToDo id={2}/>
    </RecoilRoot>
  )
}

function UpdateTodo({id}){
  const setTodo = useSetRecoilState(TodoAtomFamily(id))

  function Update(){
      setTimeout(()=>{
        setTodo({
          title: "stay home",
          description: "until Corona Ends"
        })
      }, 5000)
  }

  return <>
  <button onClick={Update}>Update</button></>
}

function ToDo({id}){
  const TodoWithID = useRecoilValue(TodoAtomFamily(id))
  return(
    <div>
      {TodoWithID.title} <br />
      {TodoWithID.description} <br /> <br />
    </div>
  )
}

export default App
