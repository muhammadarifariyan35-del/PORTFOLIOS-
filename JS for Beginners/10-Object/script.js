const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
console.log(`Car ${Object.keys(car)[0]} is: ${car.type}`);
console.table(car);

const person = {
  firstName: "Arif",
  lastName: "Ariyan",
  age: 20,
  eyeColor: "blue",
  fullname() {
    return this.firstName + " " + this.lastName;
  },
};
person.has = "New Car";
delete person.has;
person.had = "A Old Car";
delete person["had"];
console.table(person);

const person2 = {};
person2.firstName = "israt jahan";
person2.lastName = "Jui";
person2.age = 22;
person2.eyeColor = "black";
console.table(person2);

const person3 = new Object({
  firstName: "arif",
  lastName: "Ariyan",
  age: 20,
  eyeColor: "blue",
});
console.table(person3);

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.fullname());
//*-------------------------

let pp = person["firstName"] + " " + person.age;
console.log(pp);

person2.lastName = "afra";

let n1 = "firstName";
let n2 = "lastName";
let name = person[n1] + " + " + person2[n2];
console.log(name);

console.log("firstName" in person);

const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
  myBike: {
    bike1: "honda",
    bike2: "motor",
  },
};
console.log(myObj["myCars"]["car2"]);
console.log(myObj.myBike.bike2);

//!------------------------------------

const person4 = {
  firstName: "Arif",
  lastName: "Ariyan",
  age: 50,
  fullName() {
    return this.firstName + " " + this.lastName;
  },
  id: 9876,
  getId() {
    return this.id;
  },
};
console.log(person4.fullName());
console.log(person4.getId());

person4.getAge = function () {
  return this.age;
};
console.log(person4.getAge());

person4.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
console.log(person4.name());

const person5 = {
  name: "Najmul Hasan Fardin",
  hello: function () {
    return "Hello" + " " + this.name;
  },
};

const person6 = {
  name: "Muhammad Ali Jim",
  hello: function () {
    return "Hello" + " " + this.name;
  },
};

document.getElementById("demo").innerHTML = person5.hello();

var y = "arif";

let x = this.y.toUpperCase();
console.log(x);

var nam2 = "arif";
function myFunction() {
  return this.nam2;
}
console.log(myFunction());
//?----------------------------

const person7 = {
  name: "Ariyan",
  Age: 20,
  country: "Bangladesh",
};
// alert(person7.get())

let text = " ";
for (let x in person7) {
  text += (x + " : " + person7[x] + "<hr> ").toUpperCase();
}
console.log(text);

let result2 = JSON.stringify(person7);
console.log(result2);
document.getElementById("demo2").innerHTML = text;

const myArray = Object.values(person7);
console.log(myArray.toString());

let text2 = "";
for (let [key, value] of Object.entries(person7)) {
  text2 += key + " : " + value + "<pre>";
}
document.getElementById("demo3").innerHTML = text2;

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
Person.prototype.changeName = function (name) {
  this.firstName = name;
};

let per1 = new Person("Arif", "Ariyan", 20, "Black");
let per2 = new Person("Israt Jahan", "Jui", 22, "Blue");
per1.changeName("jim");

console.log(per2.fullName());
console.log(per1);

let myMap = new Map();
myMap.set("id", "200");
myMap.set("fullName", "Ali Hasan Usama");
console.log(myMap);

let mySet = new Set([1, 1, 3, 5, 4, 2, 8]);
console.log(mySet);

console.log(new Date().toDateString());

let myObj2 = new Object();
myObj2.name = "Arif";
myObj2.homeTown = "Dhaka";
console.log(myObj2);
