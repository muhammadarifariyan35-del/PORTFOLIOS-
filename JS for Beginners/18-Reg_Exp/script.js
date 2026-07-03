let text = "Visit W3Schools";
console.log(text.search("Schools"));
console.log(text.search(/school/i));
console.log(text.match(/W3Schools/));

let text2 = "Visit Microsoft";
console.log(text2.replace(/microsoft/i, "Meta company"));
console.log(text2.search(/it/));

let text3 = "Black, white, red, green, blue, yellow.";
console.log(text3.match(/red|green|blue|arif|yellow/g));

let text4 = "My OTP is 5841. Code_Name: Arif! #3765346536";
console.log(text4.match(/\d+/g));
console.log(text4.match(/\w+/g));
console.log(text4.match(/\W+/g));
console.log(text4.match(/\s/g));

const text5 = "l lo loo looo";
console.log(text5.match(/lo+/g));
console.log(text5.match(/lo*/g));
console.log(text5.match(/lo?/g));

const text6 = "W3Schools is great";
const text7 = "I love W3Schools";
console.log(/^w3schools/i.test(text6));
console.log(/^w3schools/i.test(text7));
console.log(/w3schools$/i.test(text7));

const line = "He is a footballplayer and he plays football matches";
console.log(line.match(/\bfootball\b/gi));

const price1 = "100 USD";
const price2 = "100 Taka";
console.log(/\d+(?=\susd)/gi.test(price1));
console.log(/\d+(?=\sTaka)/gi.test(price2));

const money1 = "$100";
const money2 = "৳100";
console.log(/(?<=\$)\d+/gi.test(money1));
console.log(/(?<=\$)\d+/gi.test(money2));

const text8 = "Arif loves coding in JavaScript";
console.log(text8.match(/[aio]/gi));

const text9 = "Hello 2026 World! #🔥";
console.log(text9.match(/[a-z0-9]/gi));

//!  RegExp Flags

//* /m ফ্ল্যাগের কামাল (Multiline Matching)
const poem = "Love JavaScript\nLove Coding\nLove learning";
console.log(poem);
console.log(poem.match(/^Love/g));
console.log(poem.match(/^Love/gm));

//* /d ফ্ল্যাগের কামাল (Indices Match - New 2022)
let text10 = "Love JavaScript Love Coding Love learning";
let regex = /love/dgi;
let result;
while ((result = regex.exec(text10)) !== null) {
  console.log(result.indices[0]);
}

//* /v ফ্ল্যাগের কামাল (Advanced Unicode - New 2025/2026)
const emojis = "🧜‍♀️ 🦖 🍎";
const animalPattern = /[\p{RGI_Emoji}]/v;
console.log(emojis.match(animalPattern));

//* /y ফ্ল্যাগের কামাল (Sticky Search)
let text11 = "ha-ha-ha";
console.log(/ha/y.exec(text11));

//!  RegExp Character Classes

//* RegExp Character Classes
const text12 = "Hello 2026 World";
const pattern = /\d+/;
console.log(pattern.test(text12));
console.log(pattern.exec(text12));

//* match() বনাম matchAll() (String-এর মেথড)
const bio = "ID: 101 and ID: 102";
const regex2 = /ID: \d+/g;
console.log(bio.match(regex2));
for (let match of bio.matchAll(regex2)) {
  console.log(match[0] + " " + match.index);
}

//* split(regex) এর একটি জাদুকরী ট্রিক
const dirtyList = "Apple,Orange;Mango ,...Banana";
console.log(dirtyList.split(/[,;:.\s\d]+/));

//!  RegExp Meta Characters

//*  \xhh (Hexadecimal - হেক্সাডেসিমেল কোড)
const text13 = "Arif loves Coding.";
console.log(text13.match(/\x73/g));

//* \uhhhh (Unicode - ইউনিকোড সিস্টেম)
const banglaText = "আমার নাম আরিফ। 祃";
console.log(banglaText.match(/\u7943/g));
console.log(banglaText.match(/[\u0990-\u09ff]+/ug));

