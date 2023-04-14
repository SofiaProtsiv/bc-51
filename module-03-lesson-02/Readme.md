# Модуль 3 Заняття 6. Деструктуризація та rest/spread

### 1. Напишіть функцію під назвою `displayName()`, яка приймає об’єкт як аргумент і виводить ім’я та прізвище людини. Використовуйте деструктуризацію об’єкта в аргументі функції. А також використовуйте шаблонні рядки при друку імені та прізвища.
```js
function displayName() {}

console.log(
  displayName({
    first: "Elon",
    last: "Musk",
    twitter: "@elonmusk",
    company: "Space X",
  })
);
```

### 2. Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю `fullName`, замість `firstName` та `lastName`. Викоритовуй `rest` оператор.

```js
function transformUsername() {}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
  })
); // { id: 1, fullname: 'Jacob Mercer', email: 'j.mercer@mail.com'}
```

### 3. У нас є об'єкт `salaries` із зарплатами. Створіть функцію `topSalary (salaries)`, яка повертає ім'я найкращого працівника. Якщо об'єкт salaries порожній, потрібно повернути null. Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
```js
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
```

### 4. Напишіть функцію, яка називається `calculateSalesTotals()`, яка повертає масив із двома новими ключами (sale і total). Ключ `«sale»` дорівнює розрахованій ціні продажу на основі початкової ціни та знижки. Ключ `«total»` дорівнює обчисленій сумі на основі запасів(stock), початкової ціни та знижки. Ви повинні використовувати деструктуризацію об’єктів для об’єктів у масиві продажів і значення за замовчуванням об’єктів для ключа знижки. Стандартним значенням буде 0.0.
`EXPECTED OUTPUT`:
const updatedProducts = [
  {
    item: "PS4 Pro",
    original: 399.99,
    sale: 399.99, 🆕
    stock: 3,
    total: 1199.97 🆕
  },
  {
    discount: 0.1,
    item: "Xbox One X",
    original: 499.99,
    sale: 449.99, 🆕
    stock: 1,
    total: 449.99 🆕
  },
  {
    item: "Nintendo Switch",
    original: 299.99,
    sale: 299.99, 🆕
    stock: 4,
    total: 1199.96 🆕
  },
  {
    discount: 0.8,
    item: "PS2 Console",
    original: 299.99,
    sale: 59.99, 🆕
    stock: 1,
    total: 59.99 🆕
  },
  {
    discount: 0.65,
    item: "Nintendo 64",
    original: 199.99,
    sale: 69.99, 🆕
    stock: 2,
    total: 139.99 🆕
  }
]
```js
const products = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];
```

### 5. Напишіть функцію `without()`, яка повертає новий об'єкт без зазначених значень.
Очікуваний результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
Очікуваний результат: ({ a: 1, b: 2, с: 3, d: 4 }, 'c, b') => { a: 1, d: 4 }
```js
function without(){
  ...
}
console.log(without({ a: 1, b: 2 }, 'b'));
console.log(without({ a: 1, b: 2, c: 3, d: 4 }, 'c', 'b'));
```