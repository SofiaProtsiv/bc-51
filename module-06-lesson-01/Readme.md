# Модуль 6. Заняття 11. DOM i events

## 1. Вам надано кілька масивів з різними фруктами (назва масиві вказує на те, куди потрібно помістити елементи відносно ul). `Створи` html-елемент списку і `додай` його у розмітку. Попрактикуйся з методами `append`, `prepend`, `after`, `before` заповнивши ними список елементами з масивів. Для зручності створи допоміжну функцію `elementsOfIngridients`, яка повертатиме масив елементів (масив з лішками).

```js
const appendFruitList = ["apple🍎", "banana🍌"];
const prependFruitList = ["grapes🍇", "orange🍊"];
const beforeFruitList = ["strawberry🍓", "cherry🍒"];
const afterFruitList = ["peach🍑", "kiwi🥝"];
```

## 2. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

```js
const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;
```

## 3. Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, які користувач вже подивився аби саме їх зробити напівпрозорими.

```js
const films = [
    {
    title: "Tetris",
    imgUrl:  "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id:"film_1"
},
{
    title: "Avatar: The Way of Water",
    imgUrl:  "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id:"film_2"
},
{
    title: "Operation Fortune: Ruse de guerre",
    imgUrl:  "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id:"film_3"
},
{
    title: "Babylon",
    imgUrl:  "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id:"film_4"
},
    {
    title: "The Whale",
    imgUrl:  "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id:"film_5"
}]

// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ["film_2", "film_4", "film_5"];
```

## 4. Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div. Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

```css
    .numberContainer {
      display: flex;
      flex-wrap: wrap;
    }

    .number {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      margin: 5px;
    }

    .even {
      background-color: #8BC34A;
    }

    .odd {
      background-color: #FFEB3B;
    }
```

```js
const randomNumber = Math.floor(Math.random() * 100) + 1
```