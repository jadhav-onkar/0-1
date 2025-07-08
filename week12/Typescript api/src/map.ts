
export {}

// map - lest you define object such as c++ (hashmap)

// const user = new Map();
type User = {
    name:string;
    age:number
}

// const user = new Map<string,User >();

const user = new Map<string,{name:string; age:number} >();

user.set("user1", {"name":'ganesh', "age":25})
user.set("user2", {"name":'abhay', "age":23})

console.log(user)
console.log(user.get('user1'))
