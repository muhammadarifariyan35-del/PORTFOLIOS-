let x = 3.33;
let y = 99;

x = 123e5;
y = 123e-5;

console.log(x, y);

let flot = (0.2 * 10 + 0.1 * 10) / 10;
console.log(flot);

let nu = 0.2 + 0.1;
console.log(Number(nu.toFixed(1)));

let st = 10;
let ss = 30;
let ts = "apple";
let tt = "4";
console.log(st + ss + ts);
console.log(isNaN(tt / ts));

let myNumber = 2;
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
console.log(myNumber);

console.log(2 / 0);
console.log(-2 / 0);

console.log(0xff);

console.log(typeof NaN);
console.log(typeof undefined);

let num = new Number(500);
let mum = 500;
console.log(num);
console.log(typeof num);
console.log(mum == num);

//!-----------------------------------------------

let tx = 123;
let ty = 333 + tx;
console.log(ty.toString());
console.log((984598).toString());
console.log(tx.toString(2));

let tz = 9.656;
console.log(tz.toExponential(2));
console.log(tz.toExponential(4));
console.log(tz.toExponential(6));

console.log(tz.toFixed(0));
console.log(tz.toFixed(2));
console.log(tz.toFixed(4));
console.log(Number(tz.toFixed(6)));

console.log(tz.toPrecision());
console.log(tz.toPrecision(2));
console.log(tz.toPrecision(4));
console.log(tz.toPrecision(6));

console.log(tx.valueOf());

console.log(
  Number(true),
  Number(false),
  Number("10"),
  Number("  10"),
  Number("10  "),
  Number(" 10  "),
  Number("10.33"),
  Number("10,33"),
  Number("10 33"),
  Number("John"),
);

console.log(Number(new Date("2026-04-29")));
console.log(+new Date());
console.log(Date.now());

console.log(
  parseInt("-10"),
  parseInt("-10.33"),
  parseInt("10"),
  parseInt("10.33"),
  parseInt("10 20 30"),
  parseInt("10 years"),
  parseInt("years 10"),
);

console.log(Number.isSafeInteger(33));
console.log(Number.isSafeInteger(9765384583954808));

//!-------------------------------------------------------

console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

//? ------------------------

console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
