# Модуль 11. Заняття 21. Async. Await

## 1. Написати функцію, яка отримує на вхід масив імен користувачів та повертає їхні аватарки з [GitHub API](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user) використовуючи async/await синтаксис.

- Створити функцію getUserAvatars, яка отримує на вхід масив імен користувачів.
```js
const usersLogins = [
  "luxplanjay",
  "SofiaProtsiv",
  "qweeqer",
  "Maxwelllife",
  "xWinst",
  "AleksZhov",
  "gsmoff",
];
```
- В тілі функції створити порожній масив userAvatars.
- Використовуючи цикл for..of, перебрати масив імен користувачів та для кожного імені виконати наступні дії:
    1. Створити змінну response та присвоїти їй значення отримане з методу fetch, де в якості URL буде вказано https://api.github.com/users/${username}.
    2. Використовуючи оператор await, дочекатись отримання результату від запиту до API.
    3. Використовуючи метод json(), отримати дані у форматі JSON та зберегти їх в змінну userData.
    4. До масиву userAvatars додати значення, яке повертається з виклику методу userData.avatar_url.
- Повернути масив userAvatars.


## 2. Rewrite function to async await

```js
const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
const getContacts = () => {
  return fetch(`${BASE_URL}/contacts`).then(response => response.json());
};

// GET -> /contacts/:id
const getContactById = id => {
  return fetch(`${BASE_URL}/contacts/${id}`).then(response => response.json());
};

// POST -> /contacts
const createContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts`, options).then(response =>
    response.json()
  );
};

// PUT -> /contacts/:id
const updateContact = newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
    response => response.json()
  );
};

// DELETE -> /contacts/:id
const deleteContact = id => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/contacts/${id}`, options).then(response =>
    response.json()
  );
};
```

## 3. Infinite Scrolling with Intersection Observer API and async/await

- Використовуй html з файлу [infinite_scroll.html](./infinite_scroll.html).
- Шаблон створення спостерігача [obsorver.js](../module-07-lesson-02/obsorver.js)

Необхідно розробити "безкінечний" скрол для відображення списку дописів. На початку загружається перші 20 дописів, при скролі до кінця списку (коли moreBlock стає видимим), показується наступні 20 дописів, доки не досягнуто кінця всього списку. Інформація про дописи отримується з зовнішнього API, а саме [{JSON} Placeholder API](https://jsonplaceholder.typicode.com/)

1. Створюємо змінні:

- `list` - знаходить елемент списку у HTML-документі за допомогою класу "list";
- `moreBlock` - знаходить кнопку у HTML-документі за допомогою класу "more";
- `page` - зберігає номер поточної сторінки, яка буде відображатися;
- `limit` - зберігає кількість дописів, які будуть завантажуватися за раз;
- `totalPages` - зберігає загальну кількість сторінок, які будуть завантажуватися.

2. Створюємо функції:

- `fetchPosts()` - звертається до зовнішнього API за допомогою HTTP-запитів для отримання даних про дописи з використанням параметрів `_limit` і `_page`. Після того, як запит виконано успішно, повертається об'єкт з даними дописів у форматі JSON.
- `loadItems()` - визначає, чи досягнуто кінця списку, і викликає функцію `fetchPosts()`, щоб отримати дані про дописи для завантаження на сторінку. Після завантаження дописів, збільшується значення змінної `page`, створюється розмітка з дописами і вставляється на сторінку.
- `observer` - створює новий екземпляр IntersectionObserver, який слідкує за тим, чи досягнуто кінця списку, та викликає функцію `loadItems()` для завантаження наступних дописі
