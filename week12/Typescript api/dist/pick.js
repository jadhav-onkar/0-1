// pick from defiend type to create new type
function printUserDetails(user) {
    console.log(` Age : ${user.age}\n Name :  ${user.name},\n Email : ${user.email}`);
}
printUserDetails({
    age: 25, name: "Ganesh", email: "ganesh@gmail.com"
});
export {};
