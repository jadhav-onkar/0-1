import { useEffect } from 'react'
import { useState } from 'react'


function App() {
  const [id, setId] = useState(null)

  console.log(id)
   return(
    <div>
      <StylishButton onClick={()=>setId(1)}> 1 </StylishButton>
      <StylishButton onClick={()=>setId(2)}> 2 </StylishButton>
      <StylishButton onClick={()=>setId(3)}> 3 </StylishButton>
      <StylishButton onClick={()=>setId(4)}> 4 </StylishButton>

      <Todo id={id}/>

    </div>
  )
}

function Todo({id}){
  const [todo, setTodos] = useState(null)

  useEffect(()=>{
    fetch("https://dummyjson.com/todos").then(async (res)=>{
      const json = await res.json()
      const todoWithId = json.todos.find((todo) => todo.id === id);
      setTodos(todoWithId)
      console.log(todoWithId)
    })
  },[id])


  return(
    <div>
      {todo ? <h3>{todo.id} {todo.todo}</h3> : <p>Loading...</p>}
      </div>
  )
}


function StylishButton({children, onClick}){
  return <button onClick={onClick} style={{
    margin:10,
    padding:15,
    backgroundColor: "grey"
  }}>{children}</button>
}
export default App



