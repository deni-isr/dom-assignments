// array for todo list

const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function displayInfo() {
  const now = new Date();
  const target = document.getElementById("target");

  const browser = navigator.userAgent;
  const os = navigator.platform;

  target.innerHTML = `
    <p><b>Browser info:</b> ${browser}</p>
    <p><b>Operating System:</b> ${os}</p>
    <p><b>Screen size:</b> ${screen.width} x ${screen.height}</p>
    <p><b>Available space:</b> ${screen.availWidth} x ${screen.availHeight}</p>
    <p><b>Date:</b> ${now.toLocaleDateString("fi-FI", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })}</p>
    <p><b>Time:</b> ${now.toLocaleTimeString("fi-FI", {
      hour: "2-digit",
      minute: "2-digit"
    })}</p>
  `;
}

function displayTodo() {
  const todoUl = document.getElementById("todo");
  todoList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.task} ${item.completed ? "✅" : "❌"}`;
    todoUl.appendChild(li);
  });
}

displayInfo();
displayTodo();
