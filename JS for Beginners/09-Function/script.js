function sayHello() {
  return "Hello world";
}
console.log(sayHello());

function multiply(a, b) {
  return a / b;
}
console.log(multiply(900, 50));

let say = sayHello();
console.log(say);

function name() {
  return "Arif Ariyan";
}
document.getElementById("demo").innerHTML = name();

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(110));
console.log(toCelsius);

function showDisplay() {
  function tellHello() {
    return "Hello world";
  }

  let result = tellHello();
  document.getElementById("demo2").innerHTML = result;
}

function showHello() {
  document.getElementById("demo2").innerHTML = tellHello();
}
// showHello();

console.log(sayHello, multiply, showHello);

function hello(name) {
  return "hello " + name;
}

const people = ["arif", "sharif", "mhib", "jui", "afra", "mohima"];

people.forEach((i) => {
  console.log(hello(i));
});
console.log("");
for (let i = 0; i < people.length; i++) {
  console.log(hello(people[i]));
}

//?-----------------------------------------

function plus(y, z = 20) {
  return y + z;
  console.log(aa);
}
console.log(plus(50));
console.log(plus(10, 30));

function multiply2(a, b) {
  return a * b;
}
let mul = multiply2(22, 44);
console.log(mul);

function multy(a, b) {
  return "arif";
  return a * b;
}
console.log(multy(9, 9));

function multiply3(a, b) {
  let x = a * b;
  return x;
}
console.log(multiply3(33, 44));

function checkAge(age) {
  if (age < 18) {
    return "So young Not Granted";
  }
  return "Access granted";
}
console.log(checkAge(20));

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(77, 33, 44, 200));

function findMax2() {
  console.log(...arguments);
  return Math.max(...arguments);
}
console.log(
  findMax2(
    33,
    55,
    77,
    99,
    44,
    55,
    77,
    88,
    200,
    45,
    565,
    3465,
    8675,
    85634,
    68765,
  ),
);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(
  sumAll(66, 66, 99, 44, 6656, 6765, 45634, 787, 345, 576456453, 2365765645),
);

function subtract(a, b) {
  return a - b;
}
console.log(subtract(200, 100));
console.log(subtract(100, 300));
console.log(subtract);

let la = 10;
let lb = 20;
function multiply4(a, b) {
  return a * b;
}
console.log(multiply4(la, lb));

function ltoSelsius(f) {
  return (5 / 9) * (f - 32);
}
console.log(ltoSelsius("arif"));

function multiply5() {
  let sum = 1;
  for (let i = 0; i < arguments.length; i++) {
    sum *= arguments[i];
  }

  return sum;
}
console.log(multiply5(22, 33, 44));

function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x * y;
}
console.log(myFunction(10));

function myFunction2(x, y = 2) {
  return x * y;
}
console.log(myFunction2(20, 3));

function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sum(22, 44, 654, 22, 1, 66, 22, 55, 22, 44, 1, 65, 342, 643, 242));

//?--------------------------------------------

const result = function (a, b) {
  return a + b;
};
console.log(result(11, 22));

console.log(hello2());
function hello2() {
  return "hallo2";
}

// console.log(hello3())
const hello3 = function () {
  return "hello 3";
};
console.log(hello3());

const multiply6 = (a, b) => a * b;
console.log(multiply6(28, 33));

const hello4 = (i) => "hello" + " " + i;
console.log(hello4("arif"));
console.log(hello4("sharif"));

const myJui = (x, y) => {
  x * y;
};
console.log(myJui(10, 20));

const myJui2 = (x, y) => {
  return x * y;
};
console.log(myJui2(10, 20));

const person = {
  name: "airf",
  greet: function (i) {
    return i + " " + person.name;
  },
};
console.log(person.greet("HI"));


