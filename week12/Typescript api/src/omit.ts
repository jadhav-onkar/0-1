
export {}

type User = {
    name:string;
    gmail:string;
    password:string;
    age:number
}
// omit = reverse of pick

type UserData = Omit<User, 'gmail'|'password'>

function printUser(user:UserData){
    console.log(`name ${user.name} \nage ${user.age}`)
}

printUser({
    name:'ganesh',
    age:22,    // if you add email here compiler shows error
})