// Q1 even numbers from an array
/*
const arr = [20,21,25,26,30,41,42];
arrlenght = arr.length;

for(let i=0; i<arrlenght; i++){
    if (arr[i] % 2 == 0){
        console.log(arr[i])
    }
}
    */

// Q2 print biggest number
/*
const arr = [20,21,25,26,98,30,41,42];
bigestNum = arr[0]

for(let i = 0; i< arr.length; i++){
    if (arr[i] > bigestNum){
        bigestNum = arr[i]
    }
}
console.log(bigestNum)
*/

// Q3 print male peoples first name by using complex object
/*
const comObj = [{
    fname : "ganesh",
    gender : "male"
},{
    fname : "onkar",
    gender : "male"
},{
    fname : "sakshi",
    gender : "female"
}];

for(let i = 0; i<comObj.length; i++){
    if (comObj[i]["gender"] == "male"){
        console.log(comObj[i]["fname"]);
    }
}
    */

// Q4 reverse the elemnets of an array


const arr = [5,4,3,2,1];
// const newarr = arr.toReversed()  // when new array is needed
// console.log(arr.reverse())   // using reverse function
const revarr = []

for(i = arr.length-1; i>=0; i--){
   revarr.push(arr[i])
}
console.log(revarr)
