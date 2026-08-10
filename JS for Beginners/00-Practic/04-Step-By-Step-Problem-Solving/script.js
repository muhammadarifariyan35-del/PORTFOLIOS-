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
