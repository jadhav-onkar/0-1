
// readonly - ristrict change in object values

// this also works
// type User = {
//     readonly name:string;
//     readonly age: number;
// }

export {}

type User = {
    name:string;
    age: number;
}

const user:Readonly<User> = {
    name:'ganesh',
    age:20
}


// user.age = 25 // this will show error because the object is defiend with readonly
console.log(user)

