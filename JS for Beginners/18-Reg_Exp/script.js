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
console.log(banglaText.match(/[\u0990-\u09ff]+/gu));

//!  Regular Expression Assertions

//* \B (Non-Word Boundary)
let text14 = "He is a footballplayer and he plays football matches";
console.log(text14.match(/\Bootball\B/g));

//* (?!...) (Negative Lookahead)
const items = "100USD, 100Taka, 100Euro";
console.log(items.match(/100(?!USD)/g));

//* (?<!...) (Negative Lookbehind)
const list = "$100, ৳500, €300";
console.log(list.match(/\b(?<!\$)\d+/g));

//!  Regular Expression Groups

//* Capturing Group: (x)
const info = "Arif: 25, class: 09";
const regex3 = /(\w+): (\d+), (\w+: \d+)/;
const result2 = info.match(regex3);
console.log(result2[0]);
console.log(result2[1]);
console.log(result2[2]);
console.log(result2[3]);

//* Named Capturing Group: (?<name>x)
const dateStr = "2026-07-04";
const regex4 = /(?<Year>\d+)-(?<Month>\d+)-(?<Day>\d+)/;
const result3 = regex4.exec(dateStr);
console.log(result3.groups.Year);
console.log(result3.groups.Month);
console.log(result3.groups.Day);
console.log(result3.groups);

//* Scoped Flags: (?flag:x) এবং (?flag-flag:x) (Modern ES2024+)
console.log(/^(?i:arif) Loves (?-i:coding)$/.test("arif Loves coding"));
console.log(/^(?i:Sharif) Loves (?i:Coding$)/.test("Sharif Loves coding"));
console.log(" ");
//!  RegExp Quantifiers

//* x+ (কমপক্ষে ১ বার বা তার বেশি)
const pattern2 = /lo+ve/;
console.log(pattern2.test("love"));
console.log(pattern2.test("looove"));
console.log(pattern2.test("lve"));
console.log(" ");

//* x* (০ বার বা তার বেশি)
const pattern3 = /lo*ve/;
console.log(pattern3.test("love"));
console.log(pattern3.test("looove"));
console.log(pattern3.test("lve"));
console.log(" ");

//* x? (০ বার অথবা ১ বার)
const pattern4 = /lo?ve/;
console.log(pattern4.test("love"));
console.log(pattern4.test("lve"));
console.log(pattern4.test("looove"));
console.log(" ");

//* নির্দিষ্ট সংখ্যা গোনার কোয়ান্টিফায়ার ({...})
const pattern5 = /^\d{4}$/;
console.log(pattern5.test(6542));
console.log(pattern5.test(66546));
console.log(" ");

//* x{n,m} (কমপক্ষে n বার থেকে সর্বোচ্চ m বার)
const pattern6 = /^[a-z]{4,8}$/i;
console.log(pattern6.test("Arif"));
console.log(pattern6.test("Computer"));
console.log(pattern6.test("Js"));
console.log(" ");

//* x{n,} (কমপক্ষে n বার, ওপরে আনলিমিটেড)
const pattern7 = /(\w+\s\w+){3,}/;
console.log(pattern7.test("my name is arif"));
console.log(pattern7.test("Amar sonar bangla ami tumay valobasi."));
console.log(pattern7.test("Arif Ariyan"));
console.log(" ");

//!  Problem solving

//*  ইউজারের ইউজারনেম ভ্যালিডেশন
const usernamPattern = /^[a-z][a-z0-9]{3,9}$/;
console.log(usernamPattern.test("arif973"));
console.log(usernamPattern.test("1arif"));
console.log(usernamPattern.test("ari"));
console.log(usernamPattern.test("arifariyan"));

//* টাকা বা কারেন্সি এক্সট্রাক্ট করা
const text15 = "বাজার খরচ: চাল ৳১২০০, ডাল ৳৩০০, তেল $১৫।";
const takaPattern = /(?<=৳)[০-৯]+/g;
console.log(text15.match(takaPattern));

//* পাসওয়ার্ডের স্ট্রংনেস চেক করা
const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{d,}/;
console.log(passwordPattern.test("Arif2026"));
console.log(passwordPattern.test("arif2026"));

//* হ্যাশট্যাগ (#) এক্সট্রাক্ট করা
const post = "Loving the weather today! #JS #coding2026 #learning_regex #fun";
const hashtagPattern = /#\S+/g;
console.log(post.match(hashtagPattern));

//* ইমেইল থেকে ডোমেন নেম আলাদা করা
const emailPattern = /@([\w\.-]+)/;
const email1 = "arif.2026@gmail.com";
const email2 = "test_user@yahoo.co.uk";
const result4 = email2.match(emailPattern);
console.log(result4[1]);

//* HTML ট্যাগ রিমুভ করা
const htmlText = "<h1>Hello World</h1><p> Welcome to 2026.</p>";
const htmlPattern = /<[^>]+>/g;
const cleanText = htmlText.replace(htmlPattern, "");
console.log(cleanText);

//* সোশ্যাল মিডিয়ার "Mention" বা @username ধরা
const pattern8 = /\b @\w+/g;
const text16 = "Hi @arif99, send me an email at arif@gmail.com";
console.log(text16.match(pattern8));

//* ইউটিউব ভিডিওর আইডি (YouTube Video ID) এক্সট্রাক্ট করা
const pattern9 = /v=([\w+]{11})/;
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=shared";
const result5 = url.match(pattern9);
console.log(result5[1]);

//* ক্রেডিট কার্ডের ড্যাশ বা স্পেস ক্লিন করা
const cleanPattern = /[\s-]/g;
const cardNumber = "4111-2222 3333-4444";
const pureNumber = cardNumber.replace(cleanPattern, "");
console.log(pureNumber);

//* প্রোডাক্ট কোড ভ্যালিডেশন (Product ID Validator)
const productPattern = /^PRD-\d{4}$/;
console.log(productPattern.test("PRD-1234"));
console.log(productPattern.test("prd-1234"));
console.log(productPattern.test("PRD-9949"));
console.log(productPattern.test("PRD-12345"));

//* ডাবল স্পেস ক্লিন করা (Chat App Text Cleaner)
const spacePattern = /\s{2,}/g;
const userInput = "আই    লাভ   জাভাস্ক্রিপ্ট    এবং  রেগুলার এক্সপ্রেশন।";
const cleanInput = userInput.replace(spacePattern, " ");
console.log(cleanInput);

//* ফাইন্যান্সিয়াল ডেটা থেকে দশমিকের সংখ্যা বের করা (Lookahead Challenge)
const text17 =
  "শার্টের দাম $25.99, প্যান্টের দাম ৳১২০০.৫০, কিন্তু জুতার দাম ৳৫০০০।";
const pricePattern = /[\d০-৯]+\.[\d০-৯]{2}/g;
console.log(text17.match(pricePattern));

