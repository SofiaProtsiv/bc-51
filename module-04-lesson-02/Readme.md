2. Виконай комплексне завдання на тему інтернет замовлення. До кожної функції прописаний guideline як її виконати.
```js 
const order = {
  items: [
    {
      id: 248,
      type: "shoes",
      name: "Puma RS-X",
      quantity: "3",
      originalPrice: "120.00",
    },
    {
      id: 220,
      type: "shoes",
      name: "The Nike Monarch",
      quantity: "1",
      originalPrice: "87.50",
      salePrice: "51.99",
    },
    {
      id: 231,
      type: "shoes",
      name: "Nike Air Max Plus",
      quantity: "4",
      originalPrice: "187.50",
      salePrice: "151.99",
    },
    {
      id: 389,
      type: "clothing",
      name: "Puma T-shirt",
      quantity: "1",
      originalPrice: "15.99",
    },
    {
      id: 389,
      type: "accessories",
      name: "Watches TISSOT",
      quantity: "5",
      originalPrice: "99.50",
      salePrice: "89.99",
    },
  ],
  shipping: {
    id: "shipping1",
    name: "US Delivery",
    originalPrice: "11.00",
  },
};
```
```js
1️⃣
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

```js
2️⃣
function calculateTotalOrderPrice() {}
console.log("calculateTotalOrderPrice", calculateTotalOrderPrice(order)); // 510.49
```

```js
3️⃣
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

```js
4️⃣
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

```js
5️⃣
/**
 * Check that a product with some id exists or not in order.
 * @param {Array} items - items of order
 * @param {Number} searchId - product id
 * @returns Boolean
 */
function isIdIncludesInOrder() {}
console.log("isIdIncludesInOrder", isIdIncludesInOrder(order, 389)); // true
```
