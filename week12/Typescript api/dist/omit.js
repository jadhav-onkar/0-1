function printUser(user) {
    console.log(`name ${user.name} \nage ${user.age}`);
}
printUser({
    name: 'ganesh',
    age: 22, // if you add email here compiler shows error
});
export {};
