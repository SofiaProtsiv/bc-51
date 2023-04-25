# Модуль 7. Заняття 14. Debounce and Trottle

## 1. Створи функцію changeBackgroundColor, яка змінює колір фону body на випадковий кожні 250 мілісекунд. Додай прослуховувач події scroll до вікна браузера, який викликає функцію debouncedBackgroundColor. Коли користувач прокручує сторінку, колір фону body буде змінюватись з затримкою в 250 мілісекунд.

- Використовуй html з файлу [scroll.html](./scroll.html).
```js
const container = document.querySelector('.container');

const changeBackgroundColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
```

## 2. Find movies

- Використовуй html з файлу [find_cmovies.html](./find_movies.html).
- Використовуй масив фільмів з файлу [movies.js](./movies.js)

Створи функціонал пошуку фільма за його назвою.
- Є масив об'єктів, де кожен об'єкт це фільм з своїм набором значень.
- Створи функцію `handleInput`, яка буде викликатися кожного разу коли користувач вводить щось в інпут.
- Необхідно застосувати прийом `Debounce` на обробнику події, щоб запускати функцію `handleInput` не одразу, а через 300мс після того, як користувач перестав вводити текст. Використовуй lodash.debounce.
- Якщо користувач повністю очищає поле пошуку, то розмітка списку фільмів або інформації про фільм зникає.
- Якщо у масиві фільмів знайшлося більше одного фільма, під тестовим полем відображається список знайдених фільмів. Кожен елемент списку складається з постера та назви фільма.
```html
<li>
    <img src="posterURL" alt="Harry Potter">
    <p class="movieName">Harry Potter</p>
</li>;
```
- Якщо результат запиту - це масив з одним фільмом, в інтерфейсі відображається розмітка картки з даними про фільм: постер, назва, жанр, рейтинг, короткий опис.
```html
<li>
    <div class="previewCard">
        <img src="posterURL" alt="Harry Potter">
        <p class="movieName">Harry Potter</p>
    </div>
    <p class="movieGenre"><b>Genre: </b>comedy</p>
    <p class="movieRationg"><b>Rate: </b>8.5</p>
    <p class="movieDescription"><b>Description: </b>...</p>
</li>
  ```
- Якщо фільма не було знайдено у масиві, то розмітка списку фільмів або інформації про фільм зникає і показується повідомлення в `errorTextRef` про те що `""Oops, there is no movie with that name""`

```js
const refs = {
 searchInputRef: document.querySelector('#search-box');
 errorTextRef: document.querySelector('.output-error');
 listRef: document.querySelector('.movies-list');
}
const {searchInputRef, errorTextRef, listRef} = refs;

function handleInput(){}

function createMoviesList() {};

function createMovieCard() {};
```
