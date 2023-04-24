# Модуль 9. Заняття 17. Timers and date. Asynchrony

## 1. Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй `new Date()` для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.

### Викоритовуй шаблон календаря з файлу [calendar.html](./calendar.html).

```js
const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");
```

## 2. Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що `Your age is 25 years old`; Якщо нічого не введено, то виводь `alert("Please enter your birthday")`Використовуй доповіжні функції для роботи.

### Викоритовуй шаблон форми з файлу [ageCalculator.html](./ageCalculator.html).

```js
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {}

function getAge(birthdayValue) {}

btnEl.addEventListener("click", calculateAge);
```

## 3. Напиши скрипт, який буде рахувати скільки часу залишилося до нового року. Напиши функцію `updateCountdown()`, яка буде оновлювати час. Коли наступить новий рік, зупини таймер.

### Викоритовуй шаблон таймера зворотнього відліку з файлу [countdown.html](./countdown.html).

```js
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00");

updateCountdown();
```

Використовуй наступний код для підрахунку значень:

```js
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// gap - різниця між кінцевою і поточною датою в мілісекундах.
const days = Math.floor(gap / day)
  .toString()
  .padStart(2, "0");
const hours = Math.floor((gap % day) / hour)
  .toString()
  .padStart(2, "0");
const minutes = Math.floor((gap % hour) / minute)
  .toString()
  .padStart(2, "0");
const seconds = Math.floor((gap % minute) / second)
  .toString()
  .padStart(2, "0");
```

## 4. Напиши функцію updateTestimonial();, якиа кожних 5 секунд буде оновлювати відгук на сторінці. В тебе є масив відгуків, кожних 5 секунд оновлюй текстовий вміст відгука, який вже є у шаблоні, на дані з масиву. Якщо ти дійшов до останнього відгука, то починай спочатку.

### Викоритовуй шаблон відгука з файлу [testimonialSlider.html](./testimonialSlider.html).

```js
const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constantine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

updateTestimonial();
```
