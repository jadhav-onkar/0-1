function map(arr, fn){
    let new_arr = []
    for (let i = 0; i<arr.length; i++){
        new_arr.push(fn(arr[i]))
    }
    return new_arr
}

let a = [1,2,3,4,5]

let b = map(a,(i) =>{
    return i*2
})

console.log(b)