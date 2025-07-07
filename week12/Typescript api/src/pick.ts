// pick from defiend type to create new type

export {}

interface User {
    id:number;
    name:string;
    email:string,
    password:string,
    age:number
}

// lets you pick from another type
type userDetailsOnly = Pick<User, 'name'|'age'|'email'>

function printUserDetails(user:userDetailsOnly){
    console.log(` Age : ${user.age}\n Name :  ${user.name},\n Email : ${user.email}`)
}

printUserDetails({
    age:25,name:"Ganesh",email:"ganesh@gmail.com"
})