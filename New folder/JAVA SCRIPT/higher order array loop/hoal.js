



const fruits = ['apple', 'banana', 'mango','orange']

for(let fru = 0; fru < fruits.length; fru++){
    console.log(fruits[fru]);
}





for(const fru of fruits){
    console.log(fru);
};




const myName = 'arifariyan';
for(const name of myName){
    console.log(`my name is ${name}`);
}




const map = new Map([
    ['bn', 'bangladesh'],
    ['in', 'india'],
    ['us', 'america'],
    ['np', 'nepal']
])

map.set('vu', 'vutan')

for (const [key, value] of map) {
 console.log(key , ':' , value);   
}






const myCountry = {
    bn: 'bangladesh',
    in: 'india',
    us: 'america',
    np: 'nepal'
}

for (const key in myCountry) {
    console.log(`${key} ==>> ${myCountry[key]}`);
}





for (const keys of Object.keys(myCountry)) {
    console.log(keys);
}






const yourFruits = ['apple', 'banana', 'mango','orange']

for (const key in yourFruits) {
    console.log(yourFruits[key]);
}




fruits.forEach(function (i){
    console.log(i);
})



