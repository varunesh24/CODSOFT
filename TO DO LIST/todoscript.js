document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("task");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
      deleteTask(e.target.parentElement);
    }
  });

  // Load tasks from local storage
  loadTasks();

  function addTask(text) {
    const li = document.createElement("li");
    li.innerHTML = `
      ${text}
      <button class="delete">Delete</button>
    `;
    taskList.appendChild(li);

    // Save the task to local storage
    saveTask(text);
  }

  function deleteTask(task) {
    task.remove();
    // Remove the task from local storage
    removeTask(task.textContent);
  }

  function saveTask(taskText) {
    const tasks = getTasksFromStorage();
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function removeTask(taskText) {
    const tasks = getTasksFromStorage();
    const filteredTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

  function getTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
  }

  function loadTasks() {
    const tasks = getTasksFromStorage();
    tasks.forEach(task => addTask(task));
  }
});
