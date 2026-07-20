const id1 = Symbol("id-098");
const id2 = Symbol("id-098");
console.log(id1 === id2);

const id3 = Symbol.for("id3-990");
const id4 = Symbol.for("id3-990");
console.log(id3 === id4);

const id = Symbol();
const person = {
  name: "arif",
  age: 20,
};
person[id] = 123;
console.log(person.id);
console.log(person[id]);

const myObj = {
  data: ["A", "B", "C"],

  [Symbol.iterator]() {
    let index = 0;
    let data = this.data;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
let text = "";
for (const x of myObj) {
  text += x + " ";
}
console.log(text);

//! JavaScript typeof
console.log(typeof function () {});

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits instanceof Map);

const time = new Date();
console.log(time instanceof Date);

console.log(new Set().constructor);

//! JavaScript undefined
function myFunction() {
  let x = 5;
}
console.log(myFunction());

//! JavaScript NaN
let x = 100 / "apple";
console.log(x);
console.log(typeof x);

//! JavaScript toString()
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitss.join(" ").toString());
console.log(new Date().toString());

//! JavaScript toLocaleString()
let num = 98364595.34;
console.log(num);
console.log(num.toLocaleString("en-US"));
console.log(num.toLocaleString("de-DE"));

let price = 3452.34;
let text2 = price.toLocaleString("en-Us", {
  style: "currency",
  currency: "USD",
});
let text3 = price.toLocaleString("de-DE", {
  style: "currency",
  currency: "EUR",
});
document.getElementById("demo").innerHTML = text2 + "<br>" + text3;

let score = 74573;
console.log(score.toLocaleString("en-US", { style: "percent" }));

let num2 = 8454.6435;
console.log(
  num2.toLocaleString("bn-BD", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }),
);

console.log(new Date().toLocaleString("en-US"));

let date = new Date();
console.log(
  date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);

function fileSize(bytes) {
  if (bytes < 1024) return (bytes = " bytes");
  if (bytes < 1024 * 1024)
    return (
      (bytes / 1024).toLocaleString("en-Us", { maximumFractionDigits: 1 }) +
      " KB"
    );
  return (
    (bytes / 1024 / 1024).toLocaleString("en-US", {
      maximumFractionDigits: 1,
    }) + " MB"
  );
}
console.log(fileSize(7657652));

//! JavaScript Type Conversion
console.log(Number("4.75"));
console.log(Number(" "));
console.log(typeof Math.PI);
console.log(Number(Math.PI));

console.log(String(242343));
console.log((243 + 87).toString());

console.log(Number(new Date()));
console.log(new Date().getTime());

console.log((new Date().getMonth() + 1).toLocaleString("bn-BD"));

console.log(Number(false));
console.log(Number(true));

console.log(String(false));
console.log(String(true));

//! JavaScript Destructuring

const person2 = {
  firstName: "Arif",
  lastName: "Ariyan",
  age: 21,
};
// let { firstName, lastName } = person2;
// console.log(firstName + " " + lastName);
let { lastName, firstName, country = "Bangladesh" } = person2;
console.log(lastName + " " + firstName + " " + country);

let { age: boyos } = person2;
console.log(boyos);

let name = "Arif-Ariyan";
let [a, b, c, d, e, f, g, h] = name;
console.log(a, h, d, c);

const fruits2 = ["banana", "Orange", "Apples", "Mangos"];
let [fru1, fru2, fru3] = fruits2;
console.log(fru1, fru3);

const fruits3 = ["banana", "Orange", "Apples", "Mangos"];
let [f1, , f2] = fruits3;
console.log(f1, f2);

const fruits4 = ["banana", "Orange", "Apples", "Mangos"];
let { [0]: fr1, [2]: fr2 } = fruits4;
console.log(fr2);

const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a11, b22, ...c33] = numbers;
console.log(c33);

const fruits5 = new Map([
  ["apples", 908],
  ["bananas", 875],
  ["oranges", 685],
]);
for (let [key, value] of fruits5) {
  console.log(key + " is " + value + " Taka ");
}

let firstName1 = "Arif";
let lastName2 = "Arifyan";
let [fn, ln] = [firstName1, lastName2];
console.log(fn + " " + ln);

//!  Problem solving

//* ই-কমার্স ইনভয়েস ক্লিনার (Coercion + Destructuring + toLocaleString)

// তোমার টাস্ক:
// অবজেক্টটি থেকে এক লাইনে Destructuring করে price, delivery, এবং discount বের করতে হবে।
// Type Coercion/Conversion ব্যবহার করে মোট বিল হিসাব করতে হবে। সূত্র: (price + delivery) - discount (মনে রেখ, স্ট্রিং এর সাথে যোগ করতে গেলে জাভাস্ক্রিপ্ট কোয়েরশন করে জোড়া লাগিয়ে দেয়, তাই তোমাকে একে সংখ্যায় রূপান্তর করতে হবে Unary Plus + বা Number() দিয়ে)
// মোট বিলের সংখ্যাটিকে toLocaleString("bn-BD") দিয়ে বাংলা সংখ্যায় কনভার্ট করে আউটপুট দেখাতে হবে।

const order = {
  id: "ORD-9982",
  details: {
    price: "1200", // এটি স্ট্রিং হিসেবে আছে!
    delivery: 50, // এটি সংখ্যা
    discount: "150", // এটিও স্ট্রিং
  },
};

let [pri, delivery, discount] = [
  +order.details.price,
  order.details.delivery,
  +order.details.discount,
];

console.log((pri + delivery - discount).toLocaleString("bn-BD"));

//* ডুপ্লিকেট ইউজার ডিটেক্টর ও ফিল্টার (Regex + Set + Constructor)

// Regex / প্যাটার্ন ব্যবহার করে টেক্সট থেকে শুধু @arif99 এবং @sakib75 ম্যাপ বা ম্যাচ করে বের করো। (আগের দিন শেখা (?<!\w)@\w+ প্যাটার্নটি মনে আছে তো?)
// ম্যাচ করা অ্যারের ভেতর @arif99 দুবার থাকবে। এবার Set ব্যবহার করে সেই ডুপ্লিকেটটি হাওয়া করে দাও এবং সেটিকে আবার অ্যারেতে রূপান্তর করো।
// শেষ লাইনে constructor.name দিয়ে চেক করে কনসোলে প্রিন্ট করো যে তোমার ফাইনাল রেজাল্টটি আসলেই একটি "Array" কিনা।

const chatText =
  "Hello @arif99, welcome! Hey @arif99, are you there? Also call @sakib75.";
let userPattern = /(?<!\w)@\w+/g;

const usernNameArray = chatText.match(userPattern);
const uniqUserSet = new Set(usernNameArray);
const finalArray = Array.from(uniqUserSet);

console.log(finalArray);
console.log(finalArray.constructor.name);

//* সিক্রেট ইউজার প্রফাইল বিল্ডার (Symbols + Destructuring with Aliasing)

// তোমার টাস্ক:
// একটি Symbol তৈরি করো যার ডেসক্রিপশন হবে "userId"।
// একটি অবজেক্ট userProfile তৈরি করো। সেখানে ওই Symbol-টিকে key হিসেবে ব্যবহার করে ভ্যালু দাও "USR-X99"। এছাড়া অবজেক্টে fName: "Arif" এবং role: "Admin" প্রোপার্টি রাখো।
// অবজেক্টটি থেকে Destructuring করো। করার সময় fName-এর নাম বদলে ভ্যারিয়েবল বানাও name (Aliasing), এবং একটি নতুন প্রোপার্টি country বের করার চেষ্টা করো যার ডিফল্ট ভ্যালু (Default Value) হিসেবে সেট করবে "Bangladesh"।

let userIdSymbol = Symbol("userId");

const userProfile = {
  userIdSymbol: "USR-X99",
  fName: "Arif",
  role: "Admin",
};

let { fName: userName, userCountry = "Bangladesh" } = userProfile;
console.log(
  userName,
  userCountry,
  Object.keys(userProfile),
  userProfile.userIdSymbol,
);

//*  ডাটা টাইপ পিউরিফায়ার (Primitive vs Object + Type Conversion + Constructor)

// তোমার টাস্ক:
// অ্যারেটির ওপর একটি লুপ বা .map() চালাও।
// লুপের ভেতরে চেক করো, যদি উপাদানটির typeof সমান "object" হয়, তবে সেটিকে Type Conversion করে খাঁটি প্রিমিটিভ টাইপে রূপান্তর করো (যেমন: অবজেক্ট স্ট্রিংকে String(val) বা .valueOf() দিয়ে নরমাল স্ট্রিং বানাও)।
// রূপান্তর করার পর, উপাদানটির constructor.name চেক করে কনসোলে প্রিন্ট করো।

const muddyData = [new String("Hello"), new Number(2026), "JS is Awesome"];

const cleanData = muddyData.map((val) => {
  if (typeof val === "object" && val !== null) {
    val = val.valueOf();
  }
  console.log(
    `Value: "${val}"  Tyepe: ${typeof val}  -> Constructor: ${val.constructor.name} `,
  );
  return val;
});

console.log(cleanData);

//* দ্য ডিটেকটিভ কোড রিভিউ (Advanced Destructuring + Coercion)

const cart = {
  promo: { code: "SUMMER50", value: "50" },
  items: [{ name: "T-Shirt", price: 200 }],
};

const {
  promo: { value: discount11 = "0" },
  items: [firstItem],
} = cart;

const finalPrice = firstItem.price - Number(discount11);
console.log(finalPrice);

//* দ্য হিডেন ট্রেজার হ্যাক (Symbols + Built-in Methods)

const secretKey = Symbol("hiddenPassword");

const vault = {
  username: "mr_robot",
  [secretKey]: "SuperSecret1234",
};

const vault1 = Object.getOwnPropertySymbols(vault);
const hackedKey = vault1[0];
console.log(vault[hackedKey]);

