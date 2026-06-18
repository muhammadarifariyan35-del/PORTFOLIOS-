
const aFunction = function(a,b){
    console.log(`this number is ${a + b}`);
}
aFunction(20,40);
aFunction(2,4);
//----------------
(function(a,b){
    console.log(a + b);
})(10,10);
//---------------
((a,b) => console.log(a*b))(3,2);


//----------------------------------------------

const bmw = (function(){
let fName = 'arif ariyan'
let lastName = 'sharif muhammad'
function car(){
    console.log('this is my car');
    function house(){
        console.log('this is my new house');
    }
    return house
}
return{
    fName,lastName,car,car
}
})()
console.log(bmw.fName);
console.log(bmw.lastName);
const myHouse = bmw.car();
myHouse()
























