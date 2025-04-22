import { useRecoilValue } from "recoil";
import { todoAtom } from "../store/atom/todoAtom";

export function RenderTodos(){
    const todos = useRecoilValue(todoAtom)
    console.log(todos)
    return <div>
        {todos.map((todo, index)=>{
            return <div key={index}>
                <h3>{todo.title} </h3>
                <h4>{todo.description} </h4>
            </div>
        })}
    </div>
}