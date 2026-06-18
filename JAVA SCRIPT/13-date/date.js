// java date

const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString('default', {weekday: 'long'} ));

let upDate = new Date(2025,9,12,10.26,26,0);
console.log(upDate);

let uspDate = new Date('01-15-2005');
console.log(uspDate);


let myTime = Date.now();
console.log(myTime);


/*let yourTime = Date.now();
function simpleTask() {
   for (let step = 0; step < 1000 + 1; step++){
    console.log('walkin id to one step', step);
   } 
}
let strarTime = Date.now()
simpleTask()
let endTime = Date.now()
console.log(`this task took ${endTime - strarTime} millisecond to complete` ); */

console.log(Math.floor(myTime/1000/60/60/24/365));



console.log(myDate.getDay());