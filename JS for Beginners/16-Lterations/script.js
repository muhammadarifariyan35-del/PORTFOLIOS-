let text = " ";
for (let i = 0; i < 39; i++) {
  text += "this Number is" + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let y = 0;
do {
  console.log(y);
  y++;
} while (y < 10);

const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
  console.log(x + ": " + person[x]);
}

const name = "W3Schools";
for (const x of name) {
  console.log(x);
}

const letters = new Set(["a", "b", "c"]);
for (let z of letters) {
  console.log(z);
}

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (let i of fruits) {
  console.log(i);
}

function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}

const n = myNumbers();
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());

const myNumber = {};

myNumber[Symbol.iterator] = function () {
  let n = 0;
  let isDone = false;

  return {
    next() {
      n += 10;
      if (n > 100) {
        isDone = true;
      }
      return { value: n, done: isDone };
    },
  };
};

for (let num of myNumber) {
  console.log(num);
}

//!------------------------------------------------

const myIterator = Iterator.from([1, 2, 3, 4, 5, 6, 7]);
for (const x of myIterator) {
  console.log(x);
}

const myIterator2 = Iterator.from([1, 2, 3, 4, 5, 6, 7]);
console.log(myIterator2.next());
console.log(myIterator2.next());

const myIterator3 = Iterator.from([1, 2, 3, 4, 5, 6, 7]);
const firstFive = myIterator3.drop(5);
console.log(firstFive.next());

const myIterator4 = Iterator.from("123456789");
let result = myIterator4.every((x) => x > 5);
console.log(result);

const myIterator5 = Iterator.from([55, 65, 50, 86, 33]);
let filterIterator = myIterator5.filter((i) => i >= 50);
for (let x of filterIterator) {
  console.log(x);
}

const myIterator6 = Iterator.from([3, 10, 18, 30, 20]);
let findIterator = myIterator6.find((x) => x >= 18);
console.log(findIterator)
