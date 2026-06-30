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

