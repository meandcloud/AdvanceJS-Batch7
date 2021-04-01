//Example: 1

let total = sum(5,5) //Calling before declaration

console.log("Sum = "+ total)


function sum(a,b){      //be default this function move to the top
    return a + b
}

//Example: 2

// console.log("A "+a) // can't access before initialzation 
let a = 6
console.log("Example 2: "+a)


//Example: 3

// var add = sum(4,5)
// console.log(add)   //sum is not a function 

var sum = function (a,b) { // function expression must be called after making.
    return a + b
}

var add = sum(4,5)
console.log(add)