let tasks = ['Task 1', 'Task 2', 'Task 3'];

// Define variables
const newTask = document.getElementById('new-task');
const section = document.getElementById('section');
const closeBtn = document.getElementById('close-btn');
const userInput = document.getElementById('userInput');
const addBtn = document.querySelector('.add');
var container, taskText, checkbox, deleteTask;

// Show window for new task
newTask.addEventListener("click", addNewTask);
// Close window for new task
closeBtn.addEventListener("click", closeNewTask);
// Add new task
addBtn.addEventListener("click", addTask);
// Remove task
// deleteTask.addEventListener("click", removeTask);

// Show section
function addNewTask() {
    section.style.display = "block";
}

// Hide section
function closeNewTask() {
    section.style.display = "none";
    userInput.value = "";
}

// On document load
document.addEventListener('DOMContentLoaded', () => {
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
})

// Add new task to task list
function addTask() {
    if (userInput.value.length > 0) {
        tasks.push(userInput.value);
        container = document.createElement("div");
        taskText = document.createElement("div");
        checkbox = document.createElement("input");

        container.className = "tasks";

        taskText.innerHTML = userInput.value;
        taskText.className = "wrapper";

        checkbox.type = "checkbox";
        checkbox.className = "status";

        document.querySelector('.list-container').appendChild(container);
        container.appendChild(taskText);
        container.appendChild(checkbox);
    }
    userInput.value = "";
}

function removeTask() {
    // if (tasks.length > 0) {
        
    // }
}