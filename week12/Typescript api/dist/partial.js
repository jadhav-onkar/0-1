"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUserDetails(user) {
    console.log(` Age : ${user.age}\n Name :  ${user.name},\n Email : ${user.email}`);
}
printUserDetails({
    age: 25
});
