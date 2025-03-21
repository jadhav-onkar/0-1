
export function Todo({todos, setTodos}){
    {fetch("http://localhost:3000/todos").then((res)=>{
        res.json().then((res)=>{
            setTodos(res.todos)
        })
    })}
    return (
        <div>
            {todos.map(todo=>{
                return <div 
                style={{
                    border: "2px solid black",
                    margin: 10,
                    padding: 10
                }}>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                    <button>{todo.completed ? "completed": "mark as completed"}</button>
                </div>
            })}
        </div>
        // // <div>
        // //     {todos.map(function(todo){
        // //         return <div>
        // //             <h2>{todo.title}</h2>
        // //             <h3>{todo.description}</h3>
        // //             <button>{todo.completed ? "completed" : "mark as completed"}</button>
        // //         </div>
        // //     })}
        // </div>       
    )
}