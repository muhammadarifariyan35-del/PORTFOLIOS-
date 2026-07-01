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
