const car = ["BMW", "volvo", "kidke", "totota", "Rich man"];
let text = "";
for (let i = 0; i < car.length; i++) {
  text += `<h1> ${car[i]} </h1>`;
}

for (let i = 0; i < 10; i++) {
  // console.log(i)
}

let i = 0;

while (i < 20) {
  text += "the number is" + "  " + i + "<br>";
  i++;
}

let y = 20;

do {
  text += "the number is" + " " + y + "<br>";
  //   console.log(y);
  y++;
} while (y <= 40);

// document.getElementById("demo").innerHTML = text;

const fruits = [
  "apple",
  "orange",
  "malta",
  "apple",
  "orange",
  "malta",
  "apple",
  "orange",
  "malta",
];

let z = 0;
for (; z < fruits.length; ) {
  // console.log(fruits[z]);
  z++;
}

let arif,
  sharif = "rayhan";
console.log(Boolean(arif));

const phone = ["infinx", "tecno", " ", "motorola", "apple", "samsung"];
let p = 0;
let test = "";
while (phone[p]) {
  test += "The name of the phone is " + phone[p] + "<br>";
  p++;
}

for (let k = 0; k < 10; k++) {
  if (k === 3) {
    break;
  }
  test += "the number is " + k + "<br>";
}

document.getElementById("test").innerHTML = test;

loop1: for (let j = 0; j < 10; j++) {
  loop2: for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break loop2;
    }
    // console.log(i, j);
  }
  // console.log(j);
}

const things = ["tabe", "apple", "chait"];
list: {
  console.log("hello");
  console.log(things[1]);
  break list;
  console.log(things[2]);
}
