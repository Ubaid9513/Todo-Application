var task_inp = document.getElementById("task_inp");
var task_list = document.getElementById("task_list");
function addTask() {
  if (task_inp.value === "") {
    alert("Enter Task");
  } else {
    // create li
    var task_li = document.createElement("li");
    task_li.innerHTML = task_inp.value;
    task_list.appendChild(task_li);
    task_inp.value = "";

    // delete button
    var del_task = document.createElement("button");
    var delVal = document.createTextNode("Delete");
    del_task.appendChild(delVal);
    del_task.setAttribute("onclick", "delTask(this)");
    task_li.appendChild(del_task);

    // edit button

    var edit_task = document.createElement("button");
    var edit_val = document.createTextNode("Edit");
    edit_task.appendChild(edit_val);
    // edit_task.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    task_li.appendChild(edit_task);
    edit_task.setAttribute("id", "edit-button");
    edit_task.setAttribute("onclick", "editTask(this)");
  }

   // Edit Input 

   var editInputField = document.createElement("input");
   editInputField.setAttribute("id", "editTaskInput");
   editInputField.value = task_li;
   taskOutputContainer.appendChild(editInputField);
   console.log(editInputField.parentElement);

    // Task List Para 
    let taskOutputPara = document.createElement("p");
    taskOutputPara.innerText = task;
    taskOutputPara.setAttribute("id", "outputPara");
    taskOutputContainer.appendChild(taskOutputPara);
}
function delTask(e) {
  e.parentNode.remove();
}
function editTask(e) {
    let paraEditParentElement = e.parentElement.parentElement.firstChild;
    console.log(paraEditParentElement);
    let editInput = paraEditParentElement.children[1];
    editInput.setAttribute("onblur", "changeModifier(this)");
    editInput.style.display = "flex";
    let originalParaTask = paraEditParentElement.children[0];
    originalParaTask.style.display = "none";
}
function changeModifier(input) {
    let modifiedTaskValue = input.value;
    let paragraphElement = input.parentElement.children[0];
    paragraphElement.style.display = "flex";
    input.style.display = "none";
    console.log(paragraphElement);
    console.log(modifiedTaskValue);
    if (modifiedTaskValue === "") {
        paragraphElement.innerText = task;
        alert("You have'nt make any change")
    } else {
        task = modifiedTaskValue;
        paragraphElement.innerText = task;
    }
}
// function editTask(){

// }
function delAll() {
  task_list.innerHTML = " ";
}
