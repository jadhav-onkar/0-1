import { useState } from 'react'

function App() {
    const [Todo, setTodos] = useState([
      {
        title: "go to sleep",
        description: "go to sleep at 11 pm"
      },
      {
        title: "go to gym",
        description: "go to gym at 8 am"
      }
    ])

    const [count, setcount] = useState(Todo.length)

    const [darkMode, setDarkMode] = useState(false)

    function addTodo(){
      setTodos([{
        title:"meet sakshi",
        description: "whenever she calls you"
      }, ...Todo]) // this add todos at front
      console.log("after set todos")
      setcount(count+1)
      console.log("after set count")
    }

    function dark_mode(){
      darkMode ? setDarkMode(false) : setDarkMode(true)
    }
    
    return (
      // <SampleDiv title={Todo[0].title} description={Todo[0].description}/>
      <div>
        <button onClick={dark_mode}>{darkMode ? "light mode" : "dark mode"}</button>
        <h1>todos count {count}</h1>
        <button onClick={addTodo}>click here</button>

        {Todo.map(function(todo){
          return <SampleDiv title={todo.title} description={todo.description} darkMode = {darkMode} />
        })}
        
        {/* dark mode using {SampleDivBlack} component */}
        {/* {Todo.map(function(todo){  
          return <SampleDivBlack title={todo.title} description={todo.description} />
        })} */}     
        
        </div>
      
    )
    // dumb way to do that 

    // return (
    //   <div>{JSON.stringify(Todo)}</div>
    // )  
}

function SampleDiv(props){
  return (
    <div style={{
      backgroundColor: props.darkMode ? 'black': 'white',
      color: props.darkMode ? "white" : 'black'}}>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

function SampleDivBlack(props){
  return (
    <div style={{
      backgroundColor: 'black',
      color: "white"
    }}>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}


export default App
