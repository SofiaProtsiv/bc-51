# Модуль 7. Заняття 13. Поширення подій.

## 1. Викоритовуй шаблон акордеон меню з файлу [accordion.html](./accordion.html) та напиши наступний функціонал: при кліку на елемент меню, розкривай блок з текстом. При повторному кліку по елементу, розкритий текст приховується. Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.

```js
const listRef = document.querySelector(".js-accordion-list");

function handleBtnClick(event) {}

listRef.addEventListener("click", handleBtnClick);
```

## 2. Викоритовуй шаблон списку завдань з файлу [todoList.html](./todoList.html) для створення функціоналу для списку завдань. Використовуй поширення подій. 

```js
// refs
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to create new task element, return LI element
const createNewTaskElement = (value) => {
  const listItem = document.createElement("li");

  const markup = `
    <input type="checkbox" />
    <label>${value}</label>
    <input type="text" value="${value}" />
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
`;

  listItem.innerHTML = markup;
  return listItem;
};

// Function to add a task to the list (use createNewTaskElement)
function addTask() {
}

// Function to delete a task from the list
function deleteTask(event) {
}

// Function to edit a task (if button with class "edit" contains additional class "editMode" do smth) {
function editTask (event) {
};

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", editTask);
taskList.addEventListener("click", deleteTask);
```

## 3. Викоритовуй шаблон пагінації з файлу [pagination.html](./pagination.html) для розробки функціоналу пагінатора. Використовуй поширення подій. Додавай клас `active` на поточну сторінку. Створи допоміжну функцію `updateActivePage`, яка повинна обновляти активний клас. Функція `handleClick`повинна викликатися коли відбувається клік на елементі `pagination`.
