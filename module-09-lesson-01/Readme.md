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

## 4. Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, картинка зараз показується. 
Стиль для body для плавного переходу
```css
body {
  background-repeat: no-repeat;
  transition: background-image 1s ease-in-out;
}
```

```js
const images = [
  'url("https://picsum.photos/id/1015/1920/1080")',
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")'
];

function changeBackground(){}
```

## 5. Напиши функцію updateTestimonial();, якиа кожних 5 секунд буде оновлювати відгук на сторінці. В тебе є масив відгуків, кожних 5 секунд оновлюй текстовий вміст відгука, який вже є у шаблоні, на дані з масиву. Якщо ти дійшов до останнього відгука, то починай спочатку.

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

## 6. Викоритовуй шаблон будильника з файлу [clock.html](./clock.html), а з папки [assets](./assets/) завантаж собі svg i rington, вони нам треба для роботи. Всю послідовність дій описано нижче. Завдання полягає у тому щоб створити будильник який буде запускати звук по завершенню. Тут потрібно працювати з new Data, setInterval() та даними з документу

```js
// змінні
const currentTime = document.querySelector('h1');
const content = document.querySelector('.content');
const selectMenu = document.querySelectorAll('select');
const setAlarmBtn = document.querySelector('button');

// тут зберігатиметься час на який ти поставив будильник (до прикладу 03:10 АМ)
let alarmTime;

// тут зберігатиметься бульове значення, чи поставили ми будильник чи ні
let isAlarmSet;

// тут ми ставорюємо музику для будильника
const ringtone = new Audio('./assets/ringtone.mp3');

// не забуть поставити поточний час для годинника (currentTime), бо по дефолту в html 00:00:00. Для цього використай клас new Data, а для зручності метод toLocaleTimeString()

// візьми до уваги такий формат створення елементів, в HTML це зайняло би досить загато часу і стрічок коду. Тут вже нічого не змінюй, тут відбувається динамічне заповнення селектів на сторінці (години, хвилини, секунди)
selectMenu.forEach(element => {
  const selectName = element.dataset.select;

  switch (selectName) {
    case 'hour':
      for (let i = 23; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        element.firstElementChild.insertAdjacentHTML('afterend', option);
      }
      break;
    case 'minute':
      for (let i = 59; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        element.firstElementChild.insertAdjacentHTML('afterend', option);
      }
      break;
    case 'second':
      for (let i = 59; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        element.firstElementChild.insertAdjacentHTML('afterend', option);
      }
      break;
  }
});

// додай можливість змінювати час нашого годинника кожну секунду:
// якщо alarmTime на якому моменті співпаде з поточним часом, то увімкни рингтон:
// if (case) {
//   ringtone.play();
//   ringtone.loop = true;
// }

// cтвори функцію setAlarm яка:
//1. перевіряє чи ти обрав всі параметри, секунди, хвилини та годину, чи не пусті ті значення, якщо ж ти не обрав щось то поверни alert('Please, select a valid time to set Alarm!');

// 2. Якщо ти назначив будильник на якийсь час, і нажав кнопку 'Set Alarm', то
// збережи час на який ти поставив будильник(alarmTime)
// вкажи, що будильник поставлено (isAlarmSet = true)
// зроби всі селекти неактивними, дадавши на блок content клас disable
// зміни колір кнопки setAlarmBtn на активний, додавши клас active
// та звичайно ж не забувай про текст кнопки setAlarmBtn, тепер він має бути Clear Alarm, бо ти щойно включив будильник

// 3. Якщо ж ти хочеш вимкнути будильний, або скасувати його, то зупини рингтон (ringtone.pause()) і зроби зворотні дії:
// очисти значення змінної alarmTime
// зміни isAlarmSet = true на false
// зроби всі селекти активними, видаливши з блоку content клас disable
// зміни колір кнопки setAlarmBtn на неактивний, видаливши клас active
// зміни текст кнопки setAlarmBtn на "Set Alarm"
function setAlarm() {}

// додай слухача подій на кнопку Set Alarm
```