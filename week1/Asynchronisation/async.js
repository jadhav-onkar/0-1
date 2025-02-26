
// setTimeout()
/*
setTimeout(function(){        // setTimeout() is already a async function
    console.log("hi there");
}, 2000)

console.log("Hello world");
*/


// fs.readfile()

/*
let fs = require('fs');
function readfile(callback){
    fs.readFile('a.txt','utf-8',function(err,data){
        callback(data)
    })
}

function displayResult(data){
    console.log(data)
}

readfile(displayResult)
console.log("hi there...")
*/


// setTimeout()
/*
function runHello(callBack){
    setTimeout(displayResult, 2000);
}

function displayResult(){
    console.log("Hi HOw are you")
    
}
runHello(displayResult)
console.log("Hello there...")
*/


// calsulate sum
/*
let sum = 0
function sumOf100(){
    for(let i = 0;i<11; i++){
        sum +=i;
    }
    return sum
}

function displayResult(callback){
    console.log(callback())
}

setTimeout(function(){
    console.log("Hello there...")
},2000)
displayResult(sumOf100)
*/

let sum = 0
function sumOf100(){
    for(let i = 0;i<11; i++){
        sum +=i;
    }
    return sum
}

function displayResult(callback){
    console.log(callback())
}

setTimeout(function(){
    console.log("Hello there...")
},2000)

displayResult(sumOf100)
console.log("hello world")

