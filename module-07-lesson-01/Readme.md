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
function addTask() {}

// Function to delete a task from the list
function deleteTask(event) {}

// Function to edit a task (if button with class "edit" contains additional class "editMode" do smth) {
function editTask(event) {}

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", editTask);
taskList.addEventListener("click", deleteTask);
```

## 3. Виправ помилки у коді. В прикладі використано бібліотеку SImpleLightBox, яка забезпечує зручний спосіб реалізації ефектів переходу, попереднього перегляду та збільшення зображень для користувачів.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>SimpleLightbox</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.9.0/simple-lightbox.min.css"
      integrity="sha512-y3NISuXPWLtakXJJ2f4TpwJkvjbD8ud9hz398kDZB5eGGmIIufRcMhuz+/ld9L7zCmQheAZjtyfFLyN5w9P0rw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <ul class="gallery">
      <li>
        <img
          width="500"
          src="https://thelandscapephotoguy.com/wp-content/uploads/2019/01/landscape%20new%20zealand%20S-shape.jpg"
          alt="Beautiful Landscape"
        />
      </li>
      <li>
        <img
          width="500"
          src="https://sf2.mariefranceasia.com/wp-content/uploads/sites/7/2016/05/gettyimages-520933192-615x410.jpg"
          alt="Beautiful Mointains"
        />
      </li>
    </ul>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.9.0/simple-lightbox.min.js"
      integrity="sha512-d3VUxSAz6ET/1m4LI8NrqHb25ziUKeYQHHyGPvx2Q6yD8Tuw4MP0oRXXYkGKh/nylBy2+7I1LF/WaDyLoAz1ug=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script>
      const lightbox = new SimpleLightbox(".gallery li", {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
      });
    </script>
  </body>
</html>
```

## 3. Викоритовуй шаблон пагінації з файлу [pagination.html](./pagination.html) для розробки функціоналу пагінатора. Використовуй поширення подій. Додавай клас `active` на поточну сторінку. Створи допоміжну функцію `updateActivePage`, яка повинна обновляти активний клас. Функція `handleClick`повинна викликатися коли відбувається клік на елементі `pagination`.
