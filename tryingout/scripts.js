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
    tasksList.push(taskInput.value);
    taskDiv.appendChild(node);
    taskInput.value="";
    console.log("working");}
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

time.innerHTML=hour +":" +min;
}
setInterval(timeUpdater, 1000);




