import { useSetRecoilState } from "recoil"
import { filterAtom } from "../store/atom/todoAtom"


export function Filter(){
    const setFilter = useSetRecoilState(filterAtom)
    return (
        <>
            <input type="text" placeholder="Search" onChange={(e)=>setFilter(e.target.value)} />
        </>
    )
}