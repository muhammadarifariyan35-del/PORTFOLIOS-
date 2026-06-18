let age = 20;
let country = "USA";
let text = "you are not allowed to drive";

if (country === "USA") {
  if (age >= 18) {
    text = "you are allowed to drive";
  }
}

if (country === "USA" && age >= 18) {
  text = "you are okey";
}

document.getElementById("demo").innerHTML = text;

let hour = "AM";

if (hour === "AM") {
  console.log("Goog morning");
} else if (hour === "PM") {
  console.log("Good evening");
} else {
  console.error("You didn't set your time AM/PM");
}

let random = Math.ceil(Math.random() * 100);
let resutl = random >= 50 ? "upper" : "lowwer";
console.log(resutl);

let date = new Date().getDay() + Math.ceil(Math.random() * 9);
let day;
switch (date) {
  case 0:
    day = "sunday";
    break;
  case 1:
  case 4:
  case 8:
  case 9:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 7:
    day = "thrusday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saterday";
    break;
  default:
    day = "you are wrong";
}
console.log(date);
console.log(day);

document.getElementById("test").innerHTML = Boolean(-0);

document.getElementById("test2").innerHTML = 54 > 5;
