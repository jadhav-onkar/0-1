interface User {
    fname:string;
    lname?:string;  // optionally  ? 
    age:number;
}

function isLegal(user:User):boolean{
    if(user.age >=18){
        return true
    }
    else{
        return false
    }
}

function greet(user:User):void{
    console.log("Hello ", user.fname, user.lname)
}

console.log(isLegal({
    fname: "ganesh",
    age: 19
}))

greet({
    fname: "onkar",
    lname: "jadhav",

    age: 17
})