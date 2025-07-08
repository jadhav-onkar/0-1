function addAge(user1, user2) {
    const sum = user1.age + user2.age;
    return sum;
}
const result = addAge({
    name: "ganesh",
    age: 22
}, {
    name: "abhay",
    age: 19
});
console.log(result);
export {};
