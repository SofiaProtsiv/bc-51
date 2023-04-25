# Модуль 8. Заняття 16. Local storage

## 1. Counter

- Використовуй html з файлу [counter.html](./counter.html)
- Отримай всі кнопки з атрибутом data-action
- До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
- При кліку на кнопку data-action="save" зберігай значення counter у local storage
- При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
- При кліку на кнопку data-action="decrease" зменшуй counter на 1
- При кліку на кнопку data-action="increase" збільшуй counter на 1
- При кліку на кнопку data-action="reset" роби counter = 0 

## 2. Theme switcher

- Використовуй html з файлу [themeSwitch.html](./themeSwitch.html)
- Використовуй local storage для зберігання вибраної теми (dark / light)

```js
const themeSwitcher = document.getElementById('theme-switch');

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;

function clickHandler() {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // dont forget about themeSwitcher, if current theme is dark, it should be checked
}
```

## 3. TodoList

- Викоритовуй шаблон списку завдань з файлу [todoList.html](./todolist.html) для створення функціоналу для списку завдань. 
- Використовуй поширення подій а також local storage, щоб при оновленні твої завдання залишалися на сторінці. Для цього використовуй допоміжну функцію setTasksOnLoad, яка буде отримувати далі з LS і додаватиме їх в html
- При виклику функції addTask зберігай завдання local storage і додавай його у розмітку
- При deleteTask знаходь завдання по тексту, та видаляй його і з local storage і з розмітки.

```js
const form = document.querySelector("form");
const input = document.querySelector("#input");
const ul = document.querySelector("#list");

// Function to create new task element, return LI element
const createNewTaskElement = (value) => {
  const todoMarkup = `
        <li>
          <input disabled value="${value}"/>
          <div>
            <button data-action="delete">Delete</button>
          </div>
        </li>
        `;

  return todoMarkup;
};

// Function to handle submit action, call addTask inside
function handleSubmit() {}

// Function to add a task to the list (use createNewTaskElement) and add to LS
function addTask() {}

// Function to delete a task from the list and delete from LS
function deleteTask() {}

// Function to get tasks from LS and set them into ul
function setTasksOnLoad() {}

form.addEventListener("submit", handleSubmit)
ul.addEventListener("click", deleteTask);
```