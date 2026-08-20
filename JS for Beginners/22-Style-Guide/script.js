let firstName = "",
  lastName = "",
  price = 0,
  discount = 0,
  fullPrice = 0;

firstName = "Arif";
lastName = "Ariyan";

console.log(firstName, lastName);

price = 1000;
discount = 0.15;

fullPrice = price - price * discount;

console.log(fullPrice);

let myArray = [];
let myObject = {};

var carName = "Volvo";
var carName;
console.log(carName);

let bikeNmae = "Honda";
// let bikeNmae; This won't work

let car = { type: "Fiat", model: "500", color: "whit" };
car = "Fiat";
console.log(car);

const car2 = { type: "Fiat", model: "500", color: "whit" };
// car2 = "fiat" This won't work
console.log(car2);

// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use {} instead of new Object()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
// Use function (){} instead of new Function()

let day = 0;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}
console.log(day);

let x = "Arif";
let x2 = new String("Ariyan");
console.log(x === x2);

let x3 = new String("Arif");
let x4 = new String("Ariyan");
console.log(x3 == x4);
console.log(x3[1]);
console.log(typeof x4);


