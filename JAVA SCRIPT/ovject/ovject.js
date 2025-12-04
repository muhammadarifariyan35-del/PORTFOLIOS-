// java script objects

const newSymb = Symbol('key1'); 
const mobileModel = {
    brand: 'Samsung',
    model: 's24 Ultra',
    processor: 'Sanpdragon Gen 3',
    camera: [ '200mp', '12mp' , '12mp' ],
    hasZoomCamera: true,
    'selfe camera': '45mpx',
    [newSymb]: 'mykey',

    brandModel: function () {
    return `mobile brand is ${this.brand} and mobile model is ${this.model}`;
    },
    battry: {
        mah: {
            mah1: 700,
            mah2: 600,
        },
    },
}


console.log(mobileModel.brandModel());

mobileModel.model = 's25';
//Object.freeze(mobileModel);
console.log(mobileModel);
console.log(mobileModel.hasZoomCamera);
console.log(mobileModel['selfe camera']);
console.log(mobileModel[newSymb]);
console.log(mobileModel.hasOwnProperty('camera'));

console.log(Object.keys(mobileModel));






const obj1 = {
    a: 1,
    b: 2,
    c: 3,
}
const obj2 = {
    e: 1,
    f: 2,
    g: 3,
}
const obj3 = {
    i: 1,
    j: 2,
    k: 3,
}
//const finalObj = Object.assign({},obj1,obj2,obj3);
//const finalObj = {obj1, obj2};
const finalObj = {...obj1,...obj2,...obj3};
console.log(finalObj);
console.log(mobileModel.battry.mah.mah2);
console.log(mobileModel.battry.mah);

function Person(first, last) {
    this.firstName = first,
    this.lastName = last;
}

const person1 = new Person('arif','ariyan');
const person2 = new Person('israt', 'jui');


console.log(person1);
console.log(person2);




function PhoneModel(nam,model,camera,battry){
    this.name = nam,
    this.model = model,
    this.camera = camera,
    this.battry = battry;

}

const phone1 = new PhoneModel('infinix', 54 , '1200mp', '500mah')
const phone2 = new PhoneModel('Samsung', 8974 , '19700mp', '900mah')
const phone3 = new PhoneModel('infinix', 54 , '1200mp' ,'200mah')
const phone4 = new PhoneModel('Samsung', 8974 , '19700mp', '100mah')
const phone5 = new PhoneModel('infinix', 54 , '1200mp', '500mah')
const phone6 = new PhoneModel('Samsung', 8974 , '19700mp', '900mah')
const phone7 = new PhoneModel('infinix', 54 , '1200mp' ,'200mah')
const phone8 = new PhoneModel('Samsung', 8974 , '19700mp', '100mah')
console.log(phone1,phone2,phone3,phone4,phone5,phone6,phone7,phone8);
