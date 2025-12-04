
// 'use strict'

// console.log(window.navigator.userAgent);

// console.log(window.document.title);

// console.log(this);

// var firstName = 'arif';






// function myFuntion(){
//     return this;
// }
// console.log(myFuntion());




// const myFunc = () => {
//     console.log(this);
// };
// myFunc()




var firstName = 'arif';

const student = {
    firstName: 'arif ariyan',
    sInfo: function (){
        return `${this.firstName} loves to read`
    },
    newFunc: () => {
        return `${this.firstName} loves to read`

    }
}
console.log(student.sInfo());
console.log(student.newFunc());










function Person (firstName, lname){
    this.firstNamename = firstName;
    this.lname = lname;

}
const s1 = new Person('arif', 'ariyan')
const s2 = new Person('mohib', 'bollah')


console.log(s1);
console.log(s2);