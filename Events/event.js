
function add(){
    const tbody = document.querySelector("tbody")
    const inputValue = document.querySelector("#list").value 
   
    tbody.innerHTML +=`
    
        <tr>
            <td>  
            <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">${inputValue}
            </label>
          </div>
            </td>

            <td><button class="btn btn-danger" onClick="remove()"> X </button></td>

        </tr>
  
    
     `
}

function remove() {
    let obj = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    //console.log(obj)
    let i=obj.length; 
    while(i--) { 
        if(obj[i].getElementsByTagName('input')[0].checked) {
            obj[i].parentNode.removeChild(obj[i]);
            }
        }
    }



