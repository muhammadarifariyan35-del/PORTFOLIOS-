let arif = "jui";
console.log(arif);

let x = 3;
let y = 5;
console.log(x % y);

let text1 = "the day";
text1 += " very";
text1 += " nice";

console.log(text1);

let nu = 33;
let ni = 98;
nu %= ni;
console.log(nu);

console.log(nu <= ni);

let text = "G";
let text2 = "B";
let result = text > text2;
console.log(result);

console.log(false !== true);

let num = 10;
num++;
num++;
num--;
console.log(num);

let sm = 5 + (((15 / 3) * 2 ** 3) % 7) - (4 + 2);
console.log(sm);

let nnn = "166 * 8 / 0.6666666666666667";

let fff = 5;
console.log(Math.pow(7));

console.log(100 + 50 * 3);

let zz;
zz ??= 10;

console.log(zz);

let text4 = [12, 33, 44, 55];

let min = Math.min(...text4);
let max = Math.max(...text4);

console.log(min, max);

let ip = 5;
console.log(ip === "5");

let age = 20;
let res = age >= 18 ? "adult" : "under age";
console.log(res);

console.log("12" < "2");

name = String(name);
if (isNaN(name)) {
  console.log("is not a ");
}

function myFunction() {
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "input is not a number";
  } else {
    voteable = age < 18 ? "Too young" : "Old enough";
  }
  let result = (document.getElementById("demo").innerHTML =
    voteable + "To vote");

  console.log(result);
}

let kkk;
kkk ??= 25;
console.log(kkk);

let text5 = "my name is Arif";
let t = [...text5];
console.log(t[4]);

console.log(23 == "23");

let agge = 15;
if (agge >= 18) {
  console.log("you are adult");
} else if (agge <= 12) {
  console.log("your are a baby");
} else {
  console.log("you are under age");
}

let rrr = "rayhan"

switch (rrr) {
  case "arif":
    console.log("you are arif");
    break;
  case "rayhan":
    console.log("you are rayhan");
    break;
  default:
    console.log("you are out of database");
}

