# Модуль 6. Заняття 12. DOM i events

## 1. Form Events, Input, Blur and Focus.

Викоритовуй шаблон форми з файлу [form.html](./form.html).

- Витягни дані з форми і при події `submit` законсоль їх.

- При події `input`, якщо користувач ввів в поле більше 6 символів то зробити `outline` => `'3px solid yellow'`. Якщо ж символів менше аніж 6, то нехай `outline` буде => `'3px solid blue'`

- При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то
  `outline` => `'3px solid blue'`

- При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то
  `outline` => `'3px solid lime'`

```js
const formSubmitRef = document.querySelector(".js-contact-form");
const formUserNameRef = formSubmitRef.querySelector(".js-username-input");

formSubmitRef.addEventListener("submit", () => {});

formUserNameRef.addEventListener("input", () => {});

formUserNameRef.addEventListener("focus", () => {});

formUserNameRef.addEventListener("blur", () => {});
```

## 2. Створіть обробники події `keydown` та `keyup`, якi будуть викликати кожного разу функцію `updateValues` для оновлення контенту елементів на сторінці, коли користувач натискає чи відпускає клавішу на клавіатурі.

```html
<h1>Keyboard Events Exercise</h1>
<p>Press any key to see the key code and key name below:</p>
<p>Key Code: <span id="keyCode"></span></p>
<p>Key Name: <span id="keyName"></span></p>
<p>Shift Key: <span id="shiftKey"></span></p>
<p>Ctrl Key: <span id="ctrlKey"></span></p>
<p>Alt Key: <span id="altKey"></span></p>
<p>Caps Lock: <span id="capsLock"></span></p>
```

```js
// refs
const keyCode = document.getElementById("keyCode"); // показує код клавіші на яку було нажато
const keyName = document.getElementById("keyName"); // показує клавішу на яку було нажато
const shiftKey = document.getElementById("shiftKey"); // якщо shiftKey було нажато показує 'Pressed' інакше 'Not Pressed'
const ctrlKey = document.getElementById("ctrlKey"); // якщо ctrlKey було нажато показує 'Pressed' інакше 'Not Pressed'
const altKey = document.getElementById("altKey"); // якщо altKey було нажато показує 'Pressed' інакше 'Not Pressed'
const capsLock = document.getElementById("capsLock"); // якщо capsLock увімкнено показує 'On' інакше 'Off'

// Функція для оновлення значень на сторінці
function updateValues(event) {}
```

## 3. Modal. Keyboard events.

Викоритовуй шаблон модального вікна з файлу [modal.html](./modal.html).

- По кліку на `login_btn` відкрий модальне вікно змінивши стиль модалки з `display: "none"` на `display: "block" `
- Отримай дані з форми по події `submit`, виводь дані у консоль і закривай модалку попередньо очистивши форму від введених даних.
- При кліку на хрестик чи по кнопці cancel закривай модалку змінивши стиль з `display: "block"` на `display: "none" `
- Якщо користувач натиснув не на модалку, а на задній фон, також закривай модалку
- Якщо користувач натиснув ESC також закривай модалку

```js
// refs
const modal = document.getElementById("modal");
const form = document.querySelector("form");
const login_btn = document.querySelector("#login_btn");
const cancle_btn = document.querySelector("#cancle_btn");
const closeModal_btn = document.querySelector("#closeModal_btn");

// function which you should add to event listener as callback
function handleFormOpen() {}
function handleFormClose() {}
function handleFormSubmit() {}
```

## 4. Розроби функціонал для вивчення нових англійський слів. У тебе є масив об'єктів `translations`, де кожен об'єкт це слово (оригінал та переклад). `При наведенні` на картку зі словом, користувач повинен побачити переклад слова. Для цього використовуй функцію `getTranslation(word)`, яка прийматиме оригінал слова, яке потрібно перевести, функція повинна повертати переклад даного слова. При наведенні `додавай` на елемент з класом `word` ще один клас `active`, інакше `видаляй` цей клас. Викоритовуй шаблон html з файлу [english.html](./english.html). Наповни список `list` елементами, словами, які є в масиві `translations`.

```js
const translations = [
  {
    original: "hello",
    translation: "привіт",
  },
  {
    original: "flower",
    translation: "квітка",
  },
  {
    original: "apple",
    translation: "яблуко",
  },
];

function getTranslation(word) {}
```

## 5. Створи калькулятор використовуючи шаблон html з файлу [calculator.html](./calculator.html). У кожної кнопки є атрибути `data-type` i `data-value`. Повішай на кожну кнопку з колекції `buttons` обробник подій відповідно до її типу `data-type`. Вибористовуй `switch` оператор для додання відповідної функції, яка повинна виконуватися при кліку. Для спрощення задачі, цей калькулятор зможе обчислювати вираз лише з 2 чисел.

- appendCharacter() - до значення з інпута додає нові значення, формує вираз, результат якого будемо обчислювати далі, конкатенує значення між собою (`data-type = number` і `data-type = operator`)
- clearDisplay() - очищує значення інпута (`data-type = clear`)
- deleteCharacter() - видаляє один символ з кінця (`data-type = delete`)
- calculate() - рахує та відображає результат у інспуті (`data-type = equal`)

```js
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

// Add click event listener to each button

function appendCharacter(character) {}
function clearDisplay() {}
function deleteCharacter() {}
function calculate() {}
```
