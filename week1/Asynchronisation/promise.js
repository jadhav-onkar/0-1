
// promise object

let p = new Promise(function(resolve){
    setTimeout(function(){
        console.log("setTimeout")
        resolve("resolved")
    }, 2000)
})

function displayResult(data){
    console.log(data)
}
p.then(displayResult)
console.log(p)
console.log("hello")




// simple promise class

/*
function asyncFunction(){
    console.log("inside async function")
    return new Promise(function(resolve){
        console.log("inside promise")
        resolve("resolved data")
        console.log("after resolved")
    })
}

function displayData(data){
    console.log("this is display function")
    console.log(data)
}

asyncFunction().then(displayData);

console.log("hi there...")
console.log("I am chill guy")
*/


// promise with setTimeout()
/*
function myAsyncFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there");
        },3000)
    })
}

function displayResult(data) {
    console.log(data)
  }
  
  d = myAsyncFunction()
  d.then(displayResult)

  console.log("this will get print first");
*/


// how resolve works
/*
function myAsyncFunction(){
    return new Promise(function(resolve){
        resolve(10);
    })
}

function sumOfNumbers(n) {
    sum = 0
    for(let i = 1; i<n+1; i++){
        sum += i
    }
    return sum;
}

myAsyncFunction().then(sumOfNumbers).then(console.log);
console.log("this always runs first ");

*/



// fs.readFile()
/*
let fs = require("fs")
const { resolve } = require("path")
const { sourceMapsEnabled } = require("process")

function myAsyncFunction(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8", function(err,data){
            resolve(data)
        })
    })
}

function displayResult(data){
    console.log(data)
}

myAsyncFunction().then(displayResult)
console.log("first this is printed")
*/


// how return result and .then(console.log) works
/*
function asyncFunction(){
    return new Promise(function(resolve){
        resolve("resolved data")
    })
}

function displayData(data){
    return data
}

asyncFunction().then(displayData).then(console.log);
*/
