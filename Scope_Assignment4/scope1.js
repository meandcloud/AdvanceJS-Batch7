//Example 1

let username1 = 'shabbir' //Global scope

if(true){
    let username2 = 'amar';  //local scope because of "let" it will through an error
    console.log(username1)  // var makes it global and we can access it outside the block
}                            

console.log(username2)