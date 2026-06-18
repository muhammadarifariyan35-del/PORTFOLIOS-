let firstName = "arif ariyan";
console.log(firstName);

let number = 343;
let weight = 43.7;
console.log(number);
console.log(weight);

let bigNumber = 93498396593947903459837n;
let hugeNumber = BigInt(9837946345454594639483700349);

const num = { bigNumber, hugeNumber };

console.table(num);

let t = true;
let f = false;
console.log(t, f);

const date = new Date("2026-04-15");
console.log(date);

let undeF;
console.log(undeF);

let n = null;
console.log(n);

let id = Symbol("userId");

const user = {
  name: "arif ariyan",
  [id]: "12342kjlhfg",
};
console.log(user[id]);
console.log();

console.log(typeof "");
console.log(typeof "arif k ");
console.log(typeof 0);
console.log(typeof 44.3);
console.log(typeof (3 + 3));

let ans = "he's my new friend";
ans = 'my name is "arif"';
console.log(ans);

let nn = 1e2
console.log(nn);

let mm = 22e-2
console.log(mm);

console.log(4 < 3 );