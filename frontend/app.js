function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (!task) return;

    const li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const taskTitle = input.value.trim();
  if (!taskTitle) return;

  // Send to backend
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: taskTitle })
  });

  const newTask = await response.json();

  const li = document.createElement("li");
  li.textContent = newTask.title;
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

// Load existing tasks from backend
async function loadTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks = await response.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    list.appendChild(li);
  });
}

// Load tasks on page load
window.onload = loadTasks;
