# Модуль 5. Заняття 9. Контекст виклику функції та this

## 1. Розстав відсутні this в методах об'єкта account.
```js
const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    discount = value;
  },
  showOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost;
    orders.push(order);
  },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
```

## 2. Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

```js
const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
```

## 3. Виправ помилки, які будуть в консолі, щоб скрипт запрацював.
```js
const car = {
  registrationNumber: 'GA12345',
  brand: 'Toyota',
};

const displayDetails = ownerName =>{
  console.log(
    `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
  );
}

displayDetails('Sofia');
```
## 4. Що виведеться в консоль?
```js
const directRoute = function (to = 'Chop') {
  console.log(`${this.from} => ${to}`);
};

const train1 = {
  from: 'Kyiv',
  directRoute,
};
const train2 = {
  from: 'Lviv',
  directRoute,
};

directRoute.apply(train1, ['Vinnytsia']);
directRoute.call(train1);
train2.directRoute();
train1.directRoute.call(train2, 'Odessa');

const yourDirectRoute = directRoute.bind(train1);
yourDirectRoute();
yourDirectRoute('Kharkiv');

const theirDirectRoute = directRoute.bind(train2, 'Poltava');
theirDirectRoute();
theirDirectRoute('Cherkasy');
theirDirectRoute.call(train1);

const anotherDirectRoute = train1.directRoute;
console.log(anotherDirectRoute());
```

## 5. Корзина товарів

- getItems() - отримати корзину товарів, усі товари
- add(product) - додати у корзину об'єкт продукта
- remove(productName) - повністю видалити продукт під назвою productName
- clear() - повністю очистити корзину товарів
- countTotalPrice() - порахувати суму замовлення
- increaseQuantity(productName) - збільшити кількість продукта під назвою
  productName
- decreaseQuantity(productName) - зменшити кількість продукта під назвою
  productName

```js
const cart = {
  items: [],

  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

const apple = { name: '🍎', price: 50 };
const grape = { name: '🍇', price: 70 };
const lemon = { name: '🍋', price: 60 };
const strawberry = { name: '🍓', price: 110 };

console.table(cart.getItems());

cart.add(apple);
cart.add(apple);
cart.add(lemon);

console.table(cart.getItems());

cart.remove('🍎');
console.table(cart.getItems());

cart.clear();
console.table(cart.getItems());

cart.add(apple);
cart.add(apple);
cart.add(grape);
cart.add(grape);
cart.add(grape);
cart.add(lemon);
cart.add(strawberry);
cart.add(strawberry);

cart.increaseQuantity('🍎');

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
```

## 6. Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account` в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
```js
/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  // Останній id транзакції
  lastTransactionId: 0,

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму, id та тип транзакції.
   */
  createTransaction(amount, type, id) {},

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};

account.deposit(100);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());

console.log('Transaction 1: ');
console.log(account.getTransactionDetails(1));
console.log('Transaction 2: ');
console.log(account.getTransactionDetails(2));
console.log('Transaction 3: ');
console.log(account.getTransactionDetails(3));
console.log('Transaction 4: ');
console.log(account.getTransactionDetails(4));

console.log(
  'Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW)
);
console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));
```