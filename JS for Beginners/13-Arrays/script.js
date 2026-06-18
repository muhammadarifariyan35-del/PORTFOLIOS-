const cars = ["Saab", "Volvo", "BMW"];
console.table(cars);

cars[0] = "Opel";

cars.push("Saab");

const cars2 = [];
cars2[0] = "BMW";
cars2[1] = "Volvo";
console.table(cars2);
cars2[2] = "Saab";

const cars3 = new Array("Saab", "Volvo", "BMW");
console.table(cars3);

let car = cars[0];
console.log(car);

console.log(cars.toString());
console.log(typeof cars);

console.log(cars.length);
console.table(cars.sort());

let text = "<ul>";
for (let i = 0; i < cars.length; i++) {
  text += "<li>" + cars[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;

let text2 = "<ul>";
cars.forEach(myFunction);
text2 += "</ul>";

function myFunction(value) {
  text2 += "<li>" + value + "</li>";
}

document.getElementById("demo2").innerHTML = text2;
//?------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

// fruits.length = 2;
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.at(-3));
console.log(fruits[3]);
console.log(fruits.join("  "));
// console.log(fruits.pop())
// fruits.pop()
fruits.push("Kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Banana");
fruits[fruits.length] = "Kiwi";

console.log(Array.isArray(fruits));
// delete fruits[fruits.length - 1]

console.log(cars.concat(fruits, cars));

console.table(fruits);
console.log(fruits.copyWithin(5, 3));

const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// number.copyWithin(0, 5, 10);
console.log(number);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

myArr.splice(1, 0, 20, 30);

console.log(myArr.flat());

console.log(number.flatMap((x) => [x, x * 10]));

//?------------------------------------

console.log(fruits.indexOf("Orange") + 1);
console.log(fruits.includes("Banana"));

const number2 = [
  22, 45, 22, 46, 26, 73, 26, 63, 88, 36, 873, 47, 93, 47, 66, 246, 76,
];
let find = number2.find((value) => value > 80);
console.log(find);

let findIndex = number2.findIndex((value) => value > 90);
console.log(findIndex);

let findLast = number2.findLast((value) => value > 90);
console.log(findLast);

let findLastIndex = number2.findLastIndex((value) => value > 90);
console.log(findLastIndex);
//?-----------------------------------------

// console.log(fruits.sort())
// console.log(fruits.reverse())
console.log(fruits);
console.log(fruits.toSorted());
console.log(fruits.toReversed());
console.log(fruits);

number2.sort((a, b) => a - b);
console.log(number2);

number2.sort((a, b) => b - a);
console.log(number2);

number2.sort(() => 25 - Math.floor(Math.random() * 50));
console.log(number2);

const cars4 = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars4.sort((a, b) => a.year - b.year);
console.table(cars4);

cars4.sort((a, b) => b.year - a.year);
console.table(cars4);

console.log(Math.max(...number2));
console.log(Math.min(...number2));

function myFunction3(arr) {
  let len = arr.length;
  let max = Infinity;
  while (len--) {
    if (arr[len] < max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myFunction3([22, 44, 64, 23, 2, 64, 23]));
//?------------------------------------------

const number3 = [
  22, 45, 22, 46, 26, 73, 26, 63, 88, 36, 873, 47, 93, 47, 66, 246, 76,
];
let text3 = "";
number3.forEach((value, index, arr) => (text3 += value + "<br>"));

let map = number3.map((value, index, array) => value * 3).join(" ");
console.log(map);
document.getElementById("demo3").innerHTML = text3 + "<br> " + map;

console.log(number3.flatMap((x) => x * 2));

console.log(number3.filter((x) => x > 50));

console.log(number3.reduce((total, value, index, arr) => total + value));

//?--------------------------------------------

console.log(number3.reduce((total, value) => total + value, 1000));

console.log(number3.reduceRight((total, value) => total - value));

console.log(number3.every((value) => value > 10));

console.log(number3.some((value) => value < 10));

console.log(Array.from("Arif Ariyan"));

console.log(Array.from(number3, (x) => x * 2));

let keys = fruits.keys();

for (let x of keys) {
  console.log(x);
}
//?---------------------------------------------

let f = fruits.entries();

for (let x of f) {
  console.log(x);
}

const months = ["January", "February", "March", "April"];
console.log(months.with(2, "Mar"));

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(q1, q2, q3, q4, year);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);

let a, b, rest;
const arr3 = [1, 2, 3, 4, 5, 6, 7, 88, 46, 46, 475];

[a, b, ...rest] = arr3;

console.log(rest);

//?------------------------------------------------

const cars5 = ["Saab", "Volvo", "BMW"];
// cars5 = ["Toyota", "Volvo"]  There will be error

cars5[1] = "Toyota";
cars5.push("Audi");

console.log(cars5);

// const cars6;
//  cars6 = ["Saab", "Volvo", "BMW"]   This will be a error

cars7 = ["Saab", "Volvo", "BMW"];
// let cars7  Error
// const cars7 = [] Error
var cars7;

console.log(cars7);
