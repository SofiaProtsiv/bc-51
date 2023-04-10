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