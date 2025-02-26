let users = [
    {
        gmail:"ganesh0230@gmail.com",
        password: 123,
        username: "Ganesh"
    },
    {
        gmail:"rohit@0230",
        password: 123456,
        username: "Rohit"
    },
    {
        gmail:"amey@123",
        password: 1569,
        username: "Amey"
    }
]
function checkUser(gmail,password){
    let isPresent =false
    for(let i = 0; i<users.length; i++){
        if(users[i].gmail == gmail && users[i].password == password){
            isPresent = true
        }
    }
    return isPresent;
}
console.log(checkUser("amey@123",569))