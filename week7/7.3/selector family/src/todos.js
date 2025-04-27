import { atomFamily, selectorFamily  } from "recoil"
import axios from 'axios'

export const TodoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: selectorFamily({
        key: 'todoSelectorFamily',
        get: (id)=>{
            return async ({get})=>{
                const todo = await axios.get(`http://localhost:3000/todos/${id}`)
                return todo.data.todo
            }
        }
    })
})