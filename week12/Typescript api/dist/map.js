// const user = new Map<string,User >();
const user = new Map();
user.set("user1", { "name": 'ganesh', "age": 25 });
user.set("user2", { "name": 'abhay', "age": 23 });
console.log(user);
console.log(user.get('user1'));
export {};
