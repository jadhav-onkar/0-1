"use strict";
function greet(user) {
    console.log("hi", user.fname, user.lname, user.gender);
}
greet({
    fname: "ganesh",
    lname: "jadhav",
    age: 25,
    gender: "male"
});
