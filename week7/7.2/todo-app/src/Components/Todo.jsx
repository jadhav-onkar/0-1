import { useRecoilValue } from "recoil";
import { filterAtom, todoAtom } from "../store/atom/todoAtom";
import { FilteredSelector } from "../store/selectors/filter";

export function RenderTodos(){
    const filtered_todos = useRecoilValue(FilteredSelector)

    return <div>
        {filtered_todos.map((todo, index)=>{
            return <div key={index}>
                <h3>{todo.title} </h3>
                <h4>{todo.description} </h4>
            </div>
        })}
    </div>
}