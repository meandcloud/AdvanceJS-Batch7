//let list = [];
let ul = document.createElement("ul");


function add(){

    let inputValue = document.querySelector("#mylist").value 
    //console.log(inputValue)
    let li = document.createElement("li")
    let btn = document.createElement("button", onclick='myfunction()')
    btn.type = 'button'
    btn.id = 'del'
    //btn.onclick = 'myfunction()'
    btn.innerHTML = "X"
    
    
    
    
    li.textContent = inputValue 
 
    ul.appendChild(li)
    li.appendChild(btn)
    //mybox.appendChild(btn)

}

let mybox = document.querySelector(".box")
mybox.appendChild(ul)


function myfunction(){
    let myobj = document.getElementById("del");
    myobj.remove();
}