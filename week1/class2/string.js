// length
function getLength(str){
    console.log("length : ",str.length);
}
getLength("Hello");

// indexOf
function getIndexOf(str, target){
    console.log("index of ",target," : ",str.indexOf(target));
}
getIndexOf("Hello world", "world");

// lastIndexOf
function getLastIndexOf(str, target){
    console.log("last index of ",target," : ",str.lastIndexOf(target));
}
getLastIndexOf("Hello world Hello", "Hello");

// slice
function getSlice(str, start, end){
    console.log("modified string using slice : ", str.slice(start, end));
}
getSlice("Hello world",6,11);

// substr
function getSubString(str, start, noOfCHaracters){
    console.log("substring : ", str.substr(start,noOfCHaracters));
}
getSubString("Hello world",6,5);

// replace
function getReplace(str,target, word) {
    console.log("replace ",target, " with ", word, " : ", str.replace(target,word));
}
getReplace("Hello world", "world" , "ganesh");

// split
function getSplit(str, delimeter){
    console.log("split array : ", str.split(delimeter));
}
getSplit("hello my nane is ganesh", " ")

// trim
function getTrim(str){
    console.log("trim string : ", str.trim());
}
getTrim("               hello my nane is ganesh   ")


// toUpperCase
str = " My Name is Ganesh"
console.log(str.toUpperCase())

// to LowerCase
console.log(str.toLowerCase())
