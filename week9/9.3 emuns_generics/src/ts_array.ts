
function max_array(arr:number[]):number{
    let maximum:number = arr[0];
    for(let i=0; i<=arr.length; i++){
        if(arr[i]>=maximum){
            maximum = arr[i]
        }
    } 
    return maximum
}

const max_of_arr = max_array([5,4,6,2,8,7,19,6]);
console.log(max_of_arr)
