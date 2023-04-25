# Модуль 9. Заняття 18. Promise Asynchrony

## Example 1 - Що виведе в console.log()?

### 1 - promise

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log('end');
```

### 2 - then

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then(res => {
  console.log(res);
});

console.log('end');
```

### 3 - resolve

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then(res => {
  console.log(res);
});

console.log('end');
```

### 4 - no resolve

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then(res => {
  console.log(2);
});

console.log('end');
```

### 5 - promise and function

```js
console.log('start');

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

console.log('middle');

fn().then(res => {
  console.log(res);
});

console.log('end');
```

### 6 - Fulfilling Promise

```js
console.log('start');

Promise.resolve(1).then(res => {
  console.log(res);
});

Promise.resolve(2).then(res => {
  console.log(res);
});

console.log('end');
```

### 7 - catch

```js
const promise = new Promise((resolve, reject) => {
  reject(Error('Some Error Occurred'));
})
  .catch(error => console.log(error))
  .then(error => console.log(error));
```

### 8 - finally

```js
const promise = new Promise(res => res(2));

promise
  .then(v => {
    console.log(v);
    return v * 2;
  })
  .then(v => {
    console.log(v);
    return v * 2;
  })
  .finally(v => {
    console.log(v);
    return v * 2;
  })
  .then(v => {
    console.log(v);
  });
```

### 9 - setTimeout vs Promise

```js
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
});

Promise.resolve().then(() => {
  console.log('resolve');
});

console.log('end');
```

### 10 - all

```js
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert);
```

### 11 - all

```js
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert);
```

### 12 - race

```js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert);
```

### 13 - Microtasks are mixed with macrotasks

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});

promise.then(res => {
  console.log(res);
});

console.log(4);
```

### 14 - prioritize microtasks and macrotasks

```js
const timer1 = setTimeout(() => {
  console.log('timer1');

  const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log('timer2');
}, 0);
```

### 15 - typical interview question

```js
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2');
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log('timer1');
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2');
  });
}, 0);

console.log('end');
```

## Example 2 - Function and promise

Перепешіть функцію `fetchUserFromServer` з колбеками таким чином, щоб вона не
приймала колбеки, а повертала проміс

Зараз функція fetchUserFromServer() знає занадто багато про той код, який буде
використовувати результат її роботи. Вона очікує колбеки і відповідає за їх
виклик за певних умов. Тобто ми передаємо щось всередину функції (колбеки) і
сподіваємося, що воно відпрацює правильно - це недобре.

Краще, якщо функція не зважає на той код, який буде використовувати її
результат. Вона просто виконує якусь операцію і повертає результат своєї роботи
у зовнішній код. Для того щоб повернути результат асинхронної операції, з
функції необхідно повернути проміс.

```js
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess('success value');
    } else {
      onError('error');
    }
  }, 2000);
};

const onFetchSuccess = user => {
  console.log(user);
};

const onFetchError = error => {
  console.error(error);
};

fetchUserFromServer('Mango', onFetchSuccess, onFetchError);
```

## Example 3 - Promise setTimeout

Вбудована функція setTimeout використовує колбек-функцію. Створіть альтернативу,
яка використовує проміси.

Функція delay(ms) повинна повертати проміс, який перейде в стан "resolve"
через ms мілісекунд, так щоб ми могли додати до нього .then:
```js
function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('Я виконався через 3 секунди'));
```