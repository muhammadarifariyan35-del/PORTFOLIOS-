



/// filter

const fruits = ['apple', 'Banana', 'mango', 'graps']

fruits.forEach(i => console.log(i))
///------






/// কেন েএকটার প্রথম অক্ষর ছোট করতে চাইলে।
const frutcapb = fruits.filter(k => k.toLowerCase().startsWith('a'))

console.log(frutcapb);





///------


const fruitsLenth5 = fruits.filter(k =>  k.length === 6)

console.log(fruitsLenth5);





///-------


const fruitsStartG = fruits.filter(i => i.toUpperCase().includes('G'))
console.log(fruitsStartG);





///------


const number = [2,2,3,4,5,6,7,7,8,9,3,2,5,40,7,50,2,70, 50]

///-----


const big5 = number.filter(num =>{ return num >= 5})
console.log(big5);


///-------map


const myNum = number.map(m => m + 10).map(n => n * 7 ).filter(k => k > 50)
console.log(myNum);


///--------

const mytotal = number.reduce((a,b) => a + b, 18);
console.log(mytotal);









