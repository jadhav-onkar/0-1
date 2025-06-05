
function greet(fname: string, lname:string, age:number){
    console.log(`Hello ${fname} ${lname} ${age}`)
}

function isLegal(age:number):boolean{
    if(age>=18){
        return true
    }
    else{
        return false
    }
}

function runafter1S(fn: ()=> void){
    setTimeout(()=>{
        console.log(fn())
    }, 1000)
}

runafter1S(()=>{
    return "hello"
})

console.log(isLegal(12))