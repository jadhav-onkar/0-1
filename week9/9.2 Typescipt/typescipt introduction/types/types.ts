
type User = {
    fname: string;
    lname: string;
    age: number;
    gender: string
}

type employee ={
    fname: string;
    lname: string;
    gender: string;
}

type person = User & employee  // fanme, lname, gender, age
type person1 = User | employee   // fname lname


function greet(user:person1):void{
    console.log("hi",user.fname, user.lname, user.gender )
}

greet({
    fname: "ganesh",
    lname: "jadhav",
    age: 25,
    gender: "male"
})