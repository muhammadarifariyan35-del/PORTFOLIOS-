const d = new Date();
console.log(d);

const da = new Date("2026-10-10");
console.log(da);

const dat = new Date("Octobor 13, 2025 11:13:00");
console.log(dat);

const date = new Date(2026, 11, 10, 5, 30, "00", 60);
console.log(date);

const prev = new Date(1299, 11, 24);
console.log(prev);

const milisecond = new Date(1000000000000);
console.log(milisecond);

const minousMiliSecond = new Date(-1000000000000000);
console.log(minousMiliSecond);

const date2 = new Date();
console.log(date2.toString());
console.log(date2.toDateString());
console.log(date2.toUTCString());
console.log(date2.toISOString());

//?-----------------------------------------------------
console.log(new Date("2015-03"));
console.log(new Date("2027"));
console.log(new Date("2026-05-12T08:46:00+06:00"));
console.log(new Date("05/12/2026"));

let date3 = Date.parse("12/25/2023");
console.log(date3);
console.log(new Date(date3));

console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
console.log(date2.getDay());
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());
console.log(date2.getMilliseconds());
console.log(date2.getTime());

//?--------------------------------------------------