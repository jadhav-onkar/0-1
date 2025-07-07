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
type userDetailsOnlyOptional = Partial<userDetailsOnly>

function printUserDetails(user:userDetailsOnlyOptional){
    console.log(` Age : ${user.age}\n Name :  ${user.name},\n Email : ${user.email}`)
}

printUserDetails({
    age:25
})