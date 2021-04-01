//Example 1

let num = 10; //block of code outside

if(num === 10){

    let num = 20;       //local scope

    console.log(num) // 20 is the updated value
}

console.log(num)  //access global value




