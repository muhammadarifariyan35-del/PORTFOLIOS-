const id1 = Symbol("id-098");
const id2 = Symbol("id-098");
console.log(id1 === id2);

const id3 = Symbol.for("id3-990");
const id4 = Symbol.for("id3-990");
console.log(id3 === id4);

const id = Symbol();
const person = {
  name: "arif",
  age: 20,
};
person[id] = 123;
console.log(person.id);
console.log(person[id]);

const myObj = {
  data: ["A", "B", "C"],

  [Symbol.iterator]() {
    let index = 0;
    let data = this.data;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
let text = "";
for (const x of myObj) {
  text += x + " ";
}
console.log(text);
