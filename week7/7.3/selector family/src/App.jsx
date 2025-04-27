import { useState } from 'react'
import { useRecoilValue, RecoilRoot, useRecoilValueLoadable } from 'recoil'
import { TodoAtomFamily } from './todos'
import { Suspense } from 'react'


function App() {
  return (
    <div>
      <RecoilRoot>
          <Todo id={5} />
          <Todo id={6} />
          <Todo id={5} />
          <Todo id={7} />
      </RecoilRoot>
    </div>
  )
}


function Todo({id}){
  const todo = useRecoilValueLoadable(TodoAtomFamily(id))
  console.log(todo.contents)
  
  if (todo.state == "loading"){
    return <div>Loading....</div>
  }

  if (todo.state == "hasValue"){
    return <div>
      {todo.contents.id}. {todo.contents.title} :   {todo.contents.description}
    </div>
  }

}

export default App
