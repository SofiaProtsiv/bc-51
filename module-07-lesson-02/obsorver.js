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

// Спостерігач 1.
let observer = new IntersectionObserver(callback);

// Далі знаходимо цільовий елемент, за яким спостерігатиме спостерігач:
// Variant 1
// let target = document.querySelector('.list-item');
// observer.observe(target);

// Variant 2
let images = document.querySelectorAll('img');
images.forEach(img => observer.observe(img))

// Вішаємо спостерігача на той цільовий елемент який знайшли раніше



// DOCS: https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API