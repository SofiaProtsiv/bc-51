# Модуль 7. Заняття 14. Debounce and Trottle

## 1. Find country

- Використовуй html з файлу [find_countries.html](./find_countries.html).
- Використовуй масив країн з файлу [countries.js](./countries.js)

Створи функціонал пошуку країни за її назвою.
- Є масив об'єктів, де кожен об'єкт це країна з своїм набором значень.
- Створи функцію `handleInput`, яка буде викликатися кожного разу коли користувач вводить щось в інпут.
- Необхідно застосувати прийом `Debounce` на обробнику події, щоб запускати функцію `handleInput` не одразу, а через 300мс після того, як користувач перестав вводити текст. Використовуй lodash.debounce.
- Якщо користувач повністю очищає поле пошуку, то розмітка списку країн або інформації про країну зникає.
- Якщо у масиві країн знайшлося більше однієї країни, під тестовим полем відображається список знайдених країн. Кожен елемент списку складається з прапора та назви країни.
```html
<li>
    <div class="countryFlag">
    <p class="countryName">Ukraine 🇺🇦</p>
</li>;
```
- Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається розмітка картки з даними про країну: прапор, назва, столиця, населення.
```html
<li>
    <div class="previewCard">
        <div class="countryFlag">
        <p class="countryName">Ukraine 🇺🇦</p>
    </div>
    <p class="countryCapital"><b>Capital </b> Kyiv</p>
    <p class="countryPopulation"><b>Population: </b>41 342 765</p>
    <p class="countryArea"><b>Area: </b>603.628</p>
</li>
  ```
- Якщо країни не було знайдено у масиві, то розмітка списку країн або інформації про країну зникає і показується повідомлення в `errorTextRef` про те що `""Oops, there is no country with that name""`

```js
const refs = {
 searchInputRef: document.querySelector('#search-box');
 errorTextRef: document.querySelector('.output-error');
 listRef: document.querySelector('.country-list');
}
const {searchInputRef, errorTextRef, listRef} = refs;

function handleInput(){}

function createCountryList() {};

function createCountryCard() {};
```
