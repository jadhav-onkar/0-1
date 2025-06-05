"use strict";
function greet(fname, lname, age) {
    console.log(`Hello ${fname} ${lname} ${age}`);
}
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function runafter1S(fn) {
    setTimeout(() => {
        console.log(fn());
    }, 1000);
}
runafter1S(() => {
    return "hello";
});
console.log(isLegal(12));
