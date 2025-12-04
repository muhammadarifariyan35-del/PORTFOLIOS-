





const person ={
    name: 'arif ',
    lastName: 'ariyan'
}


function sayHI(){
    console.log(`HELLO ${this.name}${this.lastName}`);
}

const sayArif = sayHI.bind(person);

sayArif();



///----------------------------


const student = {
    fname: 'jui',
    sayHello(){
        console.log(`HELLO! ISRAT JAHAN ${this.fname}`);
    }
}

student.sayHello()

//------

const sayJui = student.sayHello.bind(student);
sayJui()

// //------
// setTimeout(student.sayHello.bind(student), 3000)


//------------------------



const person20 ={
    firstName: 'MUHAMMAD ARIF',
    lastName: 'ARIYAN',
    display(){
        console.log( this.firstName + ' '+ this.lastName);
    }
}
// const display = person20.display;
// console.log(setTimeout(display.bind(person20),1000));



//------------------------



const TAX = (rat, value) => value + (value * rat)/ 100;
console.log(TAX(20, 1000));


const VAT = TAX.bind(null, 30)
console.log(VAT(1000));








































































































