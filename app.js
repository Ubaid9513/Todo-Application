
// function todoItem(){
//     var todoVal = document.getElementById("todo-val");
//     // create li tag with textNode
//     var li = document.createElement("li");
//     var todoText = document.createTextNode(todoVal.value);
//     var list = document.getElementById("list");
//     li.appendChild(todoText);
    
//     // create delete button
    
//     var delBtn = document.createElement("button");
//     var deltext = document.createTextNode("Delete");
//     delBtn.setAttribute("onclick","delItem(this)");
//     delBtn.appendChild(deltext);
    
//     // create edit button
    
//     var editBtn = document.createElement("button");
//     var editText = document.createTextNode("Edit");
//     editBtn.appendChild(editText);
//     editBtn.setAttribute("onclick","editItem(this)")
    
//     li.appendChild(editBtn);
//     li.appendChild(delBtn);
//     list.appendChild(li);
//     // console.log(li);
//     todoVal.value = ""; 
// }

// function delItem(e){
//     e.parentNode.remove();
// }
// function delAll(){
//     list.innerHTML = "";
// }
// function editItem(e){
//     var editVal = prompt("Enter Edit Value");
//     e.parentNode.firstChild.nodeValue = editVal; 
// }









function todoBtn(){
    var todoInput = document.getElementById("todoInput");
    // create li with appendChild
    var todoLi = document.createElement("li");
    var todoText = document.createTextNode(todoInput.value);
    todoLi.appendChild(todoText);
    // console.log(todoLi);
    var list = document.getElementById("list");
    list.appendChild(todoLi);
    todoInput.value = "";

// create delete btn
    var delBtn = document.createElement("button");
    var del = document.createTextNode("Delete");
    delBtn.appendChild(del);
    todoLi.appendChild(delBtn);
    delBtn.setAttribute("onclick","delBtn(this)");
    // console.log(delBtn);

// create edit button
var editBtn = document.createElement("button");
var editVal = document.createTextNode("Edit");
editBtn.appendChild(editVal);
todoLi.appendChild(editBtn);
editBtn.setAttribute("onclick","editBtn(this)")

}
function delBtn(e){
    e.parentNode.remove()
}
function deleteAll(){
list.innerHTML = "";
}
function editBtn(a){
    var editVal = prompt("Enter Edit Value");
    a.parentNode.firstChild.nodeValue = (editVal);
    console.log(a); 
}
