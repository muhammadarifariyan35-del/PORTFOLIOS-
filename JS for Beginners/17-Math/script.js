//* Math Properties (Constants)
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

//* Math.round()
console.log(Math.round(4.4));
console.log(Math.round(4.8));

//* Math.ceil()
console.log(Math.ceil(44.0001));
console.log(Math.ceil(-44.0001));

//* Math.floor()
console.log(Math.floor(44.99));
console.log(Math.floor(-44.99));

//* Math.trunc()
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.2));

//* Math.sign()
console.log(Math.sign(-4));
console.log(Math.sign(4));

//* Math.pow()
console.log(Math.pow(8, 2));
console.log(Math.pow(20, 3));
console.log(Math.pow(10, 5));

//* Math.sqrt()
console.log(Math.sqrt(64));
console.log(Math.sqrt(100));

//* Math.abs()
console.log(Math.abs(-44));
console.log(Math.abs(-9873));

//* Math.sin()
console.log(Number(Math.sin((90 * Math.PI) / 180).toFixed(2)));
console.log(Number(Math.sin((60 * Math.PI) / 180).toFixed(2)));
console.log(Number(Math.sin((180 * Math.PI) / 180).toFixed(2)));
console.log(Number(Math.sin((360 * Math.PI) / 180).toFixed(2)));

//* Math.cos()
console.log(Number(Math.cos((90 * Math.PI) / 180).toFixed(2)));
console.log(Number(Math.cos((60 * Math.PI) / 180).toFixed(2)));
console.log(Number(Math.cos((180 * Math.PI) / 180).toFixed(2)));
console.log(Number(Math.cos((360 * Math.PI) / 180).toFixed(2)));

//* Math.min()
console.log(Math.min(0, 150, 30, 20, -8, -200));

//* Math.max()
console.log(Math.max(0, 150, 30, 20, -8, -200));

//* Math.random()
console.log(Math.trunc(5000 + Math.random() * 5000));
console.log(Math.trunc(1000 + Math.random() * 9999));

//* Math.log()
console.log(Math.log(1));
console.log(Math.log(Math.E));

//* Math.log2()
console.log(Math.log2(8));

//* Maht.log10()
console.log(Math.log10(10000000000));

//! Provlem solving

//* ইকমার্স ডেলিভারি কার্টুন ক্যালকুলেটর
//জাভাস্ক্রিপ্টের সঠিক Math মেথড ব্যবহার করে প্রয়োজনীয় বক্সের সংখ্যা (আস্ত সংখ্যা) বের করুন। (হিন্ট: ৩৫ কে ৮ দিয়ে ভাগ করলে দশমিক আসবে, আপনাকে সেটাকে ওপরের দিকে পূর্ণ সংখ্যায় নিতে হবে)।

let totalBox = 464;
let capacity = 6;
let totalCarton = Math.ceil(totalBox / capacity);
console.log(totalCarton);

//* ৬-ডিজিটের সিকিউর ওটিপি (OTP) জেনারেটর
//শর্ত ১: সংখ্যাটি যেন সবসময় ৬ ডিজিটেরই হয় (যেমন: ১,০০,০০০ থেকে ৯,৯৯,৯৯৯ এর মধ্যে)। ভুল করেও যেন ৫ ডিজিটের না হয়।
// শর্ত ২: ওটিপিতে কোনো দশমিক থাকা যাবে না, একদম আস্ত সংখ্যা হতে হবে।
// আপনার কাজ: Math.random() এবং Math.trunc() বা অন্য কোনো মেথড কম্বাইন করে এই ৬ ডিজিটের ওটিপি বানানোর কোডটি লিখুন।

let OTP = Math.trunc(100000 + Math.random() * 900000);
console.log(`Your OTP is ${OTP}`);

//* গেমের লুডু ছক্কা (Dice) সিমুলেটর
console.log(Math.trunc(1 + Math.random() * 6));

//* ক্যাশ-আউট চার্জ ট্র্যাকার
function checkTransition(amount) {
  const status = Math.sign(amount);

  if (status === 1) {
    console.log("অভিনন্দন! আপনার অ্যাকাউন্টে টাকা ডিপোজিট হয়েছে। 🟢");
  } else if (status === -1) {
    console.log("সতর্কতা! আপনার অ্যাকাউন্ট থেকে টাকা ক্যাশ-আউট হয়েছে। 🔴");
  } else if (status === 0 || status === -0) {
    console.log("আপনার অ্যাকাউন্টে কোনো লেনদেন হয়নি। ⚪");
  } else {
    console.log("ভুল ইনপুট! দয়া করে সঠিক সংখ্যা দিন।");
  }
}
checkTransition(3000);
checkTransition(-986);
checkTransition(0);

