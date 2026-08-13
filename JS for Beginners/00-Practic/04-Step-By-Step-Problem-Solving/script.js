//! লেভেল-১ (JS Timers: Delayed Notification)

function delayedLog(message, delayTime) {
  setTimeout(() => {
    console.log(message);
  }, delayTime);
}
// delayedLog("Welcome to JavaScript Timer", 100);

//! লেভেল-২ (JS Timers: Countdown Timer)

function startCountDown(seconds) {
  let count = seconds;
  const timerId = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
      console.log("Time is up");
      clearInterval(timerId);
    }
  }, 500);
}
// startCountDown(10);

//! লেভেল-৩ (JS Timers + Closure: Stopwatch with Controls)

function createStopwatch() {
  let seconds = 0;
  let timerId = null;
  return {
    start() {
      if (timerId !== null) {
        console.log("Stopwatch is already running!");
        return;
      }

      timerId = setInterval(() => {
        seconds++;
        console.log(`Elapsed time ${seconds} seconds`);
      }, 1000);
    },
    pause() {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
      console.log(`Stopwatch paused at ${seconds} seconds`);
      return;
    },
    reset() {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
      seconds = 0;
      console.log("Stopwatch reset to 0");
      return;
    },
  };
}

const watch = createStopwatch();

// watch.start();

// setTimeout(() => {
//   watch.pause();

//   setTimeout(() => {
//     console.log("--- Resuming Stopwatch ---");
//     watch.start();

//     setTimeout(() => {
//       watch.reset();
//     }, 3000);
//   }, 2000);
// }, 3000);

//! এবার লেভেল-৪ (Array Filtering & Transformation)

function getEvenSquareSum(numbers) {
  let output = numbers
    .filter((x) => x % 2 === 0)
    .map((x) => x ** 2)
    .reduce((x, y) => x + y, 0);
  return output;
}
console.log(getEvenSquareSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//! লেভেল-৫ (Array Operations: Grouping & Aggregation)

function getCategoryTotal(product) {
  const totalMap = {};
  product.forEach((element) => {
    if (totalMap[element.category]) {
      totalMap[element.category] += element.price;
    } else {
      totalMap[element.category] = element.price;
    }
  });

  return totalMap;
}
const products = [
  { name: "Shirt", category: "Clothing", price: 1000 },
  { name: "Pant", category: "Clothing", price: 1500 },
  { name: "Laptop", category: "Electronics", price: 50000 },
  { name: "Mouse", category: "Electronics", price: 500 },
  { name: "Apple", category: "Groceries", price: 200 },
];
console.log(getCategoryTotal(products));

//! লেভেল-১ (খুবই সহজ: নাম খুঁজে বের করা)

const names = ["Rahim", "Karim", "Sakib"];
names.forEach((item) => {
  console.log("hello" + " " + item);
});

//! লেভেল-২ (অ্যারে থেকে বেছে নেওয়া - Filtering)

function getPassedScores(score) {
  return score.filter((x) => x >= 50);
}
const scores = [35, 80, 42, 65, 50, 22, 90];
console.log(getPassedScores(scores));

//! লেভেল-৩ (অ্যারে রূপান্তর - Transformation)

function convertToBDT(dollerPrices) {
  return dollerPrices.map((x) => x * 120);
}
const dollarPrices = [10, 25, 50, 100];
console.log(convertToBDT(dollarPrices));

//! লেভেল-৪ (ছাঁকন ও রূপান্তরের মেলবন্ধন - Combining Filter & Map)

function getDiscountBills(bills) {
  return bills.filter((x) => x >= 50).map((x) => x * 0.9);
}
const bills = [20, 80, 45, 100, 150];
console.log(getDiscountBills(bills));

//! লেভেল-৫ (একত্রীকরণ বা Aggregation - Summing items)

function getTotalExpense(expences) {
  return expences.reduce((x, y) => x + y, 0);
}
const expenses = [120, 50, 300, 80];
console.log(getTotalExpense(expenses));

//! লেভেল-৬ (সবগুলো মেথডের একটি অল-ইন-ওয়ান চ্যালেঞ্জ!)

function calculateFinalBill(prices) {
  return prices
    .filter((x) => x > 150)
    .map((x) => x - 50)
    .reduce((x, y) => x + y, 0);
}
const prices = [100, 200, 150, 300, 80, 250];
console.log(calculateFinalBill(prices));

//! লেভেল-৭ (অ্যাভারেজ বা গড় বের করার চ্যালেঞ্জ)

function getAverageScore(scores) {
  let totalFilterMarks = scores.filter((number) => number > 0);
  let totalReduceMarks = totalFilterMarks.reduce(
    (item1, item2) => item1 + item2,
    0,
  );

  return totalReduceMarks / totalFilterMarks.length;
}
const scores1 = [80, 0, 90, 0, 70];
console.log(getAverageScore(scores1));

//! লেভেল-৮ (Object Array Management: খোঁজা ও সাজানো)

function getBooksByAuthor(books, authorName) {
  return books
    .filter((item) => item.author === authorName)
    .map((item) => ({ name: item.title, price: item.price }));
}

const books = [
  { title: "Himu", author: "Humayun Ahmed", price: 250 },
  { title: "Gitanjali", author: "Rabindranath Tagore", price: 300 },
  { title: "Misir Ali", author: "Humayun Ahmed", price: 280 },
  { title: "Shesher Kobita", author: "Rabindranath Tagore", price: 220 },
];

console.table(getBooksByAuthor(books, "Humayun Ahmed"));
console.table(getBooksByAuthor(books, "Rabindranath Tagore"));

//! লেভেল-৯ (Array Searching & Condition Checking)

function checkInventory(books) {
  let hasExpensiveBook = books.some((x) => x.price > 500);
  let isAllInStock = books.every((x) => x.inStock);
  return { hasExpensiveBook, isAllInStock };
}
const books2 = [
  { title: "Himu", price: 250, inStock: true },
  { title: "Gitanjali", price: 600, inStock: true },
  { title: "Shesher Kobita", price: 220, inStock: false },
];
console.log(checkInventory(books2));

//! লেভেল-১০ (অ্যারে সর্টিং বা সাজানো - Array Sorting)

function sortBookByPrice(books) {
  return books.toSorted((a, b) => a.price - b.price);
}
const books3 = [
  { title: "Gitanjali", price: 600 },
  { title: "Shesher Kobita", price: 220 },
  { title: "Himu", price: 250 },
];
console.table(sortBookByPrice(books3));
console.table(books3);

//! লেভেল-১১ (অ্যারে গ্রুপিং - Array Grouping / Indexing)

function countProductsByCategory(products) {
  const countMap = {};
  products.forEach((item) => {
    let catagory = item.category;

    if (countMap[catagory]) {
      countMap[catagory] = countMap[catagory] + 1;
    } else {
      countMap[catagory] = 1;
    }
  });
  return countMap;
}
const products2 = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pant", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Mouse", category: "Electronics" },
  { name: "Apple", category: "Groceries" },
];
console.table(countProductsByCategory(products2));

//___

function countProductsByCategory2(product) {
  const countMap = {};
  product.forEach((item) => {
    let className = item.class;

    if (countMap[className]) {
      countMap[className] = countMap[className] + 1;
    } else {
      countMap[className] = 1;
    }
  });
  return countMap;
}
const students = [
  { name: "Rahim", class: "Ten" },
  { name: "Karim", class: "Nine" },
  { name: "Sumi", class: "Ten" },
  { name: "Rina", class: "Eight" },
  { name: "Mitu", class: "Nine" },
  { name: "Tania", class: "Ten" },
];
console.table(countProductsByCategory2(students));
