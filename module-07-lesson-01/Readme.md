# Модуль 7. Заняття 13. Поширення подій.

## 1. Color Palete. Динамічно відрендери 100 блоків div з класом item задопомогою функції createPaletteItems() і помісти всі ці блоки в colorPalette. Використовуй getRandomColor для назначення рандомного кольору item. При кліку на палетку кольорів зафарбовуй body у вибраний колір. 

Викоритовуй шаблон акордеон меню з файлу [palette.html](./palette.html) 

```js
const colorPalette = document.querySelector('.color-palette');

function selectColor() {}

function createPaletteItems() {}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
```
## 2. Викоритовуй шаблон акордеон меню з файлу [accordion.html](./accordion.html) та напиши наступний функціонал: при кліку на елемент меню, розкривай блок з текстом. При повторному кліку по елементу, розкритий текст приховується. Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.

```js
const listRef = document.querySelector(".js-accordion-list");

function handleBtnClick(event) {}

listRef.addEventListener("click", handleBtnClick);
```

## 3. Викоритовуй шаблон списку завдань з файлу [todoList.html](./todoList.html) для створення функціоналу для списку завдань. Використовуй поширення подій.

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
            <button data-action="edit">Edit</button>
            <button data-action="delete">Delete</button>
          </div>
        </li>
        `;

  return todoMarkup;
};

// Function to handle submit action
function handleSubmit() {}

// Function to add a task to the list (use createNewTaskElement)
function addTask() {}

// Function to delete a task from the list
function deleteTask() {}

// Function to edit a task (toggle class active, if button EDIT has class active:
// change button textContent to "Save", add class "active" for button
// add class "active" for input, and remove "disabled" attribute
// else do reverse actions
function editTask() {}

form.addEventListener("submit", handleSubmit)
ul.addEventListener("click", editTask);
ul.addEventListener("click", deleteTask);
```

## 4. Напиши скрипт, який дозволить залишати відгук у форматі від 1 до 5 зірочок. При кліку на клжну зірочку повинна викликатися функція updateRating(), яка прийає індекс елемента, на який було нажато і порівнює його з поточним аби дати зірочкам активний колір. Якщо ж спершу було поставлено 5 зірок, а потім користувач вирішив змінити на 3 зірочки, то прибирай з активних зірочок клас active

### Викоритовуй шаблон рейтингу з файлу [rating.html](./rating.html) 
```js
const starsEl = document.querySelectorAll(".fa-star");

function updateRating(clickedStar) {}
```