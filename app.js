function todoItem(){
    var todoVal = document.getElementById("todo-val");
    // create li tag with textNode
    var li = document.createElement("li");
    var todoText = document.createTextNode(todoVal.value);
    var list = document.getElementById("list");
    li.appendChild(todoText);
    
    // create delete button
    
    var delBtn = document.createElement("button");
    var deltext = document.createTextNode("Delete");
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.appendChild(deltext);
    
    // create edit button
    
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)")
    
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
    // console.log(li);
    todoVal.value = ""; 
}

function delItem(e){
    e.parentNode.remove();
}
function delAll(){
    list.innerHTML = "";
}
function editItem(){
    
}