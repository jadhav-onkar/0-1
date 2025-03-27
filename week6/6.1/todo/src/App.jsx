import React, { useState } from 'react'

let counter = 4
function App() {
  const [Todos, setTodos] = useState([{
    id: 1,
    title: "go to school",
    description: "at 11 am"
  },{
    id: 2,
    title: "go to gym",
    description: "at 8 pm"
  },{
    id: 3,
    title: "go to sleep",
    description: "at 11 pm"
  }])

  function updateTodo(){
    setTodos([...Todos, {
      id: counter++,
      title: "wake up",
      description: "at 7 am"
    }])
  }

  return (
    <div>
      <button onClick={updateTodo}>Add todo</button>
      {Todos.map((todo)=>{
        return (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
        )
      })}
    </div>
  )
}

const Todo = React.memo(function Todo({title, description}){
  return(
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  ) 
})

export default App
