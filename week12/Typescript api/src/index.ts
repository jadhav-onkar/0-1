export {}

interface User {
    name:string;
    age:number;
}

function addAge(user1:User, user2:User):number{
    const sum = user1.age + user2.age;
    return sum
}

const result = addAge({
    name: "ganesh",
    age:22
},{
    name:"abhay",
    age:19
})

console.log(result)