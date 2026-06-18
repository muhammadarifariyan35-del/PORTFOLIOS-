const fruits = new Map([["Oranges", 200]]);

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("Oranges", 250);

console.log(fruits);
console.log(fruits.get("apples"));
console.log(typeof fruits);

//?--------------------------------

console.log(fruits.get("apples"));
console.log(fruits.size);
// fruits.delete("Oranges")
// fruits.clear()
console.log(fruits);
console.log(fruits.has("apples"));

let text = "";
fruits.forEach(function (value, key) {
  text += key + ": " + value + "<br>";
});

document.getElementById("demo").innerHTML = text;

for (let x of fruits.entries()) {
  console.log(x);
}

for (let x of fruits.keys()) {
  console.log(x);
}

for (let i of fruits.values()) {
  console.log(i);
}

const userDatabase = [
  {
    id: 1,
    name: "Tahsin Ahmed",
    age: 24,
    role: "Developer",
    isActive: true,
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Afsin Jahan",
    age: 19,
    role: "Designer",
    isActive: true,
    skills: ["Figma", "Illustrator"],
  },
  {
    id: 3,
    name: "Takiya Rahman",
    age: 28,
    role: "Manager",
    isActive: false,
    skills: ["Agile", "Communication"],
  },
  {
    id: 4,
    name: "Anik Hasan",
    age: 31,
    role: "Developer",
    isActive: true,
    skills: ["Node.js", "MongoDB", "Express"],
  },
  {
    id: 5,
    name: "Sajid Islam",
    age: 22,
    role: "Tester",
    isActive: false,
    skills: ["Selenium", "QA"],
  },
  {
    id: 6,
    name: "Nusrat Fariha",
    age: 25,
    role: "Designer",
    isActive: true,
    skills: ["Photoshop", "UI/UX"],
  },
  {
    id: 7,
    name: "Ayman Sadiq",
    age: 35,
    role: "Manager",
    isActive: true,
    skills: ["Leadership", "Marketing"],
  },
  {
    id: 8,
    name: "Raju Ahmed",
    age: 20,
    role: "Developer",
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    name: "Farhana Yasmin",
    age: 27,
    role: "Tester",
    isActive: true,
    skills: ["Jira", "Manual Testing"],
  },
  {
    id: 10,
    name: "Imran Khan",
    age: 29,
    role: "Developer",
    isActive: false,
    skills: ["Python", "Django"],
  },
  {
    id: 11,
    name: "Mitu Chowdhury",
    age: 23,
    role: "Designer",
    isActive: true,
    skills: ["Figma", "Sketch"],
  },
  {
    id: 12,
    name: "Asif Zaman",
    age: 33,
    role: "Developer",
    isActive: true,
    skills: ["Java", "Spring Boot"],
  },
  {
    id: 13,
    name: "Tamanna Islam",
    age: 26,
    role: "Manager",
    isActive: true,
    skills: ["Scrum", "Budgeting"],
  },
  {
    id: 14,
    name: "Zeeshan Arif",
    age: 18,
    role: "Developer",
    isActive: false,
    skills: ["C++", "Data Structures"],
  },
  {
    id: 15,
    name: "Nabila Huda",
    age: 30,
    role: "Tester",
    isActive: true,
    skills: ["Postman", "API Testing"],
  },
];

function myFunction({ age }) {
  return age > 18 ? "Ok" : "Low";
}

const result = Map.groupBy(userDatabase, myFunction);
console.log(result);

const okUser = result
  .get("Ok")
  .map(
    (user) => "Name" + ": " + user.name + " <br>" + "Age " + user.age + "<br>",
  )
  .join(" ");

console.log(typeof result);
document.getElementById("demo2").innerHTML = okUser;

//?-------------------------

let myMap = new WeakMap();

let myObj = { fName: "Arif", lName: "Ariyan" };

myMap.set(myObj, "Playr");
// myObj = null;
console.log(myMap.get(myObj));

let text3 = "";

// Create a WeakMap to store visit counts
let visitorCount = new WeakMap();

// Create Visitor Objects
const Arif = { name: "Arif Ariyan", age: 20 };
const Rayhan = { name: "Abu Rayhan", age: 29 };
const Sharif = { name: "Sharif Muhammmad", age: 24 };
const Mohib = { name: "Mohib Bullah Muas", age: 16 };
const Sumaiya = { name: "Sumaiya Khatun", age: 22 };

// Track visits
track(Arif);
track(Rayhan);
track(Arif);
track(Arif);
track(Sharif);

// Function to track visitors
function track(visitor) {
  let count = visitorCount.get(visitor) || 0;
  count++;
  visitorCount.set(visitor, count);
  text3 +=
    visitor.name +
    ", age " +
    visitor.age +
    ", has visited " +
    count +
    " time(s).<br>";
}
console.log(visitorCount);

document.getElementById("demo3").innerHTML = text3;

//!---

const myMap2 = new WeakMap();

class User {
  constructor(name) {
    myMap2.set(this, { screet: "Hidden Data" });
    this.name = name;
  }
  getScreat() {
    return myMap2.get(this).screet;
  }
}

const user1 = new User("Arif");
const user2 = new User("Sharif");
console.log(user1.getScreat());
console.log(user2.getScreat());
