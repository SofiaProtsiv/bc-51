# Модуль 10. Заняття 19. Pagination

## 1. Load more button

- Використовуй html з файлу [load_more.html](./load_more.html).
- Використовуй [{JSON} Placeholder API](https://jsonplaceholder.typicode.com/)

Створи змінну limit і задай їй значення 20, це буде кількість постів на сторінку.

Щоб динамічно змінювати номер групи на кожний наступний запит, достатньо
оголосити глобальну змінну, назвемо її page і встановимо початкове
значення 1 - перша група елементів. Після кожного успішного запиту, в колбек
методу then() будемо збільшувати значення page на одиницю. Складаючи параметри
запиту, використовуємо її значення.

Після завантаження першої групи елементів, текст на кнопці зміниться, а сама
кнопка опуститься під список постів. Коли користувач прокрутить сторінку і знову
клікне по ній - виконається запит за другою групою елементів, яка додасться до
вже існуючої розмітки списку постів. У разі відсутності постів для завантаження
під час кліку на кнопку «Fetch posts» - показуємо повідомлення

Потрібно додали перевірку кінця колекції на фронтенді, тому що JSONPlaceholder API не реалізує цей функціонал на бекенді. У нашому випадку достатньо розділити
загальну кількість елементів в колекції на кількість елементів в одній групі. Це
схоже на випадок, коли бекенд повертає не кількість доступних сторінок, а
загальну кількість елементів в колекції.

```js
const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");
const alertPopup = document.querySelector(".alert");

let isAlertVisible = false;

function fetchPosts() {}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
                <h2 class="post-title">${title.slice(0, 30)}</h2>
                <p><b>Post id</b>: ${id}</p>
                <p><b>Author id</b>: ${userId}</p>
                <p class="post-body">${body}</p>
            </li>`;
    })
    .join("");

  return markup;
}

function toggleAlertPopup() {
  if (isAlertVisible) {
    return;
  }
  isAlertVisible = true;
  alertPopup.classList.add("is-visible");
  setTimeout(() => {
    alertPopup.classList.remove("is-visible");
    isAlertVisible = false;
  }, 3000);
}
```

## 2. Infinite Scrolling with Intersection Observer API

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

## 3. У цій задачі потрібно написати скрипт, який дозволить шукати фотографії за запитом, використовуючи [API Unsplash](https://unsplash.com/documentation). Вам необхідно зробити запит на сервер API Unsplash зі словом, введеним користувачем у вікно пошуку. Результати повинні виводитися в галереї зображень. Використовуй класовий підхід для створення запитів.

- Використовуй html з файлу [infinite_scroll.html](./infinite_scroll.html).

- Коли користувач вводить запит для пошуку та натискає кнопку пошуку, скрипт робить запит до API Unsplash та отримує список зображень. Якщо з користувач нічого не ввів і намагається зробити запит виводь Notify.warning("Enter some data!")
- Кожне зображення повинно бути виведене в HTML розмітці як окремий елемент списку зображень.
- Коли користувач натискає кнопку "load more", скрипт повинен зробити запит на сервер API Unsplash для наступної сторінки результатів пошуку та додати нові зображення до списку.
- Якщо запит не повертає результатів, скрипт повинен вивести повідомлення про те, що не знайдено жодного зображення: Notify.warning("Sorry no images were found");
- Коли були завантажені всі сторінки результатів пошуку, кнопка "load more" повинна бути прихована (додати клас Єis-hidden") і показати поп ап Notify.warning("The end!");

```js
class UnsplashAPI {
  #BASE_URL = "https://api.unsplash.com/search/photos";
  #API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";

  #page;
  #searchQuery;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: "black",
    orientation: "portrait",
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = "";
  }

  getImages() {}

  updadePage() {}

  get page() {}

  set page(newPage) {}

  set searchQuery(newQuery) {}
  get searchQuery() {}
}

const refs = {
  form: document.querySelector(".js-search-form"),
  list: document.querySelector(".js-gallery"),
  loadMoreBtn: document.querySelector(".js-load-more"),
};
const { form, list, loadMoreBtn } = refs;

const unsplashApi = new UnsplashAPI();

function handleSubmit() {}

function handleClickLoadMore() {}

function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
      <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
  </li>`
    )
    .join("");
}
```

## 4. Pagination Libraries 

Використовуючи одну з запропонованих бібліотек для створення пагінації, виконай завдання по сторененню простого пошуку новин за query параметром.

- [TUI.pagination](https://nhn.github.io/tui.pagination/latest/Pagination)
- [Pagination.js](https://pagination.js.org/)

- Використовуй [NewsAPI](https://newsapi.org/)
- Використовуй html з файлу [news.html](./news.html).

```js
const form = document.querySelector('form');
const newsContainer = document.getElementById('news');

const BASE_URL = 'https://newsapi.org/v2'
const API_KEY = '94e7350e65ba433baccbec406066c2bd';

function createNewsCardMarkup(newsArray) {
  const newsCards = newsArray.map(news => {
    return `
      <div class="news-card">
        <div class="news-card-image" style="background-image: url(${news.urlToImage})"></div>
        <div class="news-card-content">
          <h2 class="news-card-title">${news.title}</h2>
          <p class="news-card-description">${news.description}</p>
        </div>
      </div>
    `;
  });
  return newsCards.join('');
}

function fetchNews(event) {}

form.addEventListener('submit', fetchNews);
```