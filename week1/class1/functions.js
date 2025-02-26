// Q1 write a function to sum two numbers

/*
function sum(a,b){
    return a+b;
}
console.log(sum(2,1))
*/

// Q2 display result in pretty format
/*
function sum(a,b, fToCall){
    let result = a+b;
    return fToCall(result)
}
function displayResult(data){
    console.log("the sum of numbers :: "+ data);
}

sum(2,1,displayResult);
*/

// Q3 display result in passive format
function sum(a,b, fToCall){
    let result = a+b;
    return fToCall(result)
}
function displayResultPassive(data){
    console.log("numbers sum  :: "+ data);
}
sum(1,3,displayResultPassive)

// displayResultPassive(sum(2,3)) // you can do this also