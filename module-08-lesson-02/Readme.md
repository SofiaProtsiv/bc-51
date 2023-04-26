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
const themeSwitcher = document.getElementById("theme-switch");

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

form.addEventListener("submit", handleSubmit);
ul.addEventListener("click", deleteTask);
```

## 4. Favorite food.

Напиши функціонал, який дозволить додавати улюблені страви у local storage і стилізувати кнопку задопомгою класу checked для того щоб при оновленні сторінки користувач кожного разу бачив, які страви були його улюбленими.
В будь який момент страву можна видалити з улюблених, просто натиснувши на сердечко, ця дія має видалити клас checked з блоку сердечка та видалити страву з local storage
Функція setFavoritesOnLoad має запускатися при вході на сторінку та додавати клас checked всім тим сердечкам, чиї id були у local storage в улюблених

```js
const products = [
  {
    id: 1,
    title: "Salad",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    title: "Dessert",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/907142/pexels-photo-907142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    title: "Sushi",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/792028/pexels-photo-792028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 4,
    title: "Pizza",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 5,
    title: "Fish",
    description: "Fresh & sweet",
    url: "https://images.pexels.com/photos/840216/pexels-photo-840216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

function createMarkup(products) {
  const markup = products
    .map(({ id, title, description, url }) => {
      return `
          <li class="card" id="${id}">
             <div class="card__image">
                <img src="${url}" alt="${title}" />
             </div>
             <div class="card__info">
                <div class="car__info--title">
                   <h3>${title}</h3>
                   <p>${description}</p>
                </div>
                <div class="card__info--button">
                  <div data-heart>&#x2764;</div>
                </div>
             </div>
          </li>
    `;
    })
    .join("");

  return markup;
}

function setFavoritesOnLoad(){}
```
