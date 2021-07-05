let tasks = ['Task 1', 'Task 2', 'Task 3'];

// Define variables
const newTask = document.getElementById('new-task');
const section = document.getElementById('section');
const closeBtn = document.getElementById('close-btn');
const userInput = document.getElementById('userInput');
const addBtn = document.querySelector('.add');
var container, taskText, checkbox, deleteTask, empty;

// Show window for new task
newTask.addEventListener("click", addNewTask);
// Close window for new task
closeBtn.addEventListener("click", closeNewTask);
// Add new task
addBtn.addEventListener("click", addTask);

// Show section
function addNewTask() {
    section.style.display = "block";
}

// Hide section
function closeNewTask() {
    section.style.display = "none";
    userInput.value = "";
}


// Add container and append child for each task in array
for (let task of tasks) {
    container = document.createElement("div");
    taskText = document.createElement("div");
    checkbox = document.createElement("input");
    deleteTask = document.createElement("div");
    
    container.className = "tasks";

    taskText.innerHTML = task;
    taskText.className = "wrapper";

    checkbox.type = "checkbox";
    checkbox.className = "status";

    deleteTask.innerHTML = "x";
    deleteTask.className = "delete-btn";
    
    document.querySelector('.list-container').appendChild(container);
    container.appendChild(taskText);
    container.appendChild(checkbox);
    container.appendChild(deleteTask);
}

// Hide task when closed
const close = document.getElementsByClassName('delete-btn');
for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function() {
        var div = this.parentElement;
        div.style.display = "none";   
        tasks.splice(tasks[i], 1);
        if (tasks.length === 0) {
            empty = document.createElement("div");
            empty.innerHTML = "You have no pending tasks.";
            empty.className = "empty";
            
            document.querySelector('.list-container').appendChild(empty);
       }
    });
}

// Add new task to task list
function addTask() {
    if (userInput.value.length > 0) {
        tasks.push(userInput.value);
        container = document.createElement("div");
        taskText = document.createElement("div");
        checkbox = document.createElement("input");
        deleteTask = document.createElement("div");

        container.className = "tasks";

        taskText.innerHTML = userInput.value;
        taskText.className = "wrapper";

        checkbox.type = "checkbox";
        checkbox.className = "status";

        deleteTask.innerHTML = "x";
        deleteTask.className = "delete-btn";

        document.querySelector('.list-container').appendChild(container);
        container.appendChild(taskText);
        container.appendChild(checkbox);
        container.appendChild(deleteTask);

        console.log(tasks.length);
        if (tasks.length > 0) {
            empty.style.display = "none";
        }
    }
    userInput.value = "";

    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function() {
            var div = this.parentElement;
            div.style.display = "none";
            tasks.length += 1;
        });
    }
}
