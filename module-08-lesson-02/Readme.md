# Модуль 8. Заняття 16. Local storage

## 1. Counter

- Використовуй html з файлу [counter.html](./counter.html)
- Отримай всі кнопки з атрибутом data-action
- До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
- При кліку на кнопку data-action="save" зберігай значення counter у local storage
- При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
- При кліку на кнопку data-action="decrease" зменшуй counter на 1
- При кліку на кнопку data-action="increase" збільшуй counter на 1
- При кліку на кнопку data-action="reset" роби counter = 0 

## 2. Theme switcher

- Використовуй html з файлу [themeSwitch.html](./themeSwitch.html)
- Використовуй local storage для зберігання вибраної теми (dark / light)

```js
const themeSwitcher = document.getElementById('theme-switch');

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;

function clickHandler() {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // dont forget about themeSwitcher, if current theme is dark, it should be checked
}
```

## 3.  Authorization

- Download this folder with starter files
  [authorization](./authorization/src.zip)

Завдання полягає у сторенні імітації реєстрації та входу користувача в особистий
кабінет. Використовуй локалальне сховище щоб зберігати "реєстраційні дані".
Зроби перевірку чи користувач уже був зареєстрований, якщо ж не був то створи
йому акаунт.

Додатково можна попрактикуватися і використати такі бібліотекия:

- [Notifli](https://github.com/notiflix/Notiflix#readme)
- [Joi](https://joi.dev/api/?v=17.7.0)