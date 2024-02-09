let tasksList =[];
let taskInput = document.querySelector(".taskinp");
let taskDiv = document.querySelector(".tasks");
let taskAdd = document.querySelector(".taskbutton");
taskAdd.onclick = taskmaker;
function taskmaker(){
    const node = document.createElement("li");
    node.innerHTML=taskInput.value;
    taskDiv.appendChild(node);
    taskInput.value="";
    console.log("working");

}

