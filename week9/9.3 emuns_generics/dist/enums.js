"use strict";
var action;
(function (action) {
    action["left"] = "left";
    action["right"] = "right";
    action["up"] = "up";
    action["down"] = "down";
})(action || (action = {}));
function take_action(a) {
    if (a == action.left) {
        console.log("take left turn");
    }
    else if (a == action.right) {
        console.log("take right turn");
    }
    else if (a == action.up) {
        console.log("go ahead");
    }
    else if (a == action.down) {
        console.log("reverse");
    }
}
take_action(action.right);
console.log(action.up);
