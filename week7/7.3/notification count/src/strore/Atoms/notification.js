import axios from "axios";
import { atom, selector } from "recoil";

export const notificationCount = atom({
    key: 'notificationCount',
    default: selector({
        key: "notification",
        get: async ()=>{
        await new Promise(r => setTimeout(r, 5000))
           const res =  await axios.get('http://localhost:3000/notification')
           return res.data
    }})
})