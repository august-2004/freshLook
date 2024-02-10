//tasks

let tasksList =[];
let taskInput = document.querySelector(".taskinp");
let taskDiv = document.querySelector(".tasks");
let taskAdd = document.querySelector(".taskbutton");
taskAdd.onclick = taskmaker;
function taskmaker(){
    const node = document.createElement("li");
    node.innerHTML=taskInput.value;
    tasksList.push(taskInput.value);
    taskDiv.appendChild(node);
    taskInput.value="";
    console.log("working");
}



//time 

let time= document.querySelector(".nowtime");
function timeUpdater (){
const now = new Date();
let hour = now.getHours();
let min = now.getMinutes();

time.innerHTML=hour +":" +min;
}
setInterval(timeUpdater, 1000);
