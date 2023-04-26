// Налаштування, необов'язковий параметр
let options = {
  root: document.querySelector('.scroll-list'),
  // root - елемент, який виступає в ролі області перегляду для target (предок цільового елемента або null для viewport)
  rootMargin: '5px',
  // rootMargin - відступи навколо root (margin у CSS, за умовчанням всі відступи дорівнюють 0)
  threshold: 0.5,
  // threshold - число або масив чисел, що вказує допустимий відсоток перетину target та root
};

// Функція зворотного виклику. Виклик callback повертає об'єкт, що містить запис про зміни, що відбулися з цільовим елементом:
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // entry - те, що змінюєтьс, наш цільовий елемент, на який був повішений спостерігач
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

// Спостерігач
let observer = new IntersectionObserver(callback, options);

// Далі знаходимо цільовий елемент, за яким спостерігатиме спостерігач:
let target = document.querySelector('.list-item');
// Вішаємо спостерігача на той цільовий елемент який знайшли раніше
observer.observe(target);


// DOCS: https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API