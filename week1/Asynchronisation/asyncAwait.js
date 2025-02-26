
// simple async await example
/*
function myAsyncFunction(){
    return new Promise(function(resolve){
        resolve("hi there....")
    })
}

async function main(){
    let value = await myAsyncFunction()
    console.log(value)
}
main()
*/

// setTimeout()
/*
function myAsyncFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there....")
        },2000)
    })
}

async function main(){
    let value = await myAsyncFunction()
    console.log(value)
    console.log("this execute after promise resoves")
}
main()
console.log("this executes first")
*/

// fs.readFile()
let fs = require("fs")

function myAsyncFunction() {
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data)
        })
    })
}

async function main(){
    let value = await myAsyncFunction()
    console.log(value)
}

main()