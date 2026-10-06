const jsonText = '{"name": "John", "age": 30, "city": "New York"}';

const person = JSON.parse(jsonText);
console.log(person);

const Obj = {
  name: "arif ariyan",
  age: 20,
  city: "Dhaka",
  phone: "01717984004",
};

const person2 = JSON.stringify(Obj);
console.log(person2);

console.log(JSON.parse(person2));

//_______


async function dataLoad(data) {
    let response = await fetch(data)
    let allData =  await response.json()

    console.table(allData)
    
}
dataLoad("data.json")