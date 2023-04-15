## 1. 
```html
  <h1>Список задач</h1>
  <input type="text" id="taskInput" placeholder="Добавить задачу">
  <button id="addButton">Добавить</button>
  <ul id="taskList"></ul>
  ```
```js
// Получаем ссылки на необходимые элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Обработчик события для кнопки "Добавить"
addButton.addEventListener('click', function() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});

// Обработчик события для элементов списка задач
taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

// Обработчик события для кнопки "Удалить"
taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove();
  }
});

```