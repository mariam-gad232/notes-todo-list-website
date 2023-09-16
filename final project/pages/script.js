const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const notesList = document.getElementById("notes-list");

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todosList = document.getElementById("todos-list");

noteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const noteItem = document.createElement("div");
    noteItem.classList.add("note");
    noteItem.textContent = noteText;
    notesList.appendChild(noteItem);
    noteInput.value = "";
  }
});

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const todoLabel = document.createElement("label");
    todoLabel.textContent = todoText;
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoLabel);
    todosList.appendChild(todoItem);
    todoInput.value = "";
  }
});