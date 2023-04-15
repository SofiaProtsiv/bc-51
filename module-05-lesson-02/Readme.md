# Модуль 5. Заняття 10. Прототипи та класи

### 1. Що буде у консолі?

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

### 2. Яка різниця між класом та функцією конструктором? Куди попадуть методи eat, sleep та play? У протитип чи на екземпляр? Що буде у консолі?
```js
function Animal (name, energy) {
  this.name = name
  this.energy = energy

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

### 3. 
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

Після того, як обидва класи були визначені, вам слід виконати наступні дії у вашому
скрипті:
- Створіть екземпляр класу `Basket`
- Створіть 3 екземпляри класу `Product`
- Додайте кожен новостворений продукт `Product` до списку товарів `Basket`

Метод `calculate` у класі `Basket` повинен бути викликаний, щоб оновити загальну ціну `Кошика`, як тільки список товарів буде оновлено. Зверніть увагу, що у випадку, якщо товар вже існує в `Basket`, слід оновити лише кількість та загальну ціну товару. Для оновлення загальної ціни кошика слід викликати метод кошика `calculate`.

Екземпляр класу `Basket` повинна бути глобальною змінною і бути доступною через консоль.


### 4. Вам потрібно розробити систему керування бібліотекою. Система має включати класи для книг, користувачів та бібліотеки, з можливістю взаємодії між ними.

1. Клас "Книга" (Book) має мати наступні властивості:
- Назва книги (title)
- Автор книги (author)
- Рік видання (year)
- Статус наявності (available) (булевий тип даних, true - якщо книга є в наявності, false - якщо книга взята користувачем)
Клас має також мати методи:
- getDetails() - повертає рядок з деталями книги в форматі "Назва автора (Рік видання)"
- toggleAvailability() - змінює статус наявності книги з true на false або навпаки.

2. Клас "Користувач" (User) має мати наступні властивості:
- Ім'я користувача (name)
- Вік користувача (age)
- Масив книг, які користувач взяв у бібліотеці (books)
Клас має також мати методи:
- getDetails() - повертає рядок з деталями користувача в форматі "Ім'я, Вік років"
- borrowBook(book) - додає книгу в масив книг користувача, якщо книга вільна (available === true) та повертає повідомлення про успішне позичення, або повідомлення про неможливість позичити книгу, якщо вона вже взята.

3. Клас "Бібліотека" (Library) має мати наступні властивості:
- Масив всіх книг в бібліотеці (books)
- Масив зареєстрованих користувачів (users)
Клас має також мати методи:
- addBook(book) - додає книгу до масиву книг бібліотеки
- removeBook(book) - видаляє книгу з масиву книг бібліотеки
- addUser(user) - додає користувача до масиву зареєстрованих користувачів бібліотеки
- removeUser(user) - видаляє користувача з масиву зареєстрованих користувачів бібліотеки
- findAvailableBooks() - повертає масив книг, які є в наявності (available === true)
- findUserBooks(user) - повертає масив книг, взятих користувачем (user), якщо користувач зареєстрований, або повідомлення про незареєстрованого користувача, якщо користувач не знайдений.

```js
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = true;
  }

  getDetails() {
    return `${this.title} ${this.author} (${this.year})`;
  }

  toggleAvailability() {
    this.available = !this.available;
  }
}

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.books = [];
  }

  getDetails() {
    return `${this.name}, ${this.age} років`;
  }

  borrowBook(book) {
    if (book.available) {
      this.books.push(book);
      book.toggleAvailability();
      return `Користувач ${this.name} успішно позичив книгу "${book.title}".`;
    } else {
      return `Книга "${book.title}" недоступна для позичання.`;
    }
  }
}

class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.findIndex(b => b.title === book.title);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.findIndex(u => u.name === user.name);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  findAvailableBooks() {
    return this.books.filter(book => book.available);
  }

  findUserBooks(user) {
    const foundUser = this.users.find(u => u.name === user.name);
    if (foundUser) {
      return foundUser.books;
    } else {
      return `Користувач "${user.name}" не знайдений.`;
    }
  }
}

// Приклад використання системи

// Створення книг
const book1 = new Book("Книга 1", "Автор 1", 2000);
const book2 = new Book("Книга 2", "Автор 2", 2010);
const book3 = new Book("Книга 3", "Автор 3", 2020);

// Створення користувачів
const user1 = new User("Користувач 1", 25);
const user2 = new User("Користувач 2", 30);

// Створення бібліотеки
const library = new Library();

// Додавання книг до бібліотеки
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Додавання користувачів до бібліотеки
library.addUser(user1);
library.addUser(user2);

// Поз

```


### 5. Припустимо, ви розробляєте систему управління готелем. У вашому готелі є різні типи номерів: стандартні номери, люкси та президентські апартаменти. Кожен номер має свої властивості та можливості, такі як розмір, кількість ліжок, наявність міні-бару, ціна тощо.

Використовуючи класи та наслідування класів в JavaScript, реалізуйте таку систему, включаючи наступні класи:

- Room - базовий клас, який містить загальну інформацію про номер, таку як номер кімнати, розмір, кількість ліжок, наявність міні-бару тощо.

- StandardRoom - клас, який наслідується від Room та додає можливості, специфічні для стандартних номерів, наприклад, вартість додаткових послуг, доступ до Wi-Fi тощо.

- LuxuryRoom - клас, який наслідується від Room та має властивості та методи, специфічні для люксів, такі як наявність джакузі, додатковий сервіс консьєржа тощо.

- PresidentialSuite - клас, який наслідується від Room та має властивості та методи, специфічні для президентських апартаментів, такі як:
 - площа, 
 - власний ресторан
 - додатковий сервіс охорони тощо.

Кожен клас повинен мати відповідні властивості та методи для доступу до інформації про номер та його можливості. Можна також додати додаткові методи для роботи зі замовленнями, розрахунку вартості проживання тощо. Задачка дозволить вам попрактикуватися в роботі з класами, наслідуванням класів та методами класів в JavaScript, а також розробити систему управління готелем,