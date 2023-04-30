# Модуль 10. Заняття 19. Clint-Server. Work with backend

## 1. Використовуючи [Fake Store API](https://fakestoreapi.com/) зроби наступні запити:

- Зробіть запит на отримання всіх продуктів.
- Отримайте відповідь в форматі JSON.
- Розпарсіть JSON із відповіді та відобразіть дані на сторінці. Нижче наведено приклад функції, яка повинна приймати масив даних і трансформувати кожен елемент масива у розмітку. (копіюй css стилі для карточки товару з файлу [estore.css](./estore.css)), а також створіть звичайний список аби закиданити туди розмітку.

```js
function createProductCardMarkup(data) {
  const markup = data
    .map(({ id, price, title, image }) => {
      return `
            <li class="card" id="${id}">
                <div class="card__image">
                    <img src="${image}" alt="${title}" />
                    <div class="card__info--button">
                        <div data-heart>&#x2764;</div>
                    </div>
                </div>
                <div class="card__info">
                    <h3>${title}</h3>
                    <p>${price}</p>
                    <button data-action="addToCart">+</button>
                </div>
            </li>
        `;
    })
    .join("");

  return markup;
}
```

## 2. Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.

- Інформація про користувача GitHub з логіном USERNAME доступна за посиланням:
  https://api.github.com/users/USERNAME.

`Важливі деталі:` На кожного користувача повинен бути один запит fetch. Запити не
повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна
швидше. Якщо якийсь запит завершуєтся помилкою або вияволось, що даних о
користувачеві немає, то функція повина повертати null в масиві результатів.

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

function getUsers(logins) {}

getUsers(usersLogins);
```

## 3. Weather forecast. Зроби запит данин на отримання прогнозу погоди на поточний день у певному місті. Назву міста потрібно ввести у полі вводу і по цим даним робити запит. Отримайте відповідь в форматі JSON. Розпарсіть JSON із відповіді та відобразіть дані на сторінці у блоці content.

- Використовуй [OpenWeatherMap API](https://openweathermap.org/)
- Використовуй html з файлу [weather.html](./weather.html).

```js
const inputField = document.querySelector(".search-bar");
const locationBtn = document.querySelector("#get_location_btn");
const searchBtn = document.querySelector("#search_btn");
const infoTxt = document.querySelector(".info_text");
const content = document.querySelector(".content");

const APP_ID = "522f7ec766b55c89fccbc47a4e7a72c0"; // SECRET API KEY

function fetchData() {
  // перед запитом
  content.innerHTML = "";
  infoTxt.innerText = "Getting weather details...";
  infoTxt.classList.add("pending");
  infoTxt.classList.remove("error");

  // якщо при запиті response приходить ok то запускай функцію createWeatherDetailsMarkup аби зарендерити у content розмітку погоди

  // якщо при запиті response приходить не ok то:
  content.innerHTML = "";
  infoTxt.classList.replace("pending", "error");
  infoTxt.innerText = `❌ ${inputField.value} isn't a valid city name`;
}

function createWeatherDetailsMarkup(data) {
  // <div class="weather">
  //     <h2 class="city">Weather in Kiev, UK</h2>
  //     <h1 class="temp">4°C</h1>
  //     <div class="flex">
  //         <img
  //         src="https://openweathermap.org/img/wn/ICON_ID.png"
  //         alt="Cloudy"
  //         class="icon"
  //         />
  //         <div class="description">Cloudy</div>
  //     </div>
  //     <div class="feels_like">Feels like: 2°C</div>
  //     <div class="humidity">Humidity:20%</div>
  //     <div class="wind">Wind speed: 2 km/h</div>
  // </div>
}
```