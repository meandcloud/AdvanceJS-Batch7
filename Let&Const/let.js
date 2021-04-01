//Example 1

function myfunc(){
    if(true){
        const name = true;
        console.log(name)   // Now here it is inside the block of code
    }
    //console.log(cool)       // it is not defined because const is a block of code
 
}
myfunc()


//Example 2

const username = 'amar';  //Global Scope

function myfunc1(){
    //username = 'shabbir' //it will through an error it can't be reassigned or overwrite 
    console.log(username)
}

myfunc1()


//Example 3

const num = 26;

try{
    num = 36;

}catch(err){
    console.log(err) //it will through an error it can't be reassigned or overwrite 
}
console.log(num)


//Example 4

let myname = 'amar'

function myfunc2(){
    myname = 'shabbir'
    console.log("updated name: "+myname)
}

myfunc2()


//Example 5

if(true){
    const age = 1;
    let cool = true;
    var myAge = 36;
    console.log(age)
}
console.log(myAge); // var is accessible because of global scope
console.log(age)    // not defined because of local/block scope can't be accessible outside the block of code
console.log(cool)   // not defined


