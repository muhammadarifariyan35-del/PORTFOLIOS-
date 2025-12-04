//!    java script math ---------------------



//?      random
console.log(Math.random());
console.log(Math.random().toFixed(2));
console.log(Math.random().toFixed(2) * 20);
console.log(Math.random().toFixed(2) * 20 + 1);
console.log(Math.floor((Math.random().toFixed(2) * 100 + 1)));



//?     round
let num = 84.7;
console.log(Math.round(num));



//?     ceil
let number = 34.00000000000001
console.log(Math.ceil(number));



//?     floor
let nmb = 64.9999339988989
console.log(Math.floor(nmb));



//?    squre
let num1 = 32.9438
let num2 =  2
console.log(Math.pow(9,2));



//?    root
console.log(Math.sqrt(10000));
// ---------abs-------------
console.log(Math.abs(-20));



//?     min
console.log(Math.min(1,2,3,4,5,639,654,676,0,0.2));



//?     max
console.log(Math.max(34,543,454,53434,343534,34343534,34343));



//?     PI
console.log(Math.PI);



//?     sin / cos
console.log(Math.sin((45 * Math.PI) / 180));
console.log(Math.cos((45 * Math.PI) / 180));



//?      ludo
let upperValue = 6
let lowerValue = 1
let result = Math.ceil(Math.random() * upperValue);
console.log(result);



function roolDice(){
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let imageSource = randomNumber + '.png'; 
    document.getElementById('ludo').src = imageSource
}
