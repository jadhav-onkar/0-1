let obj = {name: "Ganesh", age:25, gender: "male"};
console.log(obj["name"])

// Object.keys(obj)
let keys = Object.keys(obj)
console.log("keys : ",keys)

// Object.values(obj)
let values = Object.values(obj)
console.log("Values : ",values)

// Object.entries(obj)
let entries = Object.entries(obj)
console.log("entries : ",entries)

// obj.hasOwnProperty()
let hasOwnProperty = obj.hasOwnProperty("name")
console.log("hasOwnProperty : ",hasOwnProperty)

// Object.assign   - add new properties to an object
let assign = Object.assign(obj,{married: false})
console.log("entries : ",obj)

