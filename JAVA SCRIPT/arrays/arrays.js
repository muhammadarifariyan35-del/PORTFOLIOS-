//  !   java script arrays



const language = new Array ('html','css','javascript','php', true, 53,'html','css','javascript','php', true, 53);

language[5] = BigInt(9847565)
language[12] = 'arif'
language[13] = 'sharif'

// delete last item
language.pop()
// add last item
language.push('angulat.js')
// add first
language.unshift('basik komputing')
//delete first item
language.shift



//console.log(language.at(2));
console.log(language);
//console.log(language.toString());
//console.log(language.join('|   '));
//console.log(language[language.length-1]);


const person = []
   person['firstName'] = 'arif'
   person['lastName'] = 'ariyan'
   person[4] = 35
//   console.log(person.length);
//  console.log(person);
// console.log(person[4]);



 //const num = [20]
 const num =  new Array(20,21,22);
    
//    console.log(num);



const x = [1,2,3,4,5,6,7,8,9];
const y = [1,2,3,4,5,6,7,8,9];
const p = [10,20,30,40,50];
const z = x.concat(y,p);
// console.log(z);




const a = [[1,2,3], [4,5,6], [7,8,9]];

//console.log(a.flat());



language.splice(3,0, 'info', 'info2')
language.splice(2, 4)
console.log(language);