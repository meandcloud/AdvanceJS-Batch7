function add(){
    const mybox = document.querySelector(".box")
    const inputValue = document.querySelector("#mylist").value    

    mybox.innerHTML +=`
    
        <ul class="list">
        <li>${inputValue}</li> <button 
        class="btn btn-danger delete" onclick=onDelete(event)>X</button>        

        </ul>    
    `
}

function onDelete(event){
    let ul = document.querySelector("ul");
    if(!event.target.classList.contains('delete')){
        return;
    }
    let myBtn = event.target;
    myBtn.closest("ul").remove()
    ul.addEventListener('click', onDelete)
}


