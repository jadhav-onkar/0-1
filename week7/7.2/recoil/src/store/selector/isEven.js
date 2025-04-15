import { selector } from "recoil";
import { countAtom } from "../atom/count";

export const IsEvenSelector = selector({
    key: "IsEven",
    get: ({get})=>{
        const count = get(countAtom)
        return count%2 == 0 ? "It is Even" : ""
    }
})