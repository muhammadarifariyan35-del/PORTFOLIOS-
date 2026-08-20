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

//! লেভেল-১২ (Object Transformation & Reconstruction - অবজেক্ট রূপান্তর)

function formatUserProfiles(users) {
  return users.map((item) => ({
    fullName: `${item.firstName} ${item.lastName}`,
    age: item.age,
  }));
}
const users = [
  { firstName: "Rahim", lastName: "Ahmed", age: 25 },
  { firstName: "Karim", lastName: "Uddin", age: 30 },
  { firstName: "Sumi", lastName: "Akter", age: 22 },
];

console.table(formatUserProfiles(users));

//! লেভেল-১৩ (Nested Data Extraction - গভীর ডাটা বের করে আনা)

function getDeliverySheet(orders) {
  return orders.map(({ customer, address }) => ({
    name: customer.name,
    phone: customer.phone,
    city: address.city,
  }));
}

const orders = [
  {
    orderId: "ORD101",
    customer: { name: "Rahim", phone: "01711111111" },
    address: { city: "Dhaka", zip: "1205" },
  },
  {
    orderId: "ORD102",
    customer: { name: "Karim", phone: "01822222222" },
    address: { city: "Chittagong", zip: "4000" },
  },
];

console.table(getDeliverySheet(orders));

//! লেভেল-১৪ (Advanced Searching & Filtering - জটিল শর্তে খোঁজা)

function filterLaptops(laptops) {
  return laptops.filter(
    (item) => item.brand === "Asus" && item.ram >= 16 && item.price < 90000,
  );
}

const laptops = [
  { brand: "Asus", ram: 8, price: 65000 },
  { brand: "Asus", ram: 16, price: 85000 },
  { brand: "HP", ram: 16, price: 88000 },
  { brand: "Asus", ram: 32, price: 120000 },
  { brand: "Asus", ram: 16, price: 78000 },
];

console.table(filterLaptops(laptops));

//! লেভেল-১৫ (Data Aggregation & Analysis - চূড়ান্ত বিশ্লেষণ)

function analyzeSales(orders) {
  let totalRevenueFilter = orders.filter((item) => item.status === "Completed");
  let totalRevenueReduce = totalRevenueFilter.reduce((a, b) => a + b.amount, 0);
  let avarageOrderValue = +(
    totalRevenueReduce / totalRevenueFilter.length
  ).toFixed(2);
  return { totalRevenueReduce, avarageOrderValue };
}

const orders3 = [
  { id: 1, amount: 1200, status: "Completed" },
  { id: 2, amount: 500, status: "Cancelled" },
  { id: 3, amount: 2000, status: "Completed" },
  { id: 4, amount: 800, status: "Pending" },
  { id: 5, amount: 1800, status: "Completed" },
];

console.table(analyzeSales(orders3));

//! লেভেল-১৬ (Data Mutation & Property Cleanup - ফিল্ড ডিলিট বা ক্লিনআপ করা)

function cleanUserData(users) {
  return users.map(({ password, ...rest }) => rest);
}

const users2 = [
  { id: 1983, name: "Rahim", email: "rahim@gmail.com", password: "secret123" },
  {
    id: 2987,
    name: "Karim",
    email: "karim@gmail.com",
    password: "mypassword456",
  },
];

console.table(cleanUserData(users2));

//! লেভেল-১৭ (Flattening & Merging Nested Arrays - অ্যারে সমতল করা)

function getAllTags(products) {
  return products.flatMap((item) => item.tags);
}
const products3 = [
  { name: "Laptop", tags: ["electronics", "tech"] },
  { name: "Shirt", tags: ["clothing", "fashion"] },
  { name: "Phone", tags: ["electronics", "mobile"] },
];
console.log(getAllTags(products3));

//! লেভেল-১৮ (Unique Values Extraction - ইউনিক বা অনন্য মান বের করা)

function getUniqueTags(products) {
  let allTags = products.flatMap((item) => item.tags);
  let set = new Set(allTags);
  return [...set];
}

const products4 = [
  { name: "Laptop", tags: ["electronics", "tech"] },
  { name: "Shirt", tags: ["clothing", "fashion"] },
  { name: "Phone", tags: ["electronics", "mobile"] },
];

console.log(getUniqueTags(products4));

//! লেভেল-১৯ (Data Association & Lookups - দুটি তালিকার মেলবন্ধন)

function enrichOrders(orders, users) {
  return orders.map((order) => {
    const user = users.find((u) => u.id === order.userId);
    return {
      userName: user ? user.name : "Unknown",
      ...order,
    };
  });
}
const users3 = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" },
];

const orders2 = [
  { orderId: 101, userId: 1, item: "Laptop" },
  { orderId: 102, userId: 2, item: "Phone" },
  { orderId: 103, userId: 1, item: "Mouse" },
];
console.table(enrichOrders(orders2, users3));

//! লেভেল-২০ (Complex Grouping with Arrays - অ্যারে দিয়ে অ্যাডভান্সড গ্রুারিং)

function groupProductsByCategory(products) {
  const grouped = {};
  products.forEach((product) => {
    let cat = product.category;

    if (grouped[cat]) {
      grouped[cat].push(product);
    } else {
      grouped[cat] = [product];
    }
  });

  return grouped;
}
const products5 = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pant", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Apple", category: "Groceries" },
];
console.log(groupProductsByCategory(products5));
