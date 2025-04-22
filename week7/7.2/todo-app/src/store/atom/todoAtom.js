import { atom } from 'recoil'

export const todoAtom = atom({
    key: 'todoAtom',
    default:[{
        title: "Go to Gym",
        description: "got at 2.0 pm"
    },{
        title: "Go to College",
        description: "got at 5.0 pm"
    },{
        title: "PLay Cricket",
        description: "Every day early morning"
    }]
})

export const titleAtom = atom({
    key: "titleAtom",
    default: ""
})

export const descriptionAtom = atom({
    key: "descriptionAtom",
    default: ""
})

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})