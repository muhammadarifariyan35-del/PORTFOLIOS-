const dirtyRolls = [10, 12, 10, 15, 12, 20, 15, 30];
const removeDuplicat = new Set(dirtyRolls);
const array = [...removeDuplicat];
console.log(array);

const userDataBase = new Map();
userDataBase.set(101, "Anik");
userDataBase.set(102, "Sumi");
userDataBase.set(103, "Tamim");
console.log(userDataBase.has(102), userDataBase.get(101));
userDataBase.delete(101);
console.log(userDataBase);

const asifHobbies = new Set(["Coding", "Gaming", "Reading", "Biking"]);
const ronyHobbies = new Set(["Gaming", "Traveling", "Biking", "Cooking"]);
const commonHobbis = asifHobbies.intersection(ronyHobbies);
console.log(commonHobbis);

const partyTracker = new Map([
  ["Rahim", 3],
  ["Karim", 2],
  ["Sujon", 4],
]);
let totaldrinks = 0;
for (let [name, drinks] of partyTracker) {
  console.log(`${name} has consumed ${drinks} drinks.`);
  totaldrinks += drinks;
}
console.log(`Total drinks consumed in the party: ${totaldrinks}`);

//! লেভেল-১ (Closure ও Counter)

function createCounter() {
  let count = 0;
  return function incressCounter() {
    count++;
    return count;
  };
}
let showNumber = createCounter();
console.log(showNumber());
console.log(showNumber());
console.log(showNumber());

//! লেভেল-২ (Closure + Parameter)

function createStepCounter(step) {
  let count = 0;
  return function incressCounter() {
    count += step;
    return count;
  };
}
let showStepNumber = createStepCounter(187);
console.log(showStepNumber());
console.log(showStepNumber());
console.log(showStepNumber());

//! লেভেল-৩ (Closure + Condition)

function createLimitedCounter(limit) {
  let index = 0;

  return function limitCounter() {
    index++;
    if (index > limit) {
      return "Limit Reached!";
    }
    return index;
  };
}

const myLimitCount = createLimitedCounter(3);

console.log(myLimitCount());
console.log(myLimitCount());
console.log(myLimitCount());
console.log(myLimitCount());

//! লেভেল-৪ (Closure + Reset Logic)

function createResetCounter() {
  let count = 0;

  return function ResetCounter(action) {
    if (action === "reset") {
      count = 0;
      return "Counter reset to 0";
    }
    count++;
    return count;
  };
}

const counter = createResetCounter();

console.log(counter());
console.log(counter());
console.log(counter("reset"));
console.log(counter());
console.log(counter());

//! লেভেল-৫ (Closure + Multiple Actions Object)

function createAdvancedCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = 0;

      return `Counter Reset. Now your count is ${count}`;
    },
  };
}

const myAdvancedCounter = createAdvancedCounter();

console.log(myAdvancedCounter.increment());
console.log(myAdvancedCounter.increment());
console.log(myAdvancedCounter.decrement());
console.log(myAdvancedCounter.decrement());
console.log(myAdvancedCounter.decrement());
console.log(myAdvancedCounter.reset());

