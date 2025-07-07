"use strict";
// readonly - ristrict change in object values
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'ganesh',
    age: 20
};
// user.age = 25 // this will show error because the object is defiend with readonly
console.log(user);
