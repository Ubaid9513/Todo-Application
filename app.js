var task_inp = document.getElementById("task_inp");
var task_list = document.getElementById("task_list");
function addTask(){
    if(task_inp.value === ""){
        alert("Enter Task");
    }
    else{
        // create li 
        var task_li = document.createElement("li");
        task_li.innerHTML = task_inp.value;
        task_list.appendChild(task_li);
        task_inp.value = "";

        // delete button
        var del_task = document.createElement("button");
        var delVal = document.createTextNode("Delete");
        del_task.appendChild(delVal);
        del_task.setAttribute("onclick","delTask(this)")
        task_li.appendChild(del_task);

        // edit button
        var edit_task = document.createElement("button");
        var editVal = document.createTextNode("Edit");
        edit_task.appendChild(editVal);
        task_li.appendChild(edit_task);
        edit_task.setAttribute("onclick","editTask()")
    }
}
function delTask(e){
    e.parentNode.remove();
}
function editTask(){
    
}