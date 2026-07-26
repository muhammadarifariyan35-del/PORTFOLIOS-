//!  >01<  দ্য সিকিউর পেপমেন্ট প্রসেসর (Errors, Try...Catch, Types & Coercion)

// সিনারিও: আপনি একটি অনলাইন পেমেন্ট গেটওয়ের ব্যাকএন্ড ভ্যালিডেটর বানাচ্ছেন। ইউজারের পাঠানো ইনপুট চেক করার জন্য আপনাকে একটি মেথড লিখতে হবে।

//* শর্ত ও টাস্ক:
// ১. ইউজারের পাঠানো amount যদি number টাইপ না হয় (অথবা স্ট্রিং হিসেবে আসা সংখ্যা যদি কনভার্ট করা না যায়), তবে একটি কাস্টম TypeError থ্রো (throw) করতে হবে।

// ২. amount যদি 0 বা তার চেয়ে কম হয়, অথবা toPrecision(100)-এর লিমিট পার করে ফেলে, তবে একটি RangeError থ্রো করবেন।

// ৩. পুরো অপারেশনটি একটি try...catch...finally ব্লকে রাখুন। catch ব্লকে এররের name এবং message সুন্দরভাবে ফরম্যাট করে কনসোলে দেখাবেন, এবং finally ব্লকে সবসময় "Transaction Process Ended" প্রিন্ট হবে।

function processPayment(inputAmount) {
  if (inputAmount === undefined || inputAmount === "") {
    console.log("you didn't input yet");
    return;
  }
  try {
    let amount = Number(inputAmount);
    if (isNaN(amount)) {
      throw new TypeError("Invalid input: Amount must be a valid number!");
    }
    if (amount <= 0) {
      throw new RangeError("Invalid amount: Amount must be greater than 0!");
    }
    amount.toPrecision(100);
    console.log(` Payment Success: $${amount} processed.`);
  } catch (err) {
    console.log(`[${err.name}]: ${err.message}`);
  } finally {
    console.log("Transaction Process Ended");
  }
}

processPayment(345);
processPayment();
processPayment(-3);

//! >02< দ্য এনক্রিপ্টেড সেশন ম্যানেজার (Symbols, Maps, Sets & Scope)

// সিনারিও: একটি ওয়েব অ্যাপের সেশন ট্র্যাকার বানাতে হবে যেখানে ব্রাউজারের কোনো লুপ বা স্ট্রিং কি দিয়ে ইউজারের পার্সোনাল সেশন আইডি দেখা যাবে না।

//* শর্ত ও টাস্ক:
// ১. একটি Set তৈরি করুন যা একাধিক ইউজারের অনন্য রোল (Roles) ট্র্যাক করবে (যেমন: "admin", "editor")—যেন কোনো ডুপ্লিকেট রোল না থাকে।

// ২. একটি Symbol তৈরি করুন যা অবজেক্টের সিক্রেট চাবি হিসেবে কাজ করবে।

// ৩. একটি Map ব্যবহার করুন যেখানে userId হবে Key এবং ইউজারের ডেটা অবজেক্ট হবে Value।

// ৪. Closure ও Scope ব্যবহার করে একটি ফাংশন লিখুন যা সেশন আইডি জানা না থাকলে ইউজারের ডাটা এক্সেস করতে দেবে না।

const userRoles = new Set(["admin", "editor", "viewer"]);
userRoles.add("admin");
console.log(userRoles);

const secretSessionKey = Symbol("sessionID");

const userDataBase = new Map();
userDataBase.set(101, {
  name: "Arif Ariyan",
  role: "admin",
  [secretSessionKey]: "SESS_987654321_SECRET",
});

function createSessionTracker() {
  const internalKey = secretSessionKey;

  return function getUserData(userId, providedSessionId) {
    const user = userDataBase.get(userId);

    if (!user) {
      return "❌ ইউজার পাওয়া যায়নি!";
    }
    if (user[internalKey] !== providedSessionId) {
      return "⛔ অ্যাক্সেস অস্বীকৃত: ভুল বা অনুপস্থিত সেশন আইডি!";
    }

    return {
      name: user.name,
      role: user.role,
    };
  };
}

const getData = createSessionTracker();

console.log(getData(101, "9834"));
console.log(getData(34534, "98435936"));
console.log(getData(101, "SESS_987654321_SECRET"));
