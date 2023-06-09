# FAQ

## 1. STUDENTS. Практика перебираючих методів масиву

```js
const students = [
  { name: "Max", faculty: "IT", age: 20, averageMark: 4.5 },
  { name: "Alex", faculty: "Management", age: 22, averageMark: 4.9 },
  { name: "Olga", faculty: "IT", age: 24, averageMark: 3.8 },
  { name: "John", faculty: "Marketing", age: 19, averageMark: 4.1 },
  { name: "Kate", faculty: "IT", age: 23, averageMark: 4.6 },
];
```

1. Знайти всіх студентів, які вчаться на факультеті "IT" і вік яких старший за 21 рік.
2. Знайти всіх студентів, які мають середній бал вище 4.5.
3. Знайти найстаршого студента.
4. Знайти середній бал для всіх студентів на факультеті "IT".
5. Знайти кількість студентів на кожному з факультетів. {IT: 3, Management: 1, Marketing: 1}
6. Знайти імена студентів, які вчаться на факультеті "Marketing"

## 2. PRODUCTS. Практика перебираючих методів масиву

```js
const products = [
  { name: "Banana", category: "Fruit", price: 1.5, stock: 15 },
  { name: "Apple", category: "Fruit", price: 2, stock: 8 },
  { name: "Orange", category: "Fruit", price: 1, stock: 0 },
  { name: "Milk", category: "Dairy", price: 3, stock: 20 },
  { name: "Cheese", category: "Dairy", price: 5, stock: 5 },
  { name: "Bread", category: "Bakery", price: 2.5, stock: 10 },
  { name: "Croissant", category: "Bakery", price: 1.5, stock: 3 },
  { name: "Eggs", category: "Dairy", price: 2.5, stock: 12 },
  { name: "Carrot", category: "Vegetable", price: 1, stock: 7 },
  { name: "Potato", category: "Vegetable", price: 0.5, stock: 0 },
];
```

1. Виведіть всі назви продуктів.
2. Виведіть всі продукти з категорії "Fruit".
3. Знайдіть кількість всіх продуктів у категорії "Dairy".
4. Виведіть всі продукти, які коштують менше, ніж 2.5.
5. Виведіть всі продукти, які є в наявності.
6. Виведіть всі продукти в алфавітному порядку.
7. Виведіть всі продукти в порядку зменшення ціни.
8. Виведіть назви всіх продуктів в верхньому регістрі.
9. Виведіть всі продукти в зворотньому порядку.
10. Знайдіть продукт з найвищою ціною.
11. Знайдіть загальну вартість всіх продуктів.
12. Перетворіть масив продуктів у масив об'єктів з полями name та price.
13. Знайдіть індекс продукту з назвою "Milk".
14. Перевірте, чи всі продукти з категорії "Fruit".
15. Перевірте, чи є хоча б один продукт з категорії "Meat".

## 3. TODO LIST. Практика класів, методів класів

#### Створіть клас TodoList:

- tasks - по дефолту пустий масив
  Також створіть методи класу TodoList:
- removeTask - додавання нового завдання у список tasks
- removeTask - видалити завдання у списку tasks
- updateTask - отримує стрий текст та нові дані, які хотілись би оновити
- setPriority - отримує текст завдання, якому треба оновити пріорітетність
- markAsDone - приймає текст завдання, яке потрібно позначити як виконане, змінити done = true
- getTasksToDo - повертає всі завдання, які ще не виконані
- getTasksDone - повертає всі завдання, які вже виконані

```js
const todoList = new TodoList();

// додати нові завдання
todoList.addTask({
  text: "Подивитися нові відео на ютуб",
  priority: 1,
  done: false,
});
todoList.addTask({ text: "Починати конспект", priority: 2, done: false });
todoList.addTask({ text: "Зробити дз", priority: 3, done: false });

// видалити завдання
todoList.removeTask("Подивитися нові відео на ютуб");

// оновити завдання
todoList.updateTask("Починати конспект", {
  text: "Подивитися Репету",
  priority: 1,
  done: false,
});

// встановити пріорітет завданню
todoList.setPriority("Подивитися Репету", 3);

// відмітити завдання як виконане
todoList.markAsDone("Подивитися Репету");

// вивести всі завдання, що потрібно зробити
console.log("Завдання, що потрібно зробити:", todoList.getTasksToDo());

// вивести всі виконані завдання
console.log("Виконані завдання:", todoList.getTasksDone());
```

## 4. НАСЛІДУВАННЯ. Практика створення класів, наслідування, приватний змінних.

Створіть клас `User`, який буде мати приватні властивості `name` та `password`, а також методи `login` та `logout`.

Далі створіть підклас `Admin`, який наслідуватиме властивості та методи з класу `User`, а також матиме свої унікальні методи та властивості, що відповідають конкретному типу користувача.

У підкласі `Admin` додайте приватну властивість `accessLevel`, яка буде мати значення `administrator` за замовчуванням. Також додайте метод `deleteUser`, який буде приймати name користувача як аргумент та видаляти його з бази даних (в цьому випадку просто виводити повідомлення про видалення).

Після створення класів, створіть екземпляр класу `User` та екземпляр класу `Admin`, а потім спробуйте виконати методи логін та логаут для кожного з них, а також викликати метод видалення користувача у підкласі `Admin`. Переконайтеся, що приватні властивості та методи не доступні з зовнішнього коду.

## 5. Практика наслідування у класах.

### Cтворіть клас `Person`, який містить наступні властивості:

- `name` - ім'я людини;
- `age`- вік людини;
- `gender` - стать людини;
- `email`- електронна пошта людини.

#### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.

### Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:

- salary - зарплата співробітника;
- department - відділ, в якому працює співробітник.

#### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
```js
  const employee1 = new Employee({
    name: "John Smith",
    age: 30,
    gender: "male",
    email: "john.smith@example.com",
    employeeId: "EMP123",
    salary: 50000,
    department: "IT",
  });
  const employee2 = new Employee({
    name: "Sarah Johnson",
    age: 25,
    gender: "female",
    email: "sarah.johnson@example.com",
    employeeId: "EMP456",
    salary: 60000,
    department: "Marketing",
  });
  console.log(employee1.getEmployeeDetails());
  console.log(employee2.getDetails());
  ```