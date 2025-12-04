//  java memory

let number1 = 33

let number2 = number1
number2 = 22

console.log(number1);
console.log(number2);

//?--------------------------------


let student = {
    name: 'arif',
    Age: 30,
}



let people = student;


people.name = 'jui'
people.Age = 10;

console.log(student);
console.log(people);

//?-------------------------------


let car = ['bmw', 'audi'];
let newCar = car

newCar[0] = 'cat'
newCar[1] = 'tyota'
console.log(car);
console.log(newCar);



