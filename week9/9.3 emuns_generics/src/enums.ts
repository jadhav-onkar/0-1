// you can also define whatever strings
enum action{
    left= "left",
    right = "right",
    up = "up",
    down = "down"
}

// // start from 2 actually under the hood its just numbers start from 0
// enum action{
//     left = 2,
//     right,
//     up, 
//     down
// }

// enum action{
//     left,
//     right,
//     up, 
//     down
// }

function take_action(a:action):void{
    if (a == action.left){
        console.log("take left turn")
    }else if(a == action.right){
        console.log("take right turn")
    }else if(a == action.up){
        console.log("go ahead")
    }else if(a == action.down){
        console.log("reverse")
    }
}

take_action(action.right)
console.log(action.up)