# Модуль 1. Заняття 1. Змінні, типи та оператори

## Блок 1 - Математичні оператори, робота з числамиб методи для роботи з числами

### 1. Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.

Індекс маси тіла необхідно округлити до однієї цифри після коми;

```js
const weight = '88,3';
const height = '1.75'

// result: 28.7
```

### 2. Перше століття охоплює період з 1-го по 100-й рік включно, друге - з 101-го по 200-й рік включно і т.д. За заданим роком повернути століття, в якому він знаходиться.
Попорядку перевіряй наступні роки: 
- 1601 (17 століття)
- 1705 (18 століття)
- 1900 (19 століття)
- 2000 (20 століття)
- 2023 (21 століття)

### 3.  Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в рядок у форматі годин та хвилин `HH:MM`.

- 70 покаже 01:10
- 450 покаже 07:30
- 1441 покаже 24:01

## Блок 2 - Робота з рядками, методи рядків

### 1. Перевірь чи наступні значення є рядками. Результатом має бути `true` або `false`
- "hello world" - true
- "undefined" - true
- [1, 2, 4, 0] - false
- { course: "GoIT" } - false
- +"5" - false

## 2. Є деякі рядки, які потрібно перевірити на вміст забороненого слова sale, і повернути результат перевірки. Слова в рядку можуть бути у довільному регістрі, наприклад sAlE. Якщо знайшли заборонене слово spam то повертайте true. Якщо в рядку відсутнє заборонене слово, повертайте false.
Попорядку перевіряйте наступні рядки:
- "Latest technology news" - false
- "Get best sale offers now!" - true
- "Amazing SalE, only tonight!" - true

## 3. Напишіть скрипт, який буде обрізати рядок до 25 символа і додавати у кінець три крапки.
Працюй з наступними рядками попорядку:
- "Vestibulum facilisis purus nec"
- "Nunc sed turpis a felis in nunc fringilla"

## Блок 3 - Взаємодія з користувачем
### 1. Напиши скрипт, який просить користувача ввести 2 числа і додає їх, результат вивести в алертом.

## Блок 4 - Логічні оператори, оператори порівняння та приведення типів

### 1. Яким буде результат виразів?

```js
console.log(5 > 4);

console.log(10 >= '7');

console.log('2' > '12');

console.log('2' < '12');

console.log('4' == 4);

console.log('6' === 6);

console.log('false' === false);

console.log(1 == true);

console.log(1 === true);

console.log('0' == false);

console.log('0' === false);

console.log('Papaya' < 'papaya');

console.log('Papaya' === 'papaya');

console.log(undefined == null);

console.log(undefined === null);

console.log(typeof null);

console.log(typeof NaN);

console.log(typeof Infinity);

console.log(typeof +"1");

console.log(typeof "undefined");
```

2. Яким буде результат виразів?

```js
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true && true);

console.log(false && true);

console.log(true && false);

console.log(false && false);

console.log(true || true);

console.log(false || true);

console.log(true || false);

console.log(false || false);

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
```


