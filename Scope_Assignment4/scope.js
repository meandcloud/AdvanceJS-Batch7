//Example 1

var userName = "amar"  //Global Variable

function myfunc(){
    userName = "shabbir" //Local Variable 
    console.log("Example 1: Local "+userName)
}

myfunc()

console.log("Example 1: Global "+userName) //Accessig Global Variable outside the function



//Example 2

var a = 12;

function sum(){
    var b = 4;
    a = 3 + 2;
    console.log("Example 2: Local "+b) //Accessing local variable 
}

sum()
console.log("Example 2: Gloabl "+a) //Accessing Global variable



//Example 3

var x = 7       //Global

function add(){
    var x = 6;
    x = 3 + 3;
    console.log("Example 3: Local "+x)
}

add()
console.log("Example 3: Global "+x)

//Example 4
var num1 = 10;          //Global

function mynum(){
    var num2 = 6;       //Local
    num1 = num2 + 6;     
}

mynum()
console.log(num2) //it will through error because it is being called outside the fun.
