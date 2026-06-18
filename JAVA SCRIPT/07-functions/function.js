// java script function


function newFunction(fullName, age, dateOfBirth = 2025) {
    console.log('I am ' + fullName + ', ' + 'i am' + ' ' + age + ' ' + 'years old' + ', ' + 'I was born in'+ ' ' + dateOfBirth);
    }
newFunction('arif ariyan', 20, 2005);
newFunction('israt jahan jui', 22, 2003);


function arif(muhib,sharif,rayhan){
    console.log(muhib,sharif,rayhan);
}

arif('bangladesh is a good country', 'helo',3232)
arif('my name is muhib bollah', 'hello', 37648)


function isSubscribe(){
    console.log('subscribe');
}
document.getElementById('btn').addEventListener('click',isSubscribe)



 
/*(function (name) {
    console.log("hello, " + name + " welcome");
})('ariyan');*/

let maths = function (x, y){
    return x * y;
};
console.log(maths(3,4));
console.log(maths(6,29));




function helloFunction(){
    let firstName = 'arif';
    console.log(firstName);
}
helloFunction();

let number = [4,5,6,7,8,9];
let sqNumber = number.map(function(number){
    return number * number;
})

console.log(sqNumber);


function taka(money){
    console.log('আমি আপনার কাছে '+  money + '  টাকা পাই। ');
}

taka(98769);
taka(48759)


function premika(names){
    console.log('hello ' + names + ' I love you');
}

premika('ayesha')
premika('fatema')
premika('israt')

let add = (x,y) => x * y;
console.log(add(20,20));

let banana = (x, y, o) => x + y - o;
console.log(banana(80,50,20));
/*
function greed(firstName) {
    function sayhello(){
        alert('hello ' + firstName)
    }
    return sayhello();
}
greed('arif')*/


function orange(name){
    function sayHello(){
        alert('hello ' + name)
    }
    return sayHello();
}
orange('arif')
orange('sharif')


/*function greeting(name) {
    console.log("হ্যালো " + name);
}

function processUser(callback) {
    let name = "আরিয়ান";
    callback(name);
}

processUser(greeting);*/


function greeting(name){
    console.log('hello ' + name);

}
function goodby(name){
    console.log('Good by ' + name);
}

function gg(callback){
     let name = 'sharif';
     callback(name);
}
gg(greeting);
gg(goodby)
