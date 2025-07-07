
// record - lets you define cleaner type to object

export {}

type User = {
    name:string;
    age: number;
}

type Users = Record<string, {name:string, age:number}>

const users:Users = {
    id_1:{name:'ganesh',age:22},
    id_2:{name:'abhay',age:20}
}

//   type Users = Record<string, User>   // yuo can also do this

type userage = Record<string, number>
const ageofUser: userage = {
    ganesh:20,
    abhay:18
}

console.log(ageofUser)