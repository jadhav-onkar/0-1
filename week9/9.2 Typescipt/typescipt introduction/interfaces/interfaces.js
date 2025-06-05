"use strict";
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("Hello ", user.fname, user.lname);
}
console.log(isLegal({
    fname: "ganesh",
    age: 19
}));
greet({
    fname: "onkar",
    lname: "jadhav",
    age: 17
});
