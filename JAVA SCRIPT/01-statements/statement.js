// java script conditional statements


//!    if / else if / else------

let age = 4

if (age > 40){
    console.log('You are old');
 
} else if (age > 18){
    console.log(' WOW! You are adult');
}
 

else {
    console.log('uf! sorry, You are not adult');
}

//!    switch------


let category = 'truk';
let carType;

switch (category){
    case 'car':
        carType = 'This is a car';
        break;
    case 'motor bike':
        carType = 'This  a motor bike';
        break;
    case 'motor_car':
        carType = 'This is my motor car';
        break;
    case 'truk':
        carType = 'This is my truk';
        break;
    default:
        carType = 'unknown';  
}
console.log(carType);