const arr = [1,2,3,4]
const arr2 = [5,6,7,8]

// push at last
arr.push(5)
console.log(arr)

// pop from last
arr.pop()
console.log(arr)

// shift - remove from front
arr.shift()
console.log(arr)

// unshift - add in front
arr.unshift(1)
console.log(arr)

// concat - merge an array
let arr3 = arr.concat(arr2)
console.log(arr3)

// forEach - apply function on each element in array
let arr10 = arr.forEach(function(num){
    console.log(num)
});


