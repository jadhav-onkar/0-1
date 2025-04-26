import { atomFamily } from 'recoil';
import { TODOS } from './todos';

export const TodoAtomFamily = atomFamily({
    key: 'TodoAtomFamily',
    default: (id)=>{
        return TODOS.find(todo => todo.id == id)
    }
})