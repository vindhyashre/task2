// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToUI(task));
}

// Function to add a task to the UI
function addTaskToUI(task) {
  const li = document.createElement("li");
  li.textContent = task;

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.color = "red";
  deleteBtn.style.cursor = "pointer";

  // Add delete functionality
  deleteBtn.addEventListener("click", () => {
    li.remove();
    removeTaskFromStorage(task);
  });

  // Append the delete button to the list item
  li.appendChild(deleteBtn);

  // Append the list item to the task list
  taskList.appendChild(li);
}

// Function to add a task to localStorage
function addTaskToStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to remove a task from localStorage
function removeTaskFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event listener for adding a task
addTaskButton.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    addTaskToUI(task);
    addTaskToStorage(task);
    taskInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a task!");
  }
});

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);
