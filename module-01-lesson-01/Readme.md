# Модуль 1. Заняття 1. Змінні, типи та оператори

## Блок 1 - Математичні оператори, робота з числамиб методи для роботи з числами

1.  Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в рядок у форматі годин та хвилин `HH:MM`.

- 70 покаже 01:10
- 450 покаже 07:30
- 1441 покаже 24:01

```js
function timeConvertor(){
    ...
}
console.log(timeConvertor("70"));
console.log(timeConvertor("450"));
console.log(timeConvertor("1441"));
```

2. Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.

Індекс маси тіла необхідно округлити до однієї цифри після коми;

```js
function calculateBMI(weight, height){
    ...
}

console.log(calculateBMI('88,3', '1.75')); // 28.7
```

3. Перше століття охоплює період з 1-го по 100-й рік включно, друге - з 101-го по 200-й рік включно і т.д. За заданим роком повернути століття, в якому він знаходиться.
```js
function centuryFromYear(year){
    ...
}
console.log(centuryFromYear(1705))  // 18
console.log(centuryFromYear(1900))  // 19
console.log(centuryFromYear(1601))  // 17
console.log(centuryFromYear(2000))  // 20
```
## Блок 2 - Робота з рядками, методи рядків

1. Перевірь чи `param` є рядком. Результатом виконання функції має бути `true` або `false`

```js
function isString(param) {
    ...
}

console.log(isString("hello world"));
console.log(isString("undefined"));
console.log(isString([1, 2, 4, 0]));
console.log(isString({ course: "GoIT" }));
console.log(isString(+"5"));
```

2.  Напишіть функцію для перетворення імені в ініціали. Ви отримаєтеім'я з прізвищем розділені пробілом. В результаті це має виглядати так:
    `Sam Harris => S.H`
    `Patrick Feeney => P.F`

```js
 function abbrevName(name){
    ...
 }

 console.log(abbrevName("Sam Harris"));
 console.log(abbrevName("Patrick Feeney"));
```

3. Напиши функцію `protectEmail`, щоб захистити свій емейл від неавторизованого користувача. Половина емейла (до @) повинна замінитися на три крапки.
   `Input: robin_singh@example.com`
   `Expected result: robin...@example.com`

```js
function protectEmail(email){
    ...
}

console.log(protectEmail("robin_singh@gmail.com"))
console.log(protectEmail("jimmyMc@gmail.com"))
console.log(protectEmail("spr@yahoo.com"))
```

4. Створіть функцію `notBad`, яка приймає один аргумент, рядок. Він повинен знайти першу появу підрядка `«not»` і `«bad»`. Якщо `«bad»` слідує за `«not»`, тоді він має замінити весь підрядок `«not»...«bad»` на `good` та повернути результат. Якщо він не знаходить `«not»` і `«bad»` у правильній послідовності (або взагалі), просто повертає вихідне речення.

```js
function notBad(sentence) {
    ...
}

console.log(notBad('This dinner is not that bad!'))
console.log(notBad('This movie is not so bad!'))
console.log(notBad('This dinner is bad!'))
```

## Блок 3 - Взаємодія з користувачем
1. Напиши функцію, яка просить користувача ввести 2 числа і додає їх, результат вивести в алертом.
```js
function calculateSum(){
    ...
}
calculateSum()
```

## Блок 4 - Логічні оператори, оператори порівняння та приведення типів

1. Яким буде результат виразів?

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


