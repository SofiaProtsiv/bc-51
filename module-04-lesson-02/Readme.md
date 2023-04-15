# Модуль 4. Заняття 8. Перебираючі методи масиву

## 1. Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`, `splice` і т. д.) виконують такі операції над масивом об'єктів користувачів із файлу [cars.js](./cars.js).

### Example 1.1 - Метод map
Нехай функція `getModels` повертає масив моделей (поле model) всіх автомобілів.
```js
const getModels = cars => {};

console.table(getModels(cars));
```

### Example 1.2 - Метод map
Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
значенням властивості `price` залежно від переданої знижки.
```js
const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
```

### Example 1.3 - Метод filter
Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша ніж
значення параметра `threshold`.
```js
const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
```

### Example 1.4 - Метод filter
Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
onSale яких true.
```js
const getCarsWithDiscount = cars => {};

console.table(getCarsWithDiscount(cars));
```

### Example 1.5 - Метод filter
Нехай функція `getCarsWithType` повертає масив автомобілів тип яких збігається
зі значенням параметра `type`.
```js
const getCarsWithType = (cars, type) => {};

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
```

### Example 1.6 - Метод find
```js
const getCarByModel = (cars, model) => {};

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
```

### Example 1.7 - Метод sort
Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів
відсортований за зростанням значення якості `amount`.
```js
const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars));
```

### Example 1.8 - Метод sort
Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
відсортований за зменшенням значення властивості `price`.
```js
const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars));
```

### Example 1.9 - Метод sort
Нехай функція `sortByModel` повертає новий масив автомобілів відсортований за
назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
значення параметра `order`.
```js
const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
```

### Example 1.10 - Метод reduce
Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
властивостей `amount`).
```js
const getTotalAmount = cars => {};

console.log(getTotalAmount(cars));
```

### Example 1.11 - Ланцюжки методів
Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
тільки тих, які зараз на розпродажі.
```js
const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars));
```

### Example 1.12 - Ланцюжки методів
Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
(Властивість onSale), відсортованих за зростанням ціни.
```js
const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));
```


## 2. Виконай комплексне завдання на тему інтернет замовлення. До кожної функції прописаний guideline як її виконати. Використовуй файл [order.js](./order.js).

### 2.1.
```js
/** 
 * Calculate the cost of products by category type of product
 * @param {Array} items - items of order
 * @param {String} productType  - product category
 * @returns Total price by product category
 */
function calculateProductsAmoutByType() {}
console.log(
  "calculateOfProduct", calculateProductsAmoutByType(order, "clothing")
  ); // 15.99
```

### 2.2.
```js
function calculateTotalOrderPrice() {}
console.log("calculateTotalOrderPrice", calculateTotalOrderPrice(order)); // 510.49
```

### 2.3.
```js
/**
 * Calculate the final cost of the order after all discounts have been applied.
 * If the order amount is more than $100, free shipping applies.
 * If the total number of products is greater than or equal to 20, a 13% discount
  is applied to the order.
 * Discount and free shipping can be combined together.
 * @param {Array} items - items of order
 * @param {Object} shipping - shipping method
 * @returns Total cost
 */
function calculateTotalOrderPriceAfterDiscout() {
  const orderAmount = calculateTotalOrderPrice();
}
console.log( "calculateTotalOrderPriceAfterDiscout",calculateTotalOrderPriceAfterDiscout(order)
); // 429.96
```

### 2.4.
```js
/**
 * Find out the number of different products that have the word {search word} in product name
 * @param {Array} items - items of order
 * @param {String} searchWord - search word
 * @returns Number of orders which exist with search word
 */
function findSearchWordInItemName() {}
console.log(
  "findSearchWordInItemName", findSearchWordInItemName(order, "Nike")); // 2
```

### 2.5.
```js
/**
 * Check that a product with some id exists or not in order.
 * @param {Array} items - items of order
 * @param {Number} searchId - product id
 * @returns Boolean
 */
function isIdIncludesInOrder() {}
console.log("isIdIncludesInOrder", isIdIncludesInOrder(order, 389)); // true
```


## 3 Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`, `splice` і т. д.) виконують такі операції над масивом об'єктів користувачів із файлу [users.js](./users.js).

## Example 3.1
Отримати масив імен всіх користувачів (поле `name`).
```js
const getUserNames = users => {};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

### Example 3.2
Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
```js
const getUsersWithEyeColor = (users, color) => {};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
```

### Example 3.3
Отримати масив імен користувачів за статтю (поле `gender`).
```js
const getUsersWithGender = (users, gender) => {};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

### Example 3.4
Отримати масив лише неактивних користувачів (поле `isActive`).
```js
const getInactiveUsers = users => {};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
```

### Example 3.5
Отримати користувача (не масив) по `email` (поле `email`, він унікальний).
```js
const getUserWithEmail = (users, email) => {};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
```

### Example 3.6
Отримати масив користувачів які у вікову категорію від `min` до `max` років
(поле `age`).
```js
const getUsersWithAge = (users, min, max) => {};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
```

### Example 3.7
Отримати загальну суму балансу (поле `balance`) всіх користувачів.
```js
const calculateTotalBalance = users => {};

console.log(calculateTotalBalance(users)); // 20916
```

### Example 3.8
Масив імен всіх користувачів, у яких є один із зазначеним ім'ям.
```js
const getUsersWithFriend = (users, friendName) => {};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

### Example 3.9
Масив імен (поле `name`) людей, відсортованих залежно від кількості їх друзів
(поле `friends`)
```js
const getNamesSortedByFriendsCount = users => {};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

### Example 3.10
Отримати масив усіх умінь всіх користувачів (поле `skills`), при цьому не має
бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.
```js
const getSortedUniqueSkills = users => {};

console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam'
```