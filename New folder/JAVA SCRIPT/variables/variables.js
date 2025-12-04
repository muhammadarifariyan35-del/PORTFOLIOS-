
//! --------STATEMENT-----------------------------------
/*
document.getElementById('ctn').innerHTML = 'hello world'

let sum = 90 + 0;
console.log(sum);

if (sum > 100){
console.log('Expenseve');
} else {
    console.log('cheep');
}


function sayHello(name){
 console.log('hello ' + name);
}
sayHello('arif')
sayHello('sharif')
sayHello ('jui')*/
//?-----------------------------------------------------



//!--------SYNTEX---------------------------------------
/*
let firsName  = 'ali'  //সিনটেক্স মানে হলো ব্যকরন।
console.log(firsName);*/
//?------------------------------------------------------



//!---------VARIABLE-------------------------------------
/*
var arif = 20;
var arif = "bangladesh"
arif =  'sharif'
console.log(arif)


{
var ariyan = 10    
    
}
console.log(ariyan);

console.log(country);
var country = "america"


let fruits = 'orange';
console.log(`${fruits} is my favourite, ${fruits} i like to eat`);
    
let a = 15;
a = 16;
{
    
    console.log(a);
}
let people = 'some one'
console.log(people);
 
const one = 'arif'
console.log(one);


var banana = 'kola'
var  banana = 'lemon'

{
    banana = "dhaka"
    
}
console.log(banana);
var angur = 'appole'
console.log(angur);

let my = 'amar'


const k = 15;
console.log(k);
{
    const l = 21;
    console.log(l);
}


const hello = {
    amar_name: 'arif ariyan',
    age: 20,
}
hello.jela = 'mymensingh';
hello.age = 32;
console.log(hello); */
//?------------------------------------------------------



//!-------OPERATOR---------------------------------------
/*
//*     -----arithmetic operator-----


let a = 55;
let b = 7;
///let c = a + b;
///let c = a - b;
///let c = a * b;
///let c = a / b;
let c = a % b;
console.log(c);


///let userInput = prompt('Enter a number');
///let number = parseInt(userInput);

///if (number % 2 === 0){
///console.log(` ${number} number  is even`);
///} else{
///    console.log(` ${number} number  is odd`);
///}

//*    ----- increement/ decrement------

let x = 10;
x = x + 1
x++;
++x

console.log(x);


let y = 20
y = y - 1;
y--;
--y

console.log(y);

//*    ---------presidence----------

/// () {} []
/// / * - + 

console.log(10 + 7 - 9 / 8 * 10);


///= 10+7-1.125*10
///= 10+7-11.25
///= 10+ -4.25
///= 5.75


///6 / 5 - 3 + 2 * 4 * 4 + 9
///= 1.2 - 3 + 2 * 4 * 4 + 9
///= 1.2 - 3 + 8 * 4 + 9
///= 1.2 - 3 + 32 + 9
///= -1.8 + 32 + 9 
///= 30.2 + 9
///= 39.2


console.log(6 / 5 - 3 + 2 * 4 * 4 + 9);



//* ------comperison operator--------

let a1 = 15;
let a2 = '10';
console.log(a1 == a2);
console.log(a1 === a2);
console.log(a1 != a2);
console.log(a1 !== a2);
console.log(a1 > a2);
console.log(a1 < a2);
console.log(a1 >= a2);
console.log(a1 <= a2);




//* -----logical operator---------

/// and
console.log(true && true);
console.log(true && false);
console.log(false && false);

///or
console.log(true || true);
console.log(false || true);
console.log(false || false);

///not
console.log(!(a1 < a2));
console.log(!(a2 < a1));
console.log(!(a2 > a1));
console.log(!(a1 > a2));

///nor  
console.log(!(true || true));
console.log(!(true || false));
console.log(!(false || true));
console.log(!(false || false));


//*    -----assingment------

let j = 20;
let k = 10;

j = j + k;
j +=k;

j = j - k;
j -=k;

j = j * k;
j *=k;

j = j / k;
j /=k;

j = j % k;
j %=k;

j = j ** k; 
j **=k
console.log(j);



//* ------ternary operator------

let t = a1 < a2 ? 'true' : 'false';


let a11 = 20
let a22 = 10

let g = a11 < a22 ? true : false;
console.log(g);


console.log(t);
console.log(typeof t );
if (a1 > a2 ) console.log('true'); else console.log('false');
*/
//?-------------------------------------------------------



//!-------DATA TYPE---------------------------------------
/*
//* ---string-----

let firstName = 'arif'
let fullName = '\'arif\' ariyan'
console.log(fullName);

let finalName = `my name is ${fullName}`
console.log(finalName);


//* ----number-------

let age = 20 + '20'
console.log(age);


let ages = .22
console.log( ages);

///------
let ag = 10;
let bg = 20;
let bgg = 15
let cg = 'arif';

console.log( bgg + bg + cg + ag);

//*  -----BigInt-----

let boyos = 30
let boyos2 = BigInt(boyos)

console.log(boyos2);

let love = 'I love you too'


//* -----boolean------

let bool = false;
console.log(typeof bool);

let ean = null;
console.log(typeof ean);


//* -----array------

let fruits = ['apple', 'banana', true, null, 39];
fruits[2]= false;
fruits[5]= 'jui';
console.log ( fruits);


//*-----object------

let studen = {
    fullName: 'arif',
    age: 34,
    dateOfBirth: '15/8/2005',

}
console.log(studen);
*/
//?-------------------------------------------------------



//! -----------FUNCTION----------------------------------
/*


//* ০১/  ফাংশন নেওয়া ওফাংশন কল করা। এই ফাংশনের মূল কাজ নেওয়া ও কল করা।
function myFunction(name = 'unknown' , age = 'unknown',){
    console.log(`hello ` + name +  ' | '  + 'i know that you are ' + age + ' years old');
}
myFunction('Arif ariyan', 20)
myFunction('Istar jahan jui', 22)
myFunction('Afra')
myFunction()

///-----------






//* ০২/ আমরা ফাংশন নিবো। কোন একটা ইভেন্ট ঘটে ফাংশন কে কল করবে। মানে আমরা নিবো কিন্তু কাজ করবে , ব্যবহারকারীর সিদ্ধান্তে।

function isSubscribed (){
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

///-----------




//* ০৩/ ফাংশন নিজে নিজে রান করবে। মানে আমাকে বা ইউসারকে কাওকেই দরকার নেই। 

(function (massage){
    console.log('I am self inviking function ' + massage);
})('hello');

///----------



//* ## ফাংশন কে স্টোর করা ভেরিয়েবলের মাধ্যমে।। 

let fuck = function(x,y){
    console.log('this is my lucky number');
    return x * y; // রিটার্ন এর পরে আর কিছু কাজ করে না।
    
};
console.log(fuck(10,20));

/// এ ক্ষেত্রে আমাকে নাম সহ লিখে দিতে হবে।
///  নাম না লিখলে হবে না। উদাহরন => (fuck(10,20))

let result = fuck(20,30)
console.log(result);

///---------

function hellos (){ 
    function newFuck (){
    let firstName = 'arif'
    console.log(firstName);
}
hellos()  

newFuck();
function newFucks (){
    let firstName = 'israt'
    console.log(firstName);
}
newFucks();

}

///---------

let numbers = [4,5,6,7]
let sqNumber = numbers.map(function(number){
  return  number * number
});
console.log(sqNumber);




//* ----array---

let fucky = (x,y) => x * y;
console.log(fucky(5,6));


//* --nssted function---

function grid(firsName){
    function sayhello(){
        alert('hello ' + firsName);
    }
    return sayhello();
}
grid('ali');

///------------
function nam(fallName){
    alert('hello ' + fallName);
};
nam('arif');
*/
//?------------------------------------------------------



//! ----------OBJECT-------------------------------------
/*
/// ওভজেক্ট সবসময় const  এ সেভ করা বেস্ট প্রেক্টিস।

//* ------littarels object--------
    let newsymb = Symbol('key1')
    
    const mobileModel = {
    /// key : value,
    brand: 'samsung',
    model: 's24 ultra',
    processor: 'sanpdragon gen 3',
    camera: [ '1200mp', '200px' , '100px'  ],
    'has Zoom Camera' : true,
    [newsymb]: 'my key 1 ',
    
    brandModel: function(){
    return `mobile brand is ${this.brand}  and mobile model is ${this.model}` 
    },
    battray: {
        mah: 5000,
        mbh: 600,
        matariyal:{
            lobon: 'sada',
            chini: 'beshi sada',
        },
    },
};

    console.log(mobileModel);
    

    /// 
    /// কোন 'কী' এর ভ্যালুর  এক্সেস  নেওয়ার উপায় দুইটা।   ১=>(.) | ২=>([])
    console.log(mobileModel.brand);
    console.log(mobileModel['has Zoom Camera']);
    console.log(mobileModel[newsymb]);
     
    
        
    mobileModel.model = 'S25 Ultra' // সংশোধন করতে ব্যবহার করা হয়।
    Object.freeze(mobileModel)  // ফ্রিজার।
    console.log(mobileModel.hasOwnProperty('camera')); //সার্চ করতে ব্যবহার করা হয়।
    console.log(Object.keys(mobileModel)); // শুধু মাত্র ”কী” গুলো পেতে।
    console.log(Object.values(mobileModel)); //শুধু মাত্র ভ্যালু গুলো পেতে।
      
    
        
    console.log(mobileModel.brandModel()); // ওভজেক্ট এর ভিতরের ফাংশনকে কল করতে।
    console.log(mobileModel.battray.mah);  // ওভজেক্ট এর ভিতরের ওভজেক্ট এর ফাংশনকে কল করতে। 
    console.log(mobileModel.battray.matariyal.lobon);  // ওভজেক্ট এর ভিতরের ওভজেক্ট এর ফাংশনকে কল করতে। 



///-----------------------------

//* --------একাধিক ওভজেক্ট মেলানোর মানে একত্র করার পক্রিয়া।------------

   
    const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    };

    const obj2 = {
    e: 4,
    f: 5,
    g: 6,
    };


    const obj3 = {
    i: 7,
    j: 8,
    k: 9,
    };

    ///  const finalObj = {obj1, obj2} এটা ভুল।
    /// const finalObj = Object.assign(obj1, obj2, obj3); এটা ব্যবহার করলে একটু সমস্য আছে।
    ///  const finalObj = Object.assign({},obj1,obj2,obj3) এটা রিকমেন্ডেট।
    const finalObj = {...obj1,...obj2,...obj3} // এটা বেশী ভালো ও ‍ সহজ। 
        
        
    console.log(finalObj);



    //* -----constector object ------

    /// কন্সটাক্টর এর ক্ষেত্রে নামের প্রথম অক্ষর বড় হবে।
    function Person(first, last){
    this.firstName = first,
    this.lastName = last;
    }

    const person1 = new Person('arif','ariyan');
    person1.age = 20;
    const person2 = new Person('israt jahan', 'jui');
    person2.age = 22;

    console.log(person1);
    console.log(person2);

    /// const per = {...person1, ...person2}
    /// console.log(per);
*/
//?------------------------------------------------------



//!-----------ARRAY--------------------------------------
/*

/// const দিয়ে এ্যরে নেওয়া ভালো।

/// এ্যরে নেওয়ার দুইটা উপায়। 
const language = ['bangla', 'english', 'arabick', true, 20, false, 454643435645656565635n, null,];   // এটা  এক নাম্বার উপায়। এটা উত্তম

///console.table(language);

language[4] = 'hello'         // ইডিট করতে।
language[8] = 'react.js'      // নতুন কিছু এড করতে।
language[9] = 'new'           // নতুন কিছু এড করতে।
language.splice(2,0, 'info','info2') // কিছু না কেটে মাঝখানে কিছু এড করতে চাইলে।
language.splice(0,1 ) // কিছু না কেটে মাঝখানে কিছু এড করতে চাইলে।


console.log(language[2]);           // নির্দিষ্ট এ্যরে দেখার সাধারন নিয়ম ।
console.log(language.at(1));        // নির্দিষ্ট এ্যরে দেখার নতুন নিয়ম ।
console.log(language.toString());   // এ্যরে কে স্ট্রিং আকারে দেখাতে চাইলে।
console.log(language.join(' | '));  // এ্যরে কে স্ট্রিং আকারে দেখাতে চাইলে।  এবং  দুই স্ট্রিং এর মাঝে  নির্দিষ্ট কিছু দ্বারা ব্যবধান তৈরী করতে চইলে।
console.log(language.length);       // এ্যরের আইটেম সংখ্যা জানতে।



console.log(language[language.length - 1]); // শুধু মাত্র লাস্ট আইটেম কে সব সময় দেখোনোর জন্য।
language.pop() // শুধু মাত্র লাস্ট আইটেম কে সব সময় মুছে ফেলার জন্য।
console.log(language);
console.log(language[language.length - (language.length / 2)]); // শুধু মাত্র মধ্য আইটেম কে সব সময় দেখোনোর জন্য।
language.push( 'push')  // শেষে কিছু এড করতে চাইলে।
language.unshift('basick computer')   // শুরুতে কিছু এড করতে চাইলে।
language.shift()   // শুরুতে কিছু ডিলিট করতে চাইলে।




const language2= new Array ('bangla', 'english', 'arabick', true, 20, false, 454643435645656565635n, null,);   // এটা দুই নাম্বার উপায়। এটা অনুত্তম
console.log(language2);



///-----------


const person = [];                     //নোট রেকোমেন্ডেট।                  
person['firstName'] = 'arif';          //নোট রেকোমেন্ডেট।
person['lastName'] = 'arifyan';        //নোট রেকোমেন্ডেট।
person[2] = 34                         //নোট রেকোমেন্ডেট।

console.log(person);                   //নোট রেকোমেন্ডেট।
console.log(person.length);            //নোট রেকোমেন্ডেট।
console.log(person[2]);                //নোট রেকোমেন্ডেট।       



//* ----এ্যরে ও নিউ এ্যরের মাঝে পার্থক্য--------

const n = [20];
console.log(n);

const num2 = new Array (20,32);          //নোট রেকোমেন্ডেট।
console.log(num2);

console.table(language);



//*---দুই এ্যরের ইনফরমেশন এক জায়গায় রাখতে চাইলে।---- 

const n1 = [1,2,3,4];
const n2 = [5,6,7,8];
const n3 = [3,6,9]
const x = n1.concat(n2,n3)

console.log(x);

///---------


//*----  ভিতরের কয়েকটা এ্যরে কে এক এ্যরের মাঝে আনতে চাইলে।

const a = [
  [[1,2],[[3,4],[5,6],],],
  [7,8],

];

console.log(a.flat(Infinity)); //কয়েকটা এ্যরে কে এক এ্যরের মাঝে আনতে চাইলে।
*/
//?-----------------------------------------------------



//!-----------MATH---------------------------------------
/*

let n = 30.6664565;
console.log(Math.round(n)); /// রাউন্ড করতে চাইলে। হয়তো উপরে উঠবে নয়তো নিচে নামবে। মানে তার কাছাকাছি নাম্বারে যাবে। //? আনুপাতিক


let age = 12.0001
console.log(Math.ceil(age)); /// দশমিকের পর  এক থাকলেও এটা সর্বোচ্চ নাম্বার হিসাব করবে। //? সর্বোচ্চ


let nong = 23.9 ;
console.log(Math.floor(nong));  ///   দশমিকের পর বড় সংখ্যা থাকলেও এটা সেই হিসাব  করবে না।  //? সর্বোনিম্ন।


console.log(Math.pow(2,6));  /// কোন নাম্বারের স্কয়ার/কিউবের ভ্যালু পেতে।



console.log(Math.sqrt(400));  /// কোন নাস্বারের রোট ভ্যালু জানতে।


console.log(Math.abs(-20)); /// নাম্বার প্রজিটিব হোক বা নেগেটিভ এটা ‍ শুধু পজেটিভ দেখায়। মানে নেগেটিভ কে হাইট করে শুধু প্রজিটিভ দেখায়।  



console.log(Math.min(10,6,4,2,1));  /// অনেক নাম্বারের মাঝে সব চেয়ে ছোট নাম্বার দেখায়।



console.log(Math.max(0,2,5,7,1,0));  /// অনেক নাম্বারের মাঝে সব চেয়ে বড় নাম্বার দেখায়।



console.log(Math.PI); /// পাই  এর মান বের করতে।


console.log(Math.sin((90 * Math.PI) / 180));  /// sin, cos, tan, এর মান বের করতে। 




console.log(Math.random());  /// 





console.log(Math.random().toFixed(3)); /// একটা রেন্ডম মানে যে কোন একটা নাম্বার বের করে , তাকে দশমিকের পর দুই বা ততোধিক নাম্বারে ফিক্স্ড রখতে চাইলে।





console.log(Math.random().toFixed(2) * 10) + 1; /// একটা রেন্ডম মানে যে কোন একটা নাম্বার বের করে , তাকে দশমিকের পর দুই বা ততোধিক নাম্বারে ফিক্স্ড রখতে চাইলে। এবং নাম্বারটা একটা নির্দিষ্ট সীমার বেশী যেতে দিতে না চাইলে।




console.log(Math.ceil(Math.random() * 20)); /// floor/celi ব্যবহার করলে toFixed না দিলেও চলে।
*/
//?------------------------------------------------------



//!---------NUMBER---------------------------------------
/*

const a = 5;
const i = 100;
const k = 'java_script';
console.log(a);





const b = 0.6;
const c = 0.7;
const d = (b + c).toFixed(2);
console.log(Number(d)); /// কম্পিউটারের ভুল বোঝাবুঝি দূর করতে চাইলে। এবং ভুল বোঝাবুঝি দূর করতে েগিয়ে number > string হয়ে গেলে সেখান থেকে আবার ফিরিয়ে আনতে।





console.log(a + i + d);  ///   যোগ করার ক্ষেত্রে সবগুলো নাম্বার হতে হবে। শুরুতে বা শেষে স্ট্রিং থাকতে পারবে না।




console.log(i - d); /// স্ট্রিং আর নাম্বার কে যোগ ছাড়া বাকি সব করা যাবে। তবে এটা রিকোমেন্ডেট না।




const m = i - k ;
console.log(m);  ///  কিন্তু স্ট্রিং এর ভিতর নাম্বার না থাকলে সে আমাকে nah  দেখাবে।  এবং এটা মানে nah নাম্বার টাইপের অন্তর্ভূক্ত। 






///-----loop-------

///   let n = 3;
///   let value = '';
///   while (n <= 100){
///   n = n * n 
///   value = value + n + '<br>';
///   } 
///   document.getElementById('title').innerHTML = value;





const x = 8673;
console.log(x.toString(2)); /// এরকম করলে আমরা বাইনারি সংখ্যা দেখতে পারি।





const g = 300;
const h = new Number(300);  /// g holo number, and h number. adik diye tara same. but g and h are not same because g is number and h is object. 




const r = 56967;
console.log(r.toPrecision(6));  /// এটা বলে: “আমাকে পুরো সংখ্যাটা (decimal সহ) মোট কয়টা ডিজিটে দেখাতে হবে।”  this nor recomendet


console.log(r.toFixed(2)); /// in the ecomars-site this are vary useful. 





let newNum = Number.EPSILON /// দশমিকের সর্বনিম্ন সংখ্যা থেকে ওয়ান পর‌্যন্ত বিয়োগফল ্েখোনে দেখাবে।
newNum = Number.MAX_VALUE /// সবচেয়ে বড়
newNum = Number.MIN_VALUE /// সবচেয়ে ছোট
newNum = Number.POSITIVE_INFINITY ///
newNum = Number.NEGATIVE_INFINITY ///
console.log(newNum);

*/
//?------------------------------------------------------



//!----------DATE---------------------------------------
/*


const myDate = new Date();  /// ডেট নেওয়ার ক্ষেত্রে new ব্যবহার করতে হয়। নিউ ব্যবহার করলে স্লো হয়। তারপরও তাই ব্যবহার করতে হয়।
console.log(myDate);
console.log(myDate.toString());



console.log(myDate.toDateString()); /// এভাবে শুধু বার ও ডেট দেখায় সময় দেখায় না।




console.log(myDate.toLocaleString ('default', {weekday: 'long'})); /// এভাবে লোকাল বার কে বড় করে দেখায়।।




console.log(myDate.toLocaleDateString()); /// এভাবে লোকাল তারিখ দেখায় শুধু।।


///------------

let updateDate = new Date(2005, 7 , 15, 11,43,20,55)  ///  এখানে সাল মাস তারিখ সময় সবই ডিফল্ট ভাবে দেওয়া যায়।  এবং কাটাও যায় কিন্তু শুধু সাল দিলে জাবাস্ক্রিপ্ট সেটাকে মিলি সেকেন্ড মনে করে। 
console.log(updateDate);




let up = new Date(2025, 9, 27,10,15,20)
let newUP = up.toLocaleString('default', {weekday: 'long'})
console.log(newUP);




let sal = new Date('11-15-2005')  /// এখানেও নিজ থেকে সেট কারা যায়।
console.log(sal);




let now = Date.now()/// শুরু থেকে বর্তমান পর‌্যন্ত মিলি সেকেন্ড দেখতে।
console.log(now);




console.log(myDate.getDate()); 
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getTime());

*/
//?-----------------------------------------------------



//!-------MANAGEMENT------------------------------------
/*
//*-----call stake--------

let fullName = 'arif'
let webDeveloper = fullName
webDeveloper = 'arif ariyan'




console.log(fullName);
console.log(webDeveloper);




//* --------heap stake-------


let fruits = ['appel', 'banana', ];
let fru = fruits;
fru[0] =  'komola'  




console.log(fruits);
console.log(fru);


///----------


let car = {
    newCar: 'bmw',
    oldCar: 'zcar',
}

let cat = car
cat.newCar = 'toyota'

console.log(car);
console.log(cat);
*/
//?-----------------------------------------------------



//!----------CONDITIONAL STATEMENT----------------------
/*


//* if--------
let age = 18;

if (age >= 18){
    console.log('you are adult');
}else{
    console.log('you are child');
}
///         যখন একটা সাধারন কন্ডিশন ব্যবহার করতে চাই|  







//* else if------------

let n = 42 ;

if (n >= 40){
    console.log('you are old');
}else if ( n >= 18){
    console.log('you are adult');
}else{
    console.log('you are child');
}

/// যখন একাধিক কন্ডিশন  ব্যবহার করতে চাই।  তবে একাধিকবার এটা ব্যবহার করার হলে ব্যবহার না করাই ভালো। এতে করে পোগ্রাম স্লো কাজ করে।






//*--switch-----

let category = 'trak'
let carType;

switch(category){
    case 'car':
       carType = 'this is a car';
    break
    case 'motor bike':
       carType = 'this a motor bike';  
    break
    case 'bycycle':
        carType = 'this is a bycycle';
    break 
    case 'trak':
        carType = 'new trak';  
    break     
    default:
        carType = 'unknown';      
}
///  এটা হলো সুইচ কন্ডিশন এখানে  কেইচ ব্রেক ও ডিফল্ট ব্যবহার করা হয়। 

console.log(carType);
*/
//?-----------------------------------------------------



//!----LOOP---------------------------------------------
/*

//* for-----
let car = ['bmw', 'volvo', 'toyota', 'ford', 'tesla'];

for (let k = 0; k < 5; k++ ){
    console.log(car);
}  /// এরকম থাকলে এ্যরে পাচবার প্রিন্ট হয়। কিন্তু আমরা তো তা চাই না।

///--------


let cr = ['bmw', 'volvo', 'toyota', 'ford', 'tesla', 'korola'];
cr.push('sub')

for (    let k = 0;              k < cr.length;           k++ )          {
    console.log(cr[k]); /// যখন এখানে ব্রেকেড দিয়ে ইন্ডেক্স নাম লিখবো তখন ঠিক হয়ে যাবে। আর .length দেওয়া উচিত।
}





//* for in loop

const person = {
    name: 'arif',
    age: 20,
    country: 'bangladesh'
}

for( let i in person ){
    let cap = i.charAt(0).toUpperCase() + i.slice(1);
    console.log(cap + ': '  + person[i]); 
}







/// for each loop-------------
car.forEach(function(k){
    console.log(k);  /// এটা সবগুলো কে নিয়ে আসে।
})






/// for of loop ---------

for(let i of cr){
console.log(i);
}



/// while loop-----------

let n = 0;
while (n < 20 + 1 ){
console.log(n);
n++;
}

*/
//?-----------------------------------------------------



//!-----LOOP_PROJECT--------------------------------------
/*



function guessTheNumber(difficlty){
 let random;
 let attoms = 0;
 let maxAttoms;
 let range;

switch(difficlty){
    case 'easy':
        range = 10;
        maxAttoms = 5;
        random = Math.ceil(Math.random() * 10)
        console.log(random);
    break;
    case 'medium':
        range = 50;
        maxAttoms = 7;
        random = Math.ceil(Math.random() * 50)
        console.log(random);
    break;
    case 'hard':
        range = 100;
        maxAttoms = 10;
        random = Math.ceil(Math.random() * 100)
        console.log(random);
    break;
    default:
        console.error('you are wrong');
        

    while(attoms < maxAttoms){
        let guess = parseInt(
            prompt(
                `guess a number between one and ${range} (include). you have ${maxAttoms - attoms} attoms left`
            )
        );
        attoms ++;
        console.log(guess);
    }
    
}



}

let difficlty = prompt('cooce a paramitar(easy, medium, hard)').toLowerCase()

guessTheNumber(difficlty);
*/
//?------------------------------------------------------



//!------SCOP--------------------------------------------
/*
let car = 'bike'
console.log(car);


function name(){

    let orange = 'apple'
    console.log(orange);

    if(true){
    console.log(car);
    let fruits = 'komola';
    console.table(fruits);
    console.log(orange);
}
console.log(fruits);

}
name()

// console.log(fruits);
*/
//?------------------------------------------------------
 


//!-------HOSTING---------------------------------------
/*



person = 'arif ariyan';
console.log(person);


var x;
x = 10;
console.log(x);

let y = 20;
console.log(y);


// | ধরন                  | Hoisted হয়? | ব্যবহার করা যায় আগে থেকে?    | ব্যাখ্যা                                   |
// | -------------------- | ----------- | ---------------------------- | ------------------------------------------ |
// | `var`                | ✅ হয়        | ⚠️ হ্যাঁ, কিন্তু `undefined` |শুধু declaration ওঠে                       |
// | `let` / `const`      | ✅ হয়        | ❌ না (TDZ error)             | Declaration ওঠে, কিন্তু ব্যবহার করা যায় না |
// | Function declaration | ✅ হয়        | ✅ হয়                         | পুরো function ওঠে                          |
// | Function expression  | ✅ হয়        | ❌ না                         | Variable ওঠে, কিন্তু মান ওঠে না            |


*/
//?-----------------------------------------------------



//!------STRICT------------------------------------------
/*


// 'use strict'

let x = 5;
console.log(x);




fname(10, 5)
function fname(p1,p1){
    console.log(p1 * p1);
}


let private = 'so e'

console.log(private);

*/


 
//!-----THIS--------------------------------------------
/*
// 'use strict'

console.log(this);

var firstName = 'prothom alo'  
/// ভার ছাড়া let or const ব্যবহার করলে কাজ কর েন।



function myFunction(){
    return this;
}
console.log(myFunction());


const myFunc = () =>{
    console.log(this);
}
myFunc()


const studen = {
    firstName: 'ali',
    sInfo: function(){
        return `${this.firstName} love to read`
    },
    arrowFunction: () => {
        return `${this.firstName} love to read`
    }
}
console.log(studen.sInfo());
console.log(studen.arrowFunction());
*/
//?-----------------------------------------------------



//!-----MAMOIZATION-------------------------------------
/*
/// 'use strict'
/// function memo(){
///     const cash = {}

///     return function updateMemo (n){
///         if(n in cash) return cash[n];
///         if(n === 0) return 1;

///         cash[n] = n * updateMemo(n - 1)
///         return cash[n];
///     }
/// }

/// const fact = memo();
/// console.log(fact());




//*-------------------------




function square(n){
    return n * n
}
console.log(square(10));


function memo(){
    const cash = {};

    function updateMem(n){
        if(n in cash){
            console.log('from cash ' , n);
            return cash[n]
        }else{
            console.log('calculatin');
            const result = square(n)
            cash[n] = result;
            return result;
        }


    }
return updateMem;
}
const x = memo()
console.log(x(3));
console.log(x(3));

*/
//?-----------------------------------------------------



//!-----HIGHER ORDER ARRAY LOOP-------------------------
/*
'use strict'
/// for loop------------------------

const fruits = ['mango', 'banana', 'orange', 'graps','banana', 'orange', 'graps'];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}







/// for of -------------------------

for(let i of fruits){
    console.log(i);
}

// 'for of loop' is best for array; 


const fname = 'MUHAMMAD ARIF ARIYAN'

for(let i of fname){
    console.log(`this ${i} is a letter`);
}

// variable এর মাঝে for of ব্যবহার করলে এটা সকল পুরো বাক্যকে আলাদা আলাদা করে।






///  map------------------------


const country = new Map([
    ['bn', 'bangladesh'],
    ['in', 'india'],
    ['pk', 'pakistan'],
    ['pk', 'pakistan'],    // সেম ডেটা আভডেট হয় না।


])
country.delete('pk')
country.clear()
country.set('bt', 'butan')
for(let [key, value] of country){
    console.log(key, ":",value);
}

console.log(country.size);



//--------------


 /// for in loop in OBJECT


const meCountry ={
    bn: 'bangladesh',
    in: 'india',
    pk: 'pakistan',
    pk: 'pakistan',    // সেম ডেটা আভডেট হয় না।
};


for(let key in meCountry){
    console.log( key, ':', meCountry[key]);
}





/// for of loop in OBJECT


for(let key of Object.keys(meCountry)){
    console.log(key);
}




/// for in loop in array

for (let key in fruits){
    console.log(fruits[key]);
}



/// for each loop

fruits.forEach(function (i){
console.log(i);
})

///-------

fruits.forEach( i => console.log(i) )


///-------

function myFruit(fruits){
console.log(fruits);
}
// myFruit('mango')


fruits.forEach(myFruit)

///-----------


// for each

fruits.forEach( (i,j,k) => console.log(j,i) )


///-----

const stack = [
    {
    name: 1,
    property: `amar, sonar`
    },
    {
    name: 2,
    property: `bangla, ami`
    },
    {
    name: 3,
    property: `tumay, valobasi`
    }
]

stack.forEach(i => console.log(`learn to ${i.name}, learn ${i.property}`))


*/
//?-----------------------------------------------------



//!--------FILTER_MAP_REDUCE-----------------------------
/*




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

*/
//?------------------------------------------------------






















































































































































