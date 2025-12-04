// number



const y = BigInt(900000)
const x = 0.6
const z = 0.7
const l = (x + z).toFixed(2);
//console.log(new Number(l));
//console.log((x * 10 + z * 10)/10);



const a = 20
const b = 10
const c = 30
const d = 'java'
const e = c - d;

//console.log(a + b + l);
//console.log(a + b + l + c);
//console.log(l + a + b + c);
//console.log(c * l);

//console.log(e);




let num = 2;
let value = "";
while (num != Infinity){
    num = num * num;
    value = value + num + '<br>';
}
document.getElementById('title').innerHTML = value



//console.log(c.toString(3));



const g = 300
const h = new Number(300)
const i = 9.37864376
//console.log(g==h);
//console.log(g===h);

//     no no      console.log(i.toPrecision(3));
//console.log(i.toFixed(2));



let newNum = Number.EPSILON
newNum = Number.MAX_VALUE
newNum = Number.MIN_VALUE
newNum = Number.POSITIVE_INFINITY
newNum = Number.NEGATIVE_INFINITY
console.log(newNum);