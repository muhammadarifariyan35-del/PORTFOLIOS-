const letters = new Set(["a", "b", "c"]);
letters.add("d");
console.log(letters);

const letters2 = new Set();

const a = "a";
const b = "b";
const c = "c";

letters2.add(a);
letters2.add(b);
letters2.add(c);
letters2.add("d");
letters2.add("e");
letters2.add("f");
letters2.add("Arif Ariyan");
console.log(letters2);

let text = "";
for (let x of letters2) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

//?------------------------------------------------

console.log(letters2.size);
console.log(letters2.has("Arif Ariyan"));

let text2 = "";
letters2.forEach((value) => (text2 += value + " "));
document.getElementById("demo2").innerHTML = text2;

console.log(letters2.values());
console.log(letters2.keys());
console.log(letters2.entries());

//?------------------------------------------------

const g = new Set(["a", "b", "c", "d", "a", "f", ""]);
const h = new Set(["d", "e", "f"]);
console.log(g.union(h));

console.log(g.intersection(h));

let randomLetter = "abcdefghijklmnopqrstuvwxyz";
let seta = new Set();
let setb = new Set();

for (let i = 0; i < Math.floor(Math.random() * randomLetter.length); i++) {
  seta.add(randomLetter[i]);
  // console.log(i)
}

for (let i = 0; i < Math.floor(Math.random() * randomLetter.length); i++) {
  setb.add(randomLetter[i]);
  // console.log(i)
}

console.log(seta.intersection(setb));

console.log(seta.difference(setb));

console.log(seta.symmetricDifference(setb));

console.log(seta.isDisjointFrom(setb));

console.log(seta.isSubsetOf(setb));

console.log(seta.isSupersetOf(setb));

//?------------------------------------------

let mySet = new WeakSet();

let myObj = { firstName: "Arif", lastName: "Ariyan", Location: "Mymensingh" };
const myArray = ["Tahsin", "Afsin", "takia", "Amatullah", "Muhammad"];

mySet.add(myObj);
mySet.add(myArray);

myObj = null;
console.log(mySet.has(myObj));
console.log(mySet);

let text3 = "";
// creat a weakset to track people
const people = new WeakSet();

// Visitor Database
const Tahsin = { fullName: "Tahsin Ahmed", age: 7 };
const Afsin = { fullName: "Afsin", age: 5 };
const Takiya = { fullName: "Takiya ragman", age: 12 };

// Track visitors
track(Tahsin);
track(Takiya);
track(Tahsin);
track(Afsin);

//Function to track visitors
function track(visitor) {
  if (people.has(visitor)) {
    text3 += visitor.fullName + " is visiting again " + "<br>";
  } else {
    people.add(visitor);
    text3 +=
      visitor.fullName +
      " " +
      "Age" +
      " " +
      visitor.age +
      " is visiting for the first time " +
      "<br>";
  }
}

document.getElementById("demo").innerHTML = text3;
//?--------------------------------------------------

