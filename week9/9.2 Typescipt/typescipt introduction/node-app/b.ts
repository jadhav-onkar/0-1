
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

function runafter1S(fn: (fname:string)=> void){
    setTimeout(()=>{
        console.log(fn("ganesh"))
    }, 1000)
}

runafter1S((fname:string)=>{
    return `hello ${fname}`
})

console.log(isLegal(12))