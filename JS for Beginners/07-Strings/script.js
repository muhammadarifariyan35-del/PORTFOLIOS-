let alphabet = `abcdefg7890ABCDEhijklmnostuv$%^wx456FGHMNpqrOPUVWXYZ!@#|&*(yz123?><][{}]QRST)_+IJKL`;

function createPassword(lenght) {
  let password = "";

  for (let i = 0; i < lenght; i++) {
    let random = Math.floor(Math.random() * alphabet.length);

    password += alphabet[random];
  }
  return password;
}
console.log(createPassword(4));

let text = "arif \v ariyan";
console.log(text);

let text2 = `my name is
arif 
ariyan `;
console.log(text2);

let text3 = new String("arif");
console.log(text3);

let text4 = new String("arif");
console.log(text4 === text3);
console.log(typeof text3, typeof text4);

let y = `arif ${text},${text2}ariyan`;
console.log(y);

let price = 10;
let VAT = 0.25;
let total = `total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

let header = "template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html;

let fName = "istar_jahan_jui";
console.log(fName.at(-3));
console.log(fName.charAt(3));
console.log(fName.charCodeAt(4));
console.log(fName.codePointAt(2));

let a = "this";
let b = "is a";
let c = "most";
let d = "beautiful";
let e = "flower";
let f = a.concat(" ", b, " ", c, " ", d, " ", e);
console.log(f);

let i = "all string methods return a new string.";
console.log(i.slice(6, 16));
console.log(i.substring(-10, 10));
console.log(i.substr(15));
console.log(i.slice(-17, -3));

let upper = i.toUpperCase();
console.log(upper);

console.log(upper.toLocaleLowerCase());

console.log(i.isWellFormed());
console.log(i.toWellFormed());

let para = "      who is the bestperson of the country.     ";
console.log(para.trimStart());
console.log(para.trimEnd());
console.log(para.trim());

let pad = "20";
console.log(pad.padStart(10, "x"));
console.log(pad.padEnd(6, "x"));

let paragrapg = "Hello Arif ";
console.log(paragrapg.repeat(100));

let replace = "I like apple, apple is my favaroute";
console.log(replace.replace(/Apple/i, "banana"));
console.log(replace.replace(/Apple/gi, "banana"));
console.log(replace.replaceAll("apple", "komola"));

let letter = "a,b,c,d,  e,f||g,h";
console.log(letter.split("|"));

let split = "arif, rayhan, sharif";
let spl = split.split(", ");
console.log(spl);

let indexof = "please locate where 'locate' occurs! ";
console.log(indexof.lastIndexOf("occurs"));
console.log(indexof.indexOf("locate", 2));

console.log(indexof.search(/where/));

let ain = "The rain in SPAIN stays mainly in the plain";
console.log(ain.match(/ain/gi));
console.log(ain.match(/ain/));

let match = ain.matchAll("ain");
console.log(match.next().value);

for (let ma of match) {
  console.log(ma);
}

let ain2 = [...ain.matchAll(/ain/gi)];
console.log(ain2);

let include =
  "common example, used in design to test layouts without distracting with readable content. It acts as a standard";

console.log(include.includes("cting"));

console.log(include.startsWith("example", 7));
console.log(include.endsWith("used", 20));

//! ------------------------------------------------------------

let old = "arif arIyan Is a bed person";
let emogi = "😂";
let ntrim = "  arif  ariyan    ";
let npad = "10";
let spad = "hello";

console.log(old.length);
console.log(old.charAt(6));
console.log(old.charCodeAt(2));
console.log(old.codePointAt());

console.log(emogi.charCodeAt(0));
console.log(emogi.codePointAt(0));

console.log(old.concat(" ", emogi));

console.log(old.at(-1));
console.log(old.charAt(-1));

console.log(old[5]);
console.log(old.slice(-10, -1));
console.log(old.substring(-3, 10));

console.log(old.toLowerCase());
console.log(old.toUpperCase());

console.log(ntrim.trim());
console.log(ntrim.trimStart());
console.log(ntrim.trimEnd());

console.log(npad.padStart(10, 0));
console.log(npad.padEnd(10, 0));

console.log(spad.padStart(10, "x"));
console.log(spad.padEnd(20, 1));

console.log(old.repeat(2));
console.log(old.replace("bed", "good"));

console.log(old.split(" "));

//-----------

let someText =
  "used in design to test layouts without distracting with readable content. It acts as a standard placeholder, often derived from Cicero, to simulate the look of English without being legible.";

console.log(someText.indexOf("i"));
console.log(someText.lastIndexOf("being"));

console.log(someText.search(/look/gi));
console.log(someText.match(/i/));

let mm = someText.matchAll(/i/gi);
console.log([...mm]);

console.log(someText.includes("without"));

console.log(someText.startsWith("used"));
console.log(someText.startsWith("sed"));

console.log(someText.endsWith("legible."));
console.log(someText.endsWith("legible"));

