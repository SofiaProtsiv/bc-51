# FAQ

## 1. Виведи у консоль тих людей, які старше 19 років. Використовуй перебираючі методи масива та роботу з датами.

```js
const people = [
  {
    name: "Wes",
    year: 2001,
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Max",
    year: 1986,
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Mike",
    year: 1970,
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Lili",
    year: 2005,
    phptoURL:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
  },
];

function isAdult(data) {}

isAdult(people);
```

## 2. Виконай задачки, які направлні на роботу з датами та використанням бібліотеки [date-fns](https://date-fns.org/).

1. Напишіть функцію, яка приймає формат (наприклад, "yyyy-mm-dd" або "dd/mm/yyyy") та повертає сьогоднішню дату у вказаному форматі.

```js
import { format } from "date-fns";

function formatDate(formatString) {}

onsole.log(formatDate("EEEE, MMMM d, yyyy")); // "Wednesday, May 4, 2022"
console.log(formatDate("dd/MM/yyyy HH:mm:ss")); // "04/05/2022 12:30:45"
console.log(formatDate("h:mm a")); // "12:30 PM"
console.log(formatDate("MMMM do yyyy, h:mm:ss a")); // "May 4th 2022, 12:30:45 PM"
console.log(formatDate("yyyy/MM/dd")); // "2022/05/04"
console.log(formatDate("dd.MM.yyyy")); // "04.05.2022"
console.log(formatDate("dd MMM yyyy")); // "04 May 2022"
```

2. Напишіть функцію, яка приймає дату в форматі "yyyy-mm-dd" та повертає кількість днів, що пройшли з цієї дати до сьогоднішньої дати.

```js
import { differenceInDays } from "date-fns";

function daysSince(dateString) {}

console.log(daysSince("2022-01-01"));
```

3. Напишіть функцію, яка приймає масив ат в форматі "yyyy-mm-dd" та повертає масив з назвами дня тижня, на які припадають ці дати.

```js
import { format } from "date-fns";

function getDaysOfWeek(dateStrings) {}

console.log(getDaysOfWeek(["2022-05-01", "2022-05-02", "2022-05-03"])); // => ["Sunday", "Monday", "Tuesday"]
```

4. Напишіть функцію, яка приймає дату та кількість днів та повертає дату, яка буде через передану кількість днів після заданої дати:

```js
import { addDays, format } from "date-fns";

function addDaysToDate(dateString, days) {}

console.log(addDaysToDate("2022-05-04", 7)); // => "2022-05-11"
```

## 3. Promises. Typical interview questions, Що виведе в console.log()?
  #### 3.1. 
  ```js
  console.log(1);

  setTimeout(() => console.log(2));

  Promise.resolve().then(() => console.log(3));

  Promise.resolve().then(() => setTimeout(() => console.log(4)));

  Promise.resolve().then(() => console.log(5));

  setTimeout(() => console.log(6));

  console.log(7);
  ```

  #### 3.2.
  ```js
  Promise.reject('reject 1')
    .catch(error => console.log(error))
    .then(value => console.log(value))
    .catch(error => console.log('reject 2'))
 ```

  #### 3.3.
  ```js
    console.log('start');

    const fn = () =>
      new Promise((resolve, reject) => {
        console.log(1);
        resolve('success');
      });

    console.log('middle');

    fn().then(res => {
      console.log(res);
    });

    console.log('end');
 ```

  #### 3.4. 
  ```js
  const a = Promise.reject(1);
  const b = new Promise((resolve) => {
    setTimeout(() => resolve('foo'), 1000);
  });
  const c = Promise.resolve('bar');

  Promise.all([a, b, c])
    .then(console.log)
    .catch(console.log);
  ```

  #### 3.5. 
  ```js
  console.log('start');
  const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
      console.log('timer2');
    }, 0);
  });
  const timer1 = setTimeout(() => {
    console.log('timer1');
    const promise2 = Promise.resolve().then(() => {
      console.log('promise2');
    });
  }, 0);
  console.log('end');
  ```

## 4. У вас є масив об'єктів `cars` з даними про автомобілі Tesla. Ви повинні створити HTML-картки для кожного автомобіля з даними про назву, ціну та зображення. При введенні користувачем назви автомобіля в полі input, відбувається пошук автомобілів за назвою і вивід на екран відповідних карток. Викликай функцію `fetchCarsFromList`, яка є проміфікованою, через 300ms після зупини події input. Використовуй [lodash.debounce](https://www.npmjs.com/package/lodash.debounce?activeTab=readme). Крім того, при пошуку, поки триває процес фільтрації запускай loader (створи setTimeout на 2000ms аби зробити фейкову затримку resolve/reject), викоритовуй бібліотеку [ldLoader](https://loading.io/lib/loader/), а в разі неуспішного пошуку виводиться повідомлення про відсутність результатів за допомогою бібліотеки [Notiflix](https://github.com/notiflix/Notiflix#readme)

- Використовуй цей html [cars.html](./cars.html)

```js
      const cars = [
        {
          id: 1,
          name: "Model S",
          price: "From $79,990",
          image:
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Main-Hero-Desktop-LHD",
        },
        {
          id: 2,
          name: "Model X",
          price: "From $99,990",
          image:
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-X-Main-Hero-Desktop-LHD",
        },
        {
          id: 3,
          name: "Model Y",
          price: "From $41,190",
          image:
            "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-Y-Main-Hero-Desktop-Global",
        },
        {
          id: 4,
          name: "Cybertruck",
          price: "From $39,900",
          image: "https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg",
        },
      ];

      const catalog = document.querySelector(".catalog");
      const input = document.querySelector("input");

      function createCarCardMarkup(data) {
        return data
          .map(({ id, name, model, price, image }) => {
            return `
              <li class="tesla-cars" id="${id}">
        <div class="tesla-car">
          <img src="${image}" alt="${name}" class="tesla-car__image">
          <div class="tesla-car__info">
            <h2 class="tesla-car__name">${name}</h2>
            <p class="tesla-car__price">${price}</p>
          </div>
        </div>
      </li>
        `;
          })
          .join("");
      }

function fetchUsersFromList(carsList, carName) {}
```

## 5. Створи міні інстаграм. В тебе є масив posts, де кожен пост це об'єкт, який треба зарендирити на сторінку і дати йому певну функціональність. Одразу розділяй код, створи posts.js, createPostMarkup.js, helpers.js і це все імпортуй у index.js.

- Використовуй цей html [posts.html](./posts.html)

1. У файлі `posts.js`, розмісти базу даних постів і експортуй дефолтним експортом.

2. У файлі `createPostMarkup.js` розмісти функцію `createPostMarkup()`, яка прийматиме масив posts як аргумент. Експортуй її дефолтним експортом.

3. У файлі створи функцію `formatData()`, яка форматуватиме дату створення поста задопомогою бібліотеки `date-fns` i імпортуй цю функцію у файл `createPostMarkup.js` аби вставити відформатовану дату в розмітку:
```js
Input: "2022-05-01T09:00:00Z" 
Output: "02 May 2022"
```

4. У `index.js` потрібно зарендирити пости на сторінку у список з класом ".posts"

5. Додай наступний функціонал, попрацюй з поширенням подій:
  5.1. Додай можливість поставити від себе лайк. Створи допоміжну функцію `handleLike()`. Коли було клікнуто на елемент з класом "post-likes" то додавай елменту клас "liked", збільшуй кількість лайків на 1 і додавай id поста у local storage (при повторному кліку роби зворотні дії)
  5.2. Додай можливість відкрити та почитати пости. Створи допоміжну функцію `handleOpenComments()`. Щоб прихований блок коментарів відкрився вішай на елемент з класом "list-comments" клас "open", при повторному кліку прибирай цей клас
```js
      const posts = [
        {
          id: 1,
          createdDate: "2022-05-01T09:00:00Z",
          description: "Чудовий ранок на природі 🌳🌞 #природа #ранок",
          image:
            "https://plus.unsplash.com/premium_photo-1663013189347-b43e7657cc27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          comments: [
            {
              username: "user1",
              text: "Красиво 😍",
            },
            {
              username: "user2",
              text: "Дуже класно! 🤩",
            },
          ],
          likes: 25,
          location: "Лісова поляна",
          username: "user1",
        },
        {
          id: 2,
          createdDate: "2022-05-02T14:30:00Z",
          description: "Смачний обід з друзями 🍝🍷 #їжа #друзі",
          image:
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          comments: [
            {
              username: "user3",
              text: "Виглядає дуже смачно 😋",
            },
            {
              username: "user4",
              text: "Яка гарна компанія 👍",
            },
          ],
          likes: 30,
          location: "Ресторан 'La Dolce Vita'",
          username: "user2",
        },
        {
          id: 3,
          createdDate: "2022-05-03T19:45:00Z",
          description: "Чудовий захіж сонця на пляжі 🌅🏖️  #пляж",
          image:
            "https://plus.unsplash.com/premium_photo-1663954865103-fc7b4d3c5ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          comments: [
            {
              username: "user5",
              text: "Неймовірно красиво 😍",
            },
            {
              username: "user6",
              text: "Дуже романтично 🌹",
            },
          ],
          likes: 40,
          location: "Пляж 'Sunset'",
          username: "user3",
        },
      ];

      function createPostMarkup(data) {
        return data
          .map(
            ({
              id,
              image,
              username,
              location,
              description,
              likes,
              comments,
              createdDate,
            }) => {
              return `
            <li class="post" id="${id}">
              <div class="post-header">
                <div class="post-user">
                  <img src="${image}" alt="user-avatar">
                  <span class="post-username">${username}</span>
                </div>
                <div class="post-location">${location}</div>
              </div>
              <div class="post-image">
                <img src="${image}" alt="post-image">
              </div>
              <div class="post-createAt">${createdDate}</div>
              <div class="post-description">${description}</div>
              <div class="post-stats">
                <div class="post-likes">
                  ${likes} likes</div>
                <div class="post-comments">
                  <div class="comments-number">${comments.length} comments</div>
                  <ul class="list-comments">
                    ${comments
                      .map(({ username, text }) => {
                        return `
                        <li><strong>${username}:</strong> ${text}</li>
                      `;
                      })
                      .join("")}
                  </ul>
                </div>
              </div>
            </li>
          `;
            }
          )
          .join("");
      }
```

## 6. Викоритовуй шаблон будильника з файлу [clock.html](./clock.html), а з папки [assets](./assets/) завантаж собі svg i rington, вони нам треба для роботи. Всю послідовність дій описано нижче. Завдання полягає у тому щоб створити будильник який буде запускати звук по завершенню. Тут потрібно працювати з new Data, setInterval() та даними з документу.

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