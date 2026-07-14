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

console.log(Number(false))
console.log(Number(true))

console.log(String(false))
console.log(String(true))

 