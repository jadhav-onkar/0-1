
// problem - user can gave any input to handle this generic is good practice

function generics<S>(arr: S[]){
    return arr[0]
}

const s = generics<string>(["abhay","jadhav"])
const n = generics<number>([5,4,8,2,3])
console.log(s.toUpperCase())
console.log(n*n)