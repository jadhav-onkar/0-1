import { selector } from "recoil";
import { filterAtom, todoAtom } from "../atom/todoAtom";

export const FilteredSelector = selector({
    key: "FilteredTodos",
    get: ({get})=>{
        const todos = get(todoAtom)
        const filteredWord = get(filterAtom)

        const filteredTodos = todos.filter((todo)=>{
            if (todo.title.toLowerCase().includes(filteredWord) || todo.description.toLowerCase().includes(filteredWord)){
                    return true
                }
            })
        return filteredTodos
    }
})