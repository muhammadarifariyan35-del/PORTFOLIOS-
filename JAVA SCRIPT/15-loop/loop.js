// //? loop


// //! ------for loop------------


// let car = ['b m w', 'v o l v o', 't o y o t e', 'f o r d ', 't e s l a', 'h e l l o']

// car.push('a')
// console.log(car[0]);

// for( let i = 0;   i < car.length;  i++){
// console.log(car[i]);
// }


// let animal = ['hati', 'chagol', 'mohis']
// animal.push('phatha')
// for(let a = 0; a < animal.length; a++ ){
// console.log(animal[a]);
// }


// //!----for in loop------------

// let person = {
//     name: 'arif',
//     age: 20,
//     country: 'Bangladesh',
// }

// for( let p in person){
//     let Capletter = p.charAt(0).toUpperCase() + p.slice(1)
//     console.log(Capletter+ ': ' + person[p] );
// }



// //!-----for each method----------


// car.forEach(function(i){
// console.log(i);
// })



// //!------for of --------------

// for(let n of car){
//     console.log(n);
// }



// //! ------while loop ------
// let num = 7;
// while (num < 10 ){
// console.log(num);
// num++;
// }








//! Get user input defauclt


// function guessTheNumber(difficulty){

//   let randomNumber;
//   let attemps = 0;
//   let maxAttemps;
//   let range;


//   switch(difficulty){
//     case 'easy':
//       range = 10;
//       maxAttemps = 5;
//       randomNumber = Math.ceil(Math.random() * 10);
//       console.log(randomNumber);
//     break;
//     case 'medium':
//       range = 100;
//       maxAttemps = 10;
//       randomNumber = Math.ceil(Math.random() * 100); 
//       console.log(randomNumber);
//     break;
//     case 'hard':
//       range = 1000;
//       maxAttemps = 15;
//       randomNumber = Math.ceil(Math.random() * 1000); 
//       console.log(randomNumber);
//     break;
//     default:
//     console.error('invalid difficulty level choose ("easy", "medium","hard")');  
//   }

//   while(attemps < maxAttemps){
//     let guess = parseInt(prompt(`guess a number between 1 and ${range}(inclusive) | you have ${maxAttemps -attemps } attemps left` ));
//     attemps ++;

//     if(guess === randomNumber){
//       console.log(`congratulations! your number ${guess} is right|`, 'you guess the number in', attemps, 'attemps');
//       break;
//     }else if(guess > randomNumber){
//       console.log(`your number ${guess} is too heigh! try again`);
//     }else if(guess < randomNumber){
//       console.log(`your number ${guess} is too low! try again`);
//     }

//   }
  
//  if (maxAttemps === attemps){
//   console.log(`sorry you number was`, randomNumber);
//  }
// }

// let difficulty = prompt('choose difficulty  (easy, medium, hard)').toLowerCase();



// guessTheNumber(difficulty)
