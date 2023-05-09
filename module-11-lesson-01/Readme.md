# Модуль 11. Заняття 20. CRUD

## 1. Практика CRUD операцій
Спершу встанови [JSON Server](https://www.npmjs.com/package/json-server), потім у корені робочої папки створи файл `db.json`

```js
{
  "employees": [
    {
      "id": 1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@codingthesmartway.com"
    },
    {
      "id": 4,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 5,
      "first_name": "Jane",
      "last_name": "Doe",
      "email": "jane.doe@example.com"
    },
    {
      "id": 6,
      "first_name": "Bob",
      "last_name": "Johnson",
      "email": "bob.johnson@example.com"
    }
  ]
}
```

і додай у package.json в блок scripts новий скрипт:

```js
    "server": "json-server --watch db.json --port 4000"
```

Тепер задопомогою [Postman](https://www.postman.com/) зроби наступні запити:

```js
GET / employees;
GET / employees / { id };
POST / employees;
PUT / employees / { id };
PATCH / employees / { id };
DELETE / employees / { id };
```

## 2. Використовуючи [TheCatApi](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW) попрактикуйтеся робити запити задопомогою [Postman](https://www.postman.com/)

```js
const API_KEY =
  "live_8d2JOTBlvMIstB5M3kZsPsk8hZUCD6nOkvuAVVyXi4XBLVG4l245hTo9lEbIheab";
```

## 3.Розробити простий додаток для управління списком завдань (todos) з використанням REST API і [JSON Server](https://github.com/typicode/json-server)

Спершу встанови JSON Server, потім у корені робочої папки створи файл db.json

```js
{
  "todos": []
}
```

і додай у package.json в блок scripts новий скрипт:

```js
    "server": "json-server --watch db.json --port 4000"
```

У додатку повинно бути:

- Список завдань, що відображається на екрані з використанням HTML та CSS.
- Функціональність для додавання нового завдання.
- Функціональність для редагування та видалення існуючих завдань.
- Функціональність для позначення завдань як виконані або невиконані.

Для цього потрібно використовувати функції, що виконують запити до API з використанням методів HTTP GET, POST, PUT, PATCH та DELETE.

Усі ці функції повинні бути реалізовані з використанням синтаксису async/await для отримання та обробки даних, отриманих з API.

- Використовуй html для списку завдань для комплексної роботи з запитами та рендерингом [todolist.html](./todolist.html)

```js
const BASE_URL = "http://localhost:4000";

// GET -> /todos
function getTodos() {}

// GET -> /todos/:id
function getTodoById(id) {}

// POST -> /todos
function createTodo(todo) {}

// PUT -> /todos/:id
function updateTodoPUT(newTodo) {}

// PATCH -> /todos/:id
function updateTodoPATCH(newTodo, id) {}

// DELETE -> /todos/:id
function deleteTodo(id) {}
```

Код, який наведений нижче для комплексного вирішення задачі.

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

form.addEventListener("submit", handleSubmit);
ul.addEventListener("click", editTask);
ul.addEventListener("click", deleteTask);
```
