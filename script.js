let input = document.querySelector(".input");
let button = document.querySelector(".add");
let tasks = document.querySelector(".tasks");


button.onclick = function () {
    if (input.value != "" ) {
    let task = document.createElement("div");
    task.className = "task";
    let delet = document.createElement("button");
    delet.className = "delete";
    let taskText = document.createElement("p");
    taskText.className = "task-text";

    delet.textContent = "Delete";

    taskText.textContent = input.value;
    task.appendChild(taskText);
    task.appendChild(delet);
    tasks.appendChild(task);

    input.value = "";

    let allTasks = [];
    let info = document.querySelectorAll(".task-text");

    info.forEach(function (task) {
            let user = {
                id:get_random(),
                task:task.textContent
            };
            allTasks.push(user);
        });
        window.localStorage.setItem("tasks",JSON.stringify(allTasks));
    
}}

  

document.addEventListener("click", function (event) {
    if (event.target.className == "delete") {
        event.target.className = "deleted";
        let deleted = document.querySelector(".deleted").parentElement;
        deleted.remove();
        let allTasks = [];
    let info = document.querySelectorAll(".task-text");
    info.forEach(function (task) {
            let user = {
                id:get_random(),
                task:task.textContent
            };
            allTasks.push(user);
        });
        window.localStorage.setItem("tasks",JSON.stringify(allTasks));
    }
});


if (window.localStorage.getItem("tasks")) {
    let allTask = JSON.parse(window.localStorage.tasks);
    allTask.forEach (function (element) {
        let task = document.createElement("div");
        task.className = "task";
        let delet = document.createElement("button");
        delet.className = "delete";
        let taskText = document.createElement("p");
        taskText.className = "task-text";
        delet.textContent = "Delete";
        taskText.textContent = element.task;
        task.appendChild(taskText);
        task.appendChild(delet);
        tasks.appendChild(task);
    });
}

function get_random () {
    let list = [0,1,2,3,4,5,6,7,8,9];
    let id = [];
    for(let i = 0; i < 10; i++) {
        id.push(list[Math.floor((Math.random()*list.length))]);
    }
    return id.join("");
  };