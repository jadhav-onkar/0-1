import { useRecoilState, useSetRecoilState } from "recoil"
import { descriptionAtom, titleAtom, todoAtom } from "../store/atom/todoAtom"

export function InputBoxes(){
    const [title, setTitle] = useRecoilState(titleAtom)
    const [description, setDescription] = useRecoilState(descriptionAtom)
    const setTodos = useSetRecoilState(todoAtom)
    function addTodo(){
        setTodos((todos)=>[...todos,{'title':title, "description":description}])
    }

    return(
        <>
            <input type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} /> <br /> <br />
            <input type="text" placeholder="description" onChange={(e)=>setDescription(e.target.value)}/> <br /> <br />
            <button onClick={addTodo}>Add todo</button> <br /><br />
        </>
    )
}