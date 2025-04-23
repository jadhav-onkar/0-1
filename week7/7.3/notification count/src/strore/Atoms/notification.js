import { atom } from "recoil";

export const notificationCount = atom({
    key: 'notificationCount',
    default: {
        network: 0,
        message: 0,
        jobs: 0,
        notification: 0,
    }
})