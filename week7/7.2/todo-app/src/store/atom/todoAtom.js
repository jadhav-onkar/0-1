import { atom } from 'recoil'

export const todoAtom = atom({
    key: 'todoAtom',
    default:[]
})

export const titleAtom = atom({
    key: "titleAtom",
    default: ""
})

export const descriptionAtom = atom({
    key: "descriptionAtom",
    default: ""
})