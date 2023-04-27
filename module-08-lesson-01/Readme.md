# Модуль 8. Заняття 15. Parcel. Webpack

- Термінал
  - [Шпаргалка 1] (https://tproger.ru/translations/bash-cheatsheet/)
  - [Шпаргалка 2](https://habr.com/ua/company/ruvds/blog/445270/)
  - Відкрити термінал
    - `control + ~`
    - `view > teminal`
    - через палітру `command+shift+p`
  - Основні корисні команди
    - Шлях (pwd)
    - Ліст (ls)
    - Навігація (cd)
    - Очищення `clear` або `control + l`
    - Створення файлів (touch)
    - Створення папок (mkdir)
    - Перейменування/переміщення (mv)
    - Видалення (rm)
- Node.js та npm
  - встановлення
  - ініціалізація та package.json
  - [npmjs.com](https://www.npmjs.com/)
  - робота з пакетами
    - Встановлення
    - Видалення
  - CommonJS модулі
  - npm-скрипти
    - pre та post
- Транспіляція коду
  - [Babel](https://babeljs.io/)
  - CLI та npm-скрипти
  - Пресети
  - [Browserslist](https://github.com/browserslist/browserslist)
- [Складальник Parcel](https://parceljs.org/)
- [ECMAScript модулі](https://exploringjs.com/es6/ch_modules.html)

  - Дефолтний (default) експорт та імпорт
  - Іменований (named) експорт та імпорт

## 1. Уявіть, що ви розробляєте програму для обліку фінансів. Вам потрібно розділити код на декілька файлів з різними функціями, але також забезпечити, щоб код працював на будь-яких пристроях без додаткових налаштувань.

#### 1.1. Створіть файл transactions.js який містить в собі масив об'єктів витратт користувача. Зробіть дефолтний експорт з цього файла аби даними можна було користуватися в інших файлах.
```js
const expenses = [
  { category: "Їжа", amount: 100 },
  { category: "Їжа", amount: 25 },
  { category: "Транспорт", amount: 50 },
  { category: "Їжа", amount: 75 },
  { category: "Розваги", amount: 25 },
  { category: "Розваги", amount: 75 },
  { category: "Аптека", amount: 95 },
];
```

####  1.2. Створіть файл expenses.js, який містить наступні функції і одразу експортуйте їх іменованим експортом:
- `calculateTotalExpenses`, яка приймає масив об'єктів і рахує їхню загальну вартість
- `getExpensesByCategory`, яка приймає той же ж масив об'єктів і назву категорії, виклик функції повертає масив об'єктів, які мають таку ж категорію яка була передана у функцію

#### 1.3. Створіть третій файл app.js, який імпортує функції з expenses.js і масив expenses та використовує їх для відображення загальної суми витрат та списку витрат за категорією. У файлі також є спиок витрат, які були здійснені користувачем 
```js
const totalExpenses = calculateTotalExpenses(expenses);
console.log(`Загальна сума витрат: ${totalExpenses}`);

const foodExpenses = getExpensesByCategory(expenses, 'Їжа');
console.log(`Витрати на їжу: ${foodExpenses}`);
```