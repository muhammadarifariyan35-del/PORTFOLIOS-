//! টাস্ক ১: ই-কমার্স কার্ট হিসাব
const cart = [
  { product: "Laptop", price: 1200, category: "Electronics" },
  { product: "Mouse", price: 30, category: "Electronics" },
  { product: "T-Shirt", price: 25, category: "Clothing" },
  { product: "Headphones", price: 150, category: "Electronics" },
  { product: "Jeans", price: 60, category: "Clothing" },
];

//filter() ব্যবহার করে শুধু "Electronics" প্রোডাক্টগুলো আলাদা করুন।
const filtaring = cart.filter((item) => item.category === "Electronics");
console.log(filtaring);

//reduce() ব্যবহার করে কার্টের সমস্ত প্রোডাক্টের মোট দাম (Total Price) হিসাব করুন।
const reduce = cart.reduce((total, item) => total + item.price, 0);
console.log(reduce);

//Map.groupBy() ব্যবহার করে প্রোডাক্টগুলোকে তাদের category অনুযায়ী গ্রুপ বা ভাগ করুন।
function groupByCatagory(item) {
  return item.category;
}
const group = Map.groupBy(cart, groupByCatagory);
console.log(group);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! টাস্ক ২: ক্লাবের ডুপ্লিকেট মেম্বার ছাঁটাই

const footballClub = new Set(["Anik", "Tahsin", "Raju", "Afsin"]);
const cricketClub = new Set(["Raju", "Afsin", "Sharif", "Mohib"]);

//এমন একটি নতুন সেট তৈরি করুন যেখানে উভয় ক্লাবের সমস্ত মেম্বাররা থাকবেন (কোনো নাম ডুপ্লিকেট হবে না)।
const union = footballClub.union(cricketClub);
console.log(union);

//এমন একটি নতুন সেট তৈরি করুন যেখানে শুধু সেই মেম্বাররা থাকবেন যারা দুই ক্লাবেই নাম লিখিয়েছেন (Common)।
const interSection = footballClub.intersection(cricketClub);
console.log(interSection);

//এমন মেম্বারদের বের করুন যারা শুধু ফুটবল ক্লাবে আছেন, ক্রিকেটে নেই।
const difference = [
  //   cricketClub.difference(footballClub),
  footballClub.difference(cricketClub),
];
console.log(difference);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! টাস্ক ৩: ব্যাংক অ্যাকাউন্ট ট্র্যাকার

let acc1 = { owner: "Tahsin", accNo: 101 };
let acc2 = { owner: "Afsin", accNo: 102 };
let acc3 = { owner: "Takiya", accNo: 103 };

//একটি WeakMap তৈরি করুন যার নাম দিবেন bankBalance।
const bankBalance = new WeakMap();

// এই ম্যাপের ভেতর acc1-এর ব্যালেন্স সেট করুন 5000 টাকা এবং acc2-এর ব্যালেন্স সেট করুন 12000 টাকা।
bankBalance.set(acc1, 5000);
bankBalance.set(acc2, 12000);

//একটি ফাংশন লিখুন যার নাম checkBalance(account)। এই ফাংশনে কোনো অ্যাকাউন্ট পাস করলে সে ম্যাপ থেকে ব্যালেন্স চেক করে স্ক্রিনে দেখাবে। যদি কোনো অ্যাকাউন্টের ব্যালেন্স না থাকে (যেমন acc3), তবে সে ডিফল্ট হিসেবে 0 দেখাবে
function checkBalance(account) {
  let balace = bankBalance.get(account) || 0;

  return (
    account.owner +
    " (" +
    " Account Number " +
    account.accNo +
    ") " +
    " has " +
    balace +
    " Taka in his account. <br>"
  );
}

let tax = " ";
tax += checkBalance(acc1);
tax += checkBalance(acc2);

document.getElementById("demo").innerHTML = tax;

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! টাস্ক ৪: ডুপ্লিকেট রোল নাম্বার ছাঁটাই

const submittedRolls = [12, 15, 12, 18, 20, 15, 22, 18, 30, 20];

//আপনাকে এমন একটি কোড লিখতে হবে যা এই অ্যারে থেকে সমস্ত ডুপ্লিকেট রোল নাম্বার মুছে ফেলে শুধু ইউনিক (Unique) বা আসল রোল নাম্বারগুলোর একটি তালিকা তৈরি করবে।
const uniqRoolSet = new Set(submittedRolls);
console.log(uniqRoolSet);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! বিদ্যুৎ বিল হিসাব করা

// ধরে নিন, আপনি আপনার বাসার বিদ্যুৎ বিল হিসাব করার জন্য একটি ফাংশন লিখবেন।আপনার কাজ: calculateBill(units) নামে একটি ফাংশন তৈরি করুন।শর্ত (If Condition): * যদি ব্যবহৃত ইউনিট (units) ১০০ বা তার কম হয়, তবে প্রতি ইউনিটের দাম হবে ৫ টাকা।যদি ইউনিট ১০০ এর বেশি হয়, তবে প্রতি ইউনিটের দাম হবে ৯ টাকা।আউটপুট: ফাংশনটি মোট বিলের পরিমাণ ($Units \times Price$) হিসাব করে return করবে।
function calculateBill(unit) {
  if (unit <= 100) {
    return unit * 5;
  } else {
    return unit * 9;
  }
}

console.log(calculateBill(99));
console.log(calculateBill(200));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! ইউজার প্রোফাইল তৈরি

const userProfile = {
  firstName: "Tahsin",
  lastName: "Ahmed",
  birthYear: 2002,
};

//মিশন: এই অবজেক্টের ডাটা ব্যবহার করে স্ক্রিনে বা কনসোলে এইরকম একটি লাইন প্রিন্ট করুন: "Hello, Tahsin Ahmed! You were born in 2002.";
console.log(
  `Hello, ${userProfile.firstName} ${userProfile.lastName}! You were born in ${userProfile.birthYear}`,
);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! জোড় সংখ্যা খুঁজে বের করা

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//আপনার কাজ: একটি for লুপ অথবা যেকোনো লুপ ব্যবহার করে এই অ্যারের ভেতর থেকে শুধু জোড় সংখ্যাগুলো (Even Numbers) খুঁজে বের করে কনসোলে প্রিন্ট করুন।
for (let i of numbers) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! বড় নাম খুঁজে বের করা

const friends = [
  "Anik",
  "Muhammad",
  "Raju",
  "Abdur Rahman Bin Walid",
  "Sajid",
  "Fatema Tuz Zohra",
  "Mitu",
  "Mostafizur Rahman",
  "Alia",
];

// আপনার কাজ: একটি লুপ ব্যবহার করে এই ৩টি নামের মধ্যে সবচেয়ে বড় নাম (যে নামের দৈর্ঘ্য বা length সবচেয়ে বেশি) কোনটি, তা খুঁজে বের করুন এবং প্রিন্ট করুন।
let biggestName = friends[0];

for (let i = 1; i < friends.length; i++) {
  if (friends[i].length > biggestName.length) {
    biggestName = friends[i];
  }
}

console.log(biggestName);

//* ছোট থেকে বড় নামে সাজানো

friends.sort((a, b) => a.length - b.length);
console.log(friends);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! শপিং ডিসকাউন্ট ক্যালকুলেটর

// ধরে নিন আপনি একটি ওয়েবসাইটের জন্য ডিসকাউন্ট সিস্টেম বানাবেন। কাস্টমার কত টাকার কেনাকাটা করল, তার ওপর ভিত্তি করে ডিসকাউন্ট দেওয়া হবে।
function getDiscountPrice(totalAmount) {
  if (totalAmount <= 2000) {
    return totalAmount - 0;
  } else if (totalAmount <= 5000) {
    let total = (totalAmount * 10) / 100;
    return totalAmount - total;
  } else {
    let total = (totalAmount * 15) / 100;
    return totalAmount - total;
  }
}

console.log(getDiscountPrice(1500));
console.log(getDiscountPrice(3000));
console.log(getDiscountPrice(7000));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! অ্যারের সব সংখ্যার গড় (Average) বের করা

const marks = [80, 75, 92, 85, 68];

// আপনার কাজ: একটি লুপ ব্যবহার করে প্রথমে এই অ্যারের ভেতরের সব সংখ্যা যোগ করুন। তারপর সেই যোগফলকে মোট বিষয়ের সংখ্যা (অ্যারের length) দিয়ে ভাগ করে গড় (Average) নম্বর বের করে কনসোলে প্রিন্ট করুন।

let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
  totalMarks = totalMarks + marks[i];
}

let avarageMarks = totalMarks / marks.length;
console.log(avarageMarks);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! বয়স ক্যালকুলেটর

const member = {
  name: "Arif Ariyan",
  birthYear: 2005,
};

//একটি ফাংশন লিখুন যা এই অবজেক্টটিকে ইনপুট হিসেবে নেবে। এরপর বর্তমান বছর থেকে তার birthYear বিয়োগ করে ইউজারের বর্তমান বয়স হিসাব করে প্রিন্ট করবে।

function calculator(userObj) {
  let currentYear = new Date().getFullYear();

  return `${userObj.name} is ${currentYear - userObj.currentYear} years old`;
}
console.log(calculator(member));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! ইউজারনেম ভ্যালিডেশন

// validateUsername(username) নামে একটি ফাংশন লিখুন।

// শর্ত: * যদি ইউজারনেমের দৈর্ঘ্য বা লেন্থ ৫ অক্ষরের কম হয়, তবে ফাংশনটি রিটার্ন করবে: "Too Short!"

// যদি ইউজারনেমের দৈর্ঘ্য ১৫ অক্ষরের বেশি হয়, তবে রিটার্ন করবে: "Too Long!"

// আর দৈর্ঘ্য যদি ৫ থেকে ১৫ অক্ষরের ভেতরে ঠিকঠাক থাকে, তবে রিটার্ন করবে: "Valid Username!"

function validateUsername(username) {
  if (username.length < 5) {
    return "Too Short";
  } else if (username.length > 15) {
    return "Too Long";
  } else {
    return "Valid Username";
  }
}
console.log(validateUsername("Arif Ariyan"));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! মেগা চ্যালেঞ্জ ১: মাল্টি-লেভেল ট্যাক্স ও স্যালারি ক্যালকুলেটর

const employee1 = {
  name: "Arif Ariyan",
  baseSalary: 65000,
  bonus: 5000,
};

const employee2 = {
  name: "Israt jahan Jui",
  baseSalary: 95000,
  bonus: 9000,
};

// আপনার কাজ ও সূক্ষ্ম শর্তাবলী (calculateNetSalary ফাংশন বানাতে হবে):প্রথমে তার মোট আয় (Total Earnings) বের করুন, যা হলো = baseSalary + bonus।এবার এই মোট আয়ের ওপর স্ল্যাব অনুযায়ী ট্যাক্স হিসাব করুন:মোট আয় যদি ৪০,০০০ বা তার কম হয় $\rightarrow$ ০% ট্যাক্স।মোট আয় যদি ৪০,০০০ এর বেশি কিন্তু ৭০,০০০ এর কম বা সমান হয় $\rightarrow$ আয়ের ওপর ১০% ট্যাক্স কাটবে।মোট আয় যদি ৭০,০০০ এর বেশি হয় $\rightarrow$ আয়ের ওপর ১৫% ট্যাক্স কাটবে।ফাইনাল আউটপুট: ফাংশনটি একটি সুন্দর টেমপ্লেট স্ট্রিং (Template Literal) return করবে।

function calculateNetSalary(employee) {
  let totalSalary = employee.baseSalary + employee.bonus;
  let netSalary = 0;
  let tax = "";

  if (totalSalary <= 40000) {
    tax = "0%";
    netSalary = totalSalary;
  } else if (totalSalary > 40000 && totalSalary <= 70000) {
    tax = "10%";
    let taxAmount = (totalSalary * 10) / 100;
    netSalary = totalSalary - taxAmount;
  } else {
    tax = "15%";
    let taxAmount = (totalSalary * 15) / 100;
    netSalary = totalSalary - taxAmount;
  }

  return `${employee.name}'s Total Earnings is ${totalSalary} Taka. After ${tax} Tax,  Net salary is ${netSalary} `;
}

console.log(calculateNetSalary(employee1));
console.log(calculateNetSalary(employee2));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! মেগা চ্যালেঞ্জ ২: স্টুডেন্ট রিপোর্ট কার্ড এবং গ্রেড এভারেজ

const studentReport1 = {
  studentName: "Tahsin Ahmed",
  subjects: [
    { subName: "Bangla", mark: 85 },
    { subName: "English", mark: 35 }, // ফেল মার্কস!
    { subName: "Math", mark: 92 },
    { subName: "Science", mark: 78 },
  ],
};

const studentReport2 = {
  studentName: "Arif Ariyan",
  subjects: [
    { subName: "Bangla", mark: 85 },
    { subName: "English", mark: 90 },
    { subName: "Math", mark: 92 },
    { subName: "Science", mark: 78 },
  ],
};

const studentReport3 = {
  studentName: "Sharif Muhammad",
  subjects: [
    { subName: "Bangla", mark: 55 },
    { subName: "English", mark: 50 },
    { subName: "Math", mark: 72 },
    { subName: "Science", mark: 78 },
  ],
};

// আপনার কাজ (generateReport ফাংশন বানাতে হবে): এই অবজেক্টটি ফাংশনে পাস করার পর, একটি লুপ চালিয়ে সবগুলো বিষয়ের গড় (Average) নম্বর বের করতে হবে।লুপ চলার সময় আরেকটি সূক্ষ্ম জিনিস চেক করতে হবে—কোনো বিষয়ে মার্কস যদি ৪০ এর কম থাকে, তবে স্টুডেন্ট সরাসরি ফেল!শর্ত: * যদি সে কোনো বিষয়ে ফেল না করে এবং গড় নম্বর ৮০ বা তার বেশি হয় $\rightarrow$ গ্রেড হবে "A+"যদি সে কোনো বিষয়ে ফেল না করে এবং গড় নম্বর ৪০ থেকে ৭৯ এর মধ্যে হয় $\rightarrow$ গ্রেড হবে "Passed"যদি কোনো একটি বিষয়েও সে ৪০ এর কম পায় $\rightarrow$ গড় নম্বর যতই হোক না কেন, গ্রেড হবে "Failed"ফাংশনটি ফাইনাল রেজাল্ট (যেমন: "Tahsin Ahmed got A+" অথবা "Tahsin Ahmed Failed") return করবে।

function generateReport(studentResults) {
  let totalMarks = 0;
  let hasFild = false;

  for (let i = 0; i < studentResults.subjects.length; i++) {
    let currentMark = studentResults.subjects[i].mark;

    if (currentMark < 40) {
      hasFild = true;
    }

    totalMarks += currentMark;
  }

  let avarageMarks = totalMarks / studentResults.subjects.length;

  if (hasFild === true) {
    return `${studentResults.studentName} is Failed`;
  } else if (avarageMarks >= 80) {
    return `${studentResults.studentName} got A+`;
  } else {
    return `${studentResults.studentName} passed`;
  }
}
console.log(generateReport(studentReport1));
console.log(generateReport(studentReport2));
console.log(generateReport(studentReport3));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! মেগা চ্যালেঞ্জ ৩: সাবস্ক্রিপশন এক্সপায়ারি অ্যালার্ট

const users = [
  { name: "Rakib", expireYear: 2024 }, // আগের বছর
  { name: "Sakib", expireYear: 2026 }, // চলতি বছর
  { name: "Akash", expireYear: 2029 }, // ভবিষ্যতের বছর
];

// আপনার কাজ (checkExpiryStatus ফাংশন বানাতে হবে):ফাংশনটি পুরো users অ্যারেটিকে ইনপুট হিসেবে নেবে।ফাংশনের ভেতরে জাভাস্ক্রিপ্ট Date অবজেক্ট দিয়ে কারেন্ট বা বর্তমান বছরটি বের করে নিতে হবে (যেমন: ২০২৬)।এরপর একটি লুপ চালিয়ে প্রতিটা ইউজারের expireYear এর সাথে বর্তমান বছরের তুলনা করতে হবে:যদি expireYear বর্তমান বছরের চেয়ে কম হয় $\rightarrow$ প্রিন্ট করবে: "Rakib's subscription has Expired!"যদি expireYear বর্তমান বছরের সমান হয় $\rightarrow$ প্রিন্ট করবে: "Sakib's subscription Expires This Year!"যদি expireYear বর্তমান বছরের চেয়ে বেশি হয় $\rightarrow$ প্রিন্ট করবে: "Akash's subscription is Active!"

function checkExpiryStatus(userArray) {
  let thisYear = new Date().getFullYear();

  for (let i = 0; i < userArray.length; i++) {
    let currentUser = userArray[i];

    if (currentUser.expireYear < thisYear) {
      console.log(`${userArray[i].name}'s subscription Has Expired!`);
    } else if (currentUser.expireYear === thisYear) {
      console.log(
        `${userArray[i].name}'s subscription will be Expire This Year!`,
      );
    } else {
      console.log(`${userArray[i].name}'s subscription Is Active`);
    }
  }
}
checkExpiryStatus(users);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! মেগা চ্যালেঞ্জ ৪: ইকমার্স কার্ট ক্যালকুলেটর

const myShoppingCart = {
  customerName: "Tahsin",
  items: [
    { productName: "Laptop", price: 60000, qty: 1 },
    { productName: "Mouse", price: 1500, qty: 2 },
    { productName: "Keyboard", price: 2500, qty: 1 },
    { productName: "Headphone", price: 3000, qty: 2 },
  ],
};

// আপনার কাজ (calculateTotalBill ফাংশন বানাতে হবে):
// একটি লুপ চালিয়ে প্রতিটা প্রোডাক্টের মোট দাম বের করতে হবে (price×qty) এবং সেগুলো একসাথে যোগ করে সর্বমোট বিল (Grand Total) বের করতে হবে।
// শর্ত: যদি সর্বমোট বিল ৫০,০০০ টাকার বেশি হয়, তবে কাস্টমার ফ্ল্যাট ২০০০ টাকা ডিসকাউন্ট পাবে। বিল ৫০,০০০ বা তার কম হলে কোনো ডিসকাউন্ট নেই।
// ফাংশনটি ডিসকাউন্ট বাদ দেওয়ার পর ফাইনাল বিল একটি সুন্দর টেমপ্লেট স্ট্রিংয়ে return করবে। (আউটপুট আসা উচিত: "Tahsin, your final bill is 69500 TK." কারণ মোট বিল হচ্ছে ৭১,৫০০ টাকা, যা ৫০ হাজারের বেশি হওয়ায় ২,০০০ টাকা মাইনাস হয়েছে।)

function calculateTotalBill(cart) {
  let total = 0;

  for (let i = 0; i < cart.items.length; i++) {
    let gun = cart.items[i].price * cart.items[i].qty;

    total += gun;
  }

  if (total > 50000) {
    total = total - 2000;
  }

  return `${cart.customerName}, Your Final Bill is ${total} Taka.`;
}
console.log(calculateTotalBill(myShoppingCart));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! মেগা চ্যালেঞ্জ ৫: হসপিটাল আইসিইউ (ICU) সিট অ্যালার্ট

const icuBeds = [
  { bedNo: "ICU-101", isOccupied: true }, // রোগী আছে
  { bedNo: "ICU-102", isOccupied: false }, // খালি
  { bedNo: "ICU-103", isOccupied: false }, // রোগী আছে
  { bedNo: "ICU-104", isOccupied: false }, // খালি
  { bedNo: "ICU-105", isOccupied: true }, // রোগী আছে
];

// আপনার কাজ (checkHospitalStatus ফাংশন বানাতে হবে):ফাংশনটি এই অ্যারেটি ইনপুট হিসেবে নেবে।লুপ চালিয়ে হিসাব করতে হবে মোট কয়টি বেড খালি (false) আছে আর কয়টি বেডে রোগী (true) আছে।শর্ত (If Condition): * যদি খালি বেডের সংখ্যা ০ হয় $\rightarrow$ রিটার্ন করবে: "Alert: No ICU Beds Available!"যদি খালি বেডের সংখ্যা মোট বেডের অর্ধেক বা তার কম হয় $\rightarrow$ রিটার্ন করবে: "Warning: ICU Beds are filling up fast!"আর যদি পর্যাপ্ত বেড খালি থাকে $\rightarrow$ রিটার্ন করবে: "Status Normal: X ICU beds are free." (এখানে X এর জায়গায় খালি বেডের সংখ্যা বসবে)।

function checkHospitalStatus(icuBedsArray) {
  let emptyBeds = 0;
  let occupiedBeds = 0;
  let length = icuBedsArray.length;

  for (let i = 0; i < length; i++) {
    if (icuBedsArray[i].isOccupied === true) {
      occupiedBeds++;
    } else {
      emptyBeds++;
    }
  }

  if (emptyBeds === 0) {
    return `Alert: No ICU beds Available!`;
  } else if (emptyBeds <= length / 2) {
    return `Warning:  ICU Beds are filling up fast!`;
  } else {
    return `Status Normal: ${emptyBeds} ICU beds are free.`;
  }
}

console.log(checkHospitalStatus(icuBeds));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! মেগা চ্যালেঞ্জ ৬: ট্রাফিক স্পিড রাডার ও ফাইন ক্যালকুলেটর

const carData = {
  driver: "Sakib",
  carModel: "Toyota Premium",
  speed: 100, // গাড়ির গতি (km/h)
};

// আপনার কাজ (checkSpeedLimit ফাংশন বানাতে হবে):হাইওয়ের সর্বোচ্চ গতিসীমা হলো ৮০ km/h।শর্ত ও ফাইন (Fine) নির্ধারণ:গতি যদি ৮০ বা তার কম হয় $\rightarrow$ কোনো জরিমানা নেই। রিটার্ন করবে: "Toyota Premium is driving safely."গতি যদি ৮১ থেকে ১০০ এর মধ্যে হয় $\rightarrow$ জরিমানা ২০০০ টাকা।গতি যদি ১০০ এর বেশি হয় (যেমন এই কেসে ১১০) $\rightarrow$ জরিমানা ৫০০০ টাকা।ফাংশনটি জরিমানাসহ একটি ওয়ার্নিং মেসেজ return করবে।(আউটপুট আসা উচিত: "Alert! Sakib was driving at 110 km/h. Speed limit is 80 km/h. Fine: 5000 TK.")

function checkSpeedLimit(carDataArray) {
  if (carDataArray.speed <= 80) {
    return `${carDataArray.carModel} is driving safely.`;
  } else if (carDataArray.speed <= 100) {
    return `Alert: ${carDataArray.driver} was driving at ${carDataArray.speed} KM/h. speed limit is 80 KM/h. Fine: 2000 Taka`;
  } else {
    return `Alert: ${carDataArray.driver} was driving at ${carDataArray.speed} KM/h. speed limit is 80 KM/h. Fine: 5000 Taka`;
  }
}
console.log(checkSpeedLimit(carData));

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! দ্য ওটিপি জেনারেটর অ্যান্ড ফিল্টার

// টাস্ক: আপনাকে একটি জেনারেটর ফাংশন বানাতে হবে যার নাম function* otpGenerator()।

// এই জেনারেটরটি একটি অসীম লুপের মধ্যে প্রতিবার ৪ ডিজিটের একটি করে র্যান্ডম ওটিপি কোড (যেমন: "৪৫২১", "০৮৫২") yield করবে। (যেহেতু শুরুতে 0 থাকতে পারে, তাই ওটিপিগুলো অবশ্যই স্ট্রিং আকারে জেনারেট হতে হবে)।

// এরপর এই জেনারেটর থেকে Iterator.from() দিয়ে একটি ইটারেটর অবজেক্ট তৈরি করুন।

// এবার ইটারেটরের মেথড ব্যবহার করে প্রথম ৫টি ওটিপি কোডকে ফেলে দিন (.drop())।

// সবশেষে, পরের ওটিপি কোডগুলোর প্রত্যেকটি সংখ্যাই ৫ এর চেয়ে বড় কি না, তা পরীক্ষা করতে কোনো মেথডটি ব্যবহার করবেন এবং সেটি কীভাবে লিখবেন?

function* otpGenerator() {
  while (true) {
    let randomNumber = Math.floor(Math.random() * 10000);

    let otp = String(randomNumber).padStart(4, "0");

    yield otp;
  }
}

const genObj = otpGenerator();
const otpIterator = Iterator.from(genObj);
const remainingOtps = otpIterator.drop(5);

const result = remainingOtps.every((otp) => {
  let digits = otp.split("");
  return digits.every((digit) => Number(digit) > 5);
});
console.log(result);

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! শপিং কার্ট ইটারেটর

//আপনার কাজ: এই অবজেক্টের ভেতর [Symbol.iterator] ব্যবহার করে এমন একটি কাস্টম ইটারেটর তৈরি করুন, যাতে আমরা যদি এই পুরো অবজেক্টের ওপর একটি সাধারণ for (const item of shoppingCart) লুপ চালাই, তবে সে শুধুমাত্র যে প্রোডাক্টগুলোর stock: true (স্টক আছে), সেগুলোর নাম প্রিন্ট করবে (যেমন আউটপুট আসবে: Laptop, Keyboard)। স্টক না থাকলে সেটিকে স্কিপ করবে।

const shoppingCart = {
  products: [
    { name: "Laptop", price: 80000, stock: true },
    { name: "Mouse", price: 1500, stock: false },
    { name: "Keyboard", price: 3500, stock: true },
    { name: "Monitor", price: 18000, stock: true },
  ],

  [Symbol.iterator]() {
    let index = 0;
    let product = this.products;

    return {
      next() {
        while (index < product.length) {
          const currentProduct = product[index];
          index++;

          if (currentProduct.stock === true) {
            return { value: currentProduct.name, done: false };
          }
        }

        return { done: true };
      },
    };
  },
};
for (let item of shoppingCart) {
  console.log(item);
}

//console-e ব্যবধান তৈরি করতে।
console.log(" ");

//! দ্য গেম বস লেভেল ট্র্যাকার

// টাস্ক: একটি জেনারেটর ফাংশন তৈরি করুন যার নাম function* gameLevel()।

// এই ফাংশনের ভেতরে একটি ভেরিয়েবল থাকবে let level = 1;

// আপনি যখনই বাইরে থেকে প্রথমবার .next() কল করবেন, সে কনসোলে প্রিন্ট করবে "ওয়েলকাম টু লেভেল ১" এবং yield করবে লেভেলের মান।

// এরপর যতবার .next() কল হবে, লেভেলের মান ১ করে বাড়বে এবং প্রতিবার কন্ডিশন চেক করবে।

// যখনই লেভেলের মান বাড়তে বাড়তে ঠিক 5 নম্বর লেভেলে পৌঁছাবে, তখন সে আর yield করবে না, বরং সরাসরি return "Congratulations! You defeated the Boss!" দিয়ে জেনারেটরটি চিরতরে বন্ধ (done: true) করে দেবে।

function* gameLevel(){
   let level = 1
  console.log(`WELCOME TO LEVEL ${level}`)
  yield level;

  while(true){
    level ++

    if(level === 5){
      return "Congratulations! You defeated the Boss!"
    }
    
    console.log(`WELCOME TO LEVEL ${level}`)
    yield level;
  }
}

const zoneTracker = gameLevel()
console.log(zoneTracker.next())
console.log(zoneTracker.next())
console.log(zoneTracker.next())
console.log(zoneTracker.next())
console.log(zoneTracker.next())
