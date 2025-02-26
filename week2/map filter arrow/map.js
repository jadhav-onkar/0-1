

// let a = [1,2,3,4,5]

// const b =a.map((i) =>{
//     return i*2
// })

// console.log(b)

let a = ["ganesh", "Rajendra", "jadhav", "gani"]

let b = a.map((n)=>{
    return n.split("").reverse().join("")
})

console.log(b)