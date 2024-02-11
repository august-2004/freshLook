//tasks

let tasksList =[];
let taskInput = document.querySelector(".taskinp");
let taskDiv = document.querySelector(".tasks");
let taskAdd = document.querySelector(".taskbutton");
taskAdd.onclick = taskmaker;
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      taskmaker();
    }
  });
function taskmaker(){
    if (taskInput.value != ""){
    const node = document.createElement("li");
    node.innerHTML=taskInput.value;
    node.classList.add("in");
    tasksList.push(taskInput.value);
    taskDiv.appendChild(node);
    taskInput.value="";
    
    saveTasks();
    }
}






//time 

let time= document.querySelector(".nowtime");
function timeUpdater (){
const now = new Date();
let hour = now.getHours();
let min = now.getMinutes();

if (hour >12)
{
    hour-=12;
}
if (hour<10)
{
    hour = "0"+hour;
}

if (min<10)
{
    min = "0"+min;
}
time.innerHTML=hour +":" +min;
}
setInterval(timeUpdater, 1000);


//save data

function saveTasks(){
    localStorage.setItem("tasks",taskDiv.innerHTML);
}

function retrieveTasks(){
    taskDiv.innerHTML = localStorage.getItem("tasks");
}

retrieveTasks();