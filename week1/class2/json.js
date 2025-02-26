// string to object

let str = '{"name": "Ganesh", "age":25, "gender": "male"}'
let obj = JSON.parse(str)

console.log(typeof(str))
console.log(typeof(obj))

console.log(obj)

console.log(" ------------------------------------------ ")

// object to string

let object = {name: "Ganesh", age:25, gender: "male"};
let string = JSON.stringify(object);

console.log(typeof(object))
console.log(typeof(string))

console.log(string)
