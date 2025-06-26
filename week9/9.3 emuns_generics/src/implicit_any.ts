// If true this will throw error
//  "noImplicitAny": true,     /* Enable error reporting for expressions and declarations with an implied 'any' type. */


function add(a:any, b:any){
    return a+b
}

const result = add(1,2)
console.log(result)