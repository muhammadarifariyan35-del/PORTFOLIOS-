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

async function loadJsonData() {
  try {
    let responce = await fetch("data.json");

    if (!responce.ok) {
      console.log("Error", responce.status, responce.statusText);
      return;
    }

    let data = await responce.json();
    console.table(data);
    console.log("Name", data.name);
    console.log("City", data.address.city);
  } catch (err) {
    console.log("fetch error", err);
  }
}

loadJsonData();
