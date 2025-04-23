import { selector } from "recoil";
import { notificationCount } from "../Atoms/notification";

export const totalSum = selector({
    key: 'totalSum',
    get: ({get})=>{
        let notification = get(notificationCount)
        return notification.jobs + notification.network + notification.notification + notification.message
    }
})