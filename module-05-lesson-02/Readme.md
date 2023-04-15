# Модуль 5. Заняття 10. Прототипи та класи

## 1. Що буде у консолі?

```js
const parent = {
  name: "Luce",
  age: 35,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Bob";
child.age = 7;

console.log(child.name); // ?
console.log(child.age); // ?
console.log(child.heritage); // ?
```

## 2. Яка різниця між класом та функцією конструктором? Куди попадуть методи eat, sleep та play? У протитип чи на екземпляр? Що буде у консолі?

```js
function Animal(name, energy) {
  this.name = name;
  this.energy = energy;

  this.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  this.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  this.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  };
}

const dog = new Animal("Leo", 7);
const cat = new Animal("Lili", 10);

dog.favoriteToy = "ball";
dog.__proto__.getFavoriteToy = function () {
  console.log(`${this.name}'s favorite toy is ${this.favoriteToy}.`);
  return this.favoriteToy;
};

// console.log(dog);
// console.log(cat);

// console.log(Animal.prototype === dog.__proto__);
// console.log(Animal.prototype);

// console.log(dog.__proto__);
// console.log(cat.__proto__);
// console.log(dog.__proto__ === cat.__proto__);

// cat.sleep(8);
// dog.play(5);
// cat.getFavoriteToy();
```

## 3. Розробити функціонал "інтернет магазину"

Описати клас `Basket`. `Basket` повинен мати наступні атрибути:

- Product list
- Total price

У `Basket` повинні бути наступні методи:

- addProduct
- removeProduct
- removeItemOfProduct
- showBasket
- checkIfProductExists

Потім визначте клас "Product" з наступними атрибутами:

- Product ID
- Product Name
- Product Quantity in stock
- Product Quantity in basket
- Product Item Price (для однієї позиції)
- Product Total Price (Product Item Price x quantity in basket)

Після того, як обидва класи були визначені, вам слід виконати наступні дії у вашому скрипті:

- Створіть екземпляр класу `Basket`
- Створіть 3 екземпляри класу `Product`
- Додайте кожен новостворений продукт `Product` до списку товарів `Basket`

Метод `calculate` у класі `Basket` повинен бути викликаний, щоб оновити загальну ціну `Кошика`, як тільки список товарів буде оновлено. Зверніть увагу, що у випадку, якщо товар вже існує в `Basket`, слід оновити лише кількість та загальну ціну товару. Для оновлення загальної ціни кошика слід викликати метод кошика `calculate`.


## 4. Вам потрібно розробити систему керування бібліотекою. Система має включати класи для книг, користувачів та бібліотеки, з можливістю взаємодії між ними.

#### 1. Клас `Book` має мати наступні властивості:

- Назва книги (`title`)
- Автор книги (`author`)
- Статус наявності (`available`) (булевий тип даних, true - якщо книга є в наявності, false - якщо книга взята користувачем)

  Клас має також мати методи:

- `getDetails()` - повертає рядок з деталями книги в форматі "Назва автора (Рік видання)"
- `toggleAvailability()` - змінює статус наявності книги з true на false або навпаки.

#### 2. Клас `User` має мати наступні властивості:

- Повне ім'я користувача (`fullName`)
- Масив книг, які користувач взяв у бібліотеці (`books`)

  Клас має також мати методи:

- `getDetails()` - повертає об`єкт з деталями користувача
- `borrowBook(book)` - додає книгу в масив книг користувача, якщо книга вільна (available === true) та повертає повідомлення про успішне позичення, або повідомлення про неможливість позичити книгу, якщо вона вже взята.

#### 3. Клас `Library` має мати наступні властивості:

- Масив всіх книг в бібліотеці (`books`)
- Масив зареєстрованих користувачів (`users`)

  Клас має також мати методи:

- `addBook(book)` - додає книгу до масиву книг бібліотеки
- `removeBook(book)` - видаляє книгу з масиву книг бібліотеки
- `addUser(user)` - додає користувача до масиву зареєстрованих користувачів бібліотеки
- `removeUser(user)` - видаляє користувача з масиву зареєстрованих користувачів бібліотеки
- `findAvailableBooks()` - повертає масив книг, які є в наявності (available === true)
- `findUserBooks(user)` - повертає масив книг, взятих користувачем (user), якщо користувач зареєстрований, або повідомлення про незареєстрованого користувача, якщо користувач не знайдений.

```js
// Створення книг
const book1 = new Book({
  title: "Harry Potter and the Philosopher's Stone",
  author: "Joanne Rowling",
});
const book2 = new Book({
  title: "The Hobbit",
  author: "John Ronald Reuel Tolkien",
});
const book3 = new Book({
  title: "The Clean Coder",
  author: "Robert C. Martin",
});

// Створення користувачів
const user1 = new User("Ethan Anderson");
const user2 = new User("Olivia Johnson");

// Створення бібліотеки
const library = new Library();

// Додавання книг до бібліотеки
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Додавання користувачів до бібліотеки
library.addUser(user1);
library.addUser(user2);

// Позичення книг
user1.getDetails();

user1.borrowBook({
  title: "The Fault in Our Stars",
  author: "John Green",
});
user1.borrowBook(book1);

user1.getDetails();

// Пошук книг які позичив користувач
library.findUserBooks("Sofia Protsiv");
library.findUserBooks("Ethan Anderson");

// Пошук книг які ще доступні
library.findAvailableBooks();
```

## 5. Припустимо, ви розробляєте систему управління готелем. У вашому готелі є різні типи номерів: стандартні номери тв люкс апартаменти. Кожен номер має свої властивості та можливості, такі як розмір, кількість ліжок, наявність міні-бару, ціна тощо.

Використовуючи класи та наслідування класів, реалізуйте таку систему, включаючи наступні класи:

#### 1. `Room` - базовий клас, який містить загальну інформацію про номер, таку як

- номер кімнати (roomNumber),
- розмір (size),
- кількість ліжок (numberOfBeds),
- наявність міні-бару (hasMiniBar)

#### 2. `StandardRoom` - клас, який наслідується від Room та додає можливості, специфічні для стандартних номерів, наприклад:

- вартість додаткових послуг (extraServicesCost)
- доступ до Wi-Fi (hasWifi)

#### 3. `LuxuryRoom` - клас, який наслідується від Room та має властивості та методи, специфічні для люксів, такі як наявність

- власний ресторан (hasRestaurant)
- додатковий сервіс охорони (hasSecurity)

Кожен клас повинен мати відповідні властивості та метод `getInfo()`, який буде показувати інформацію про номер у наступному форматі:
`"Room Number: 201, Size: Standard, Beds: 2, Mini Bar: Yes, Extra Services Cost: 50, Wifi: Yes"`

```js
// Створення об'єкту класу Room
const room1 = new Room({
  roomNumber: 101,
  size: "Standard",
  numberOfBeds: 2,
  hasMiniBar: true,
});

console.log(room1.getInfo());
// Room Number: 101, Size: Standard, Beds: 2, Mini Bar: Yes

// Створення об'єкту класу StandardRoom
const standardRoom1 = new StandardRoom({
  roomNumber: 201,
  size: "Standard",
  numberOfBeds: 2,
  hasMiniBar: true,
  extraServicesCost: 50,
  hasWifi: true,
});
console.log(standardRoom1.getInfo());
// Room Number: 201, Size: Standard, Beds: 2, Mini Bar: Yes, Extra Services Cost: 50, Wifi: Yes

// Створення об'єкту класу LuxuryRoom
const luxuryRoom1 = new LuxuryRoom({
  roomNumber: 301,
  size: "Deluxe",
  numberOfBeds: 1,
  hasMiniBar: true,
  hasRestaurant: true,
  hasSecurity: true,
});
console.log(luxuryRoom1.getInfo()); // Room Number: 401, Size: Suite, Beds: 2, Mini Bar: Yes, Restaurant: Yes, Security: Yes
```
