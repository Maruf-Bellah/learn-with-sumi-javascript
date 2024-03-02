function a(x) {
  x.one = 7;
  return x.one * x.two;
}

// এটার মধ্যে কিন্তু one এর value chnage হচ্ছে

let m = {
  one: 4,
  two: 5,
};
// console.log(m); // m এর ভ্যালু এখানে চেঞ্জ হয় নাই
// console.log(a(m)); // m এর ভ্যালু এখানে চেঞ্জ হইছে
// console.log(m); // m এর ভ্যালু এখানে চেঞ্জ হইছে

// Default Parameter Values===================================
// If y is not passed or undefined, then y = 10.

function myFunction(x, y = 10) {
  return x + y;
}
// console.log(myFunction(5));

// Function Rest Parameter==============================
// বাকি প্যারামিটার (...) একটি ফাংশনকে একটি অনির্দিষ্ট সংখ্যক আর্গুমেন্টকে একটি অ্যারে হিসাবে বিবেচনা করার অনুমতি দেয়:

function sum(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;
  return sum;
}

let show = sum(45, 6, 5, 211415, 5, 4, 54);
// console.log(show);

// The Arguments Object=====================================

let x = findMax(1, 123, 500, 115, 44, 9000, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
// console.log(x);

// ekdom laste eta hobe ================================

function a(x, y) {
  return x * y;
}

// এটার মধ্যে কিন্তু m ও n এর value chnage হয় নাই

let m1 = 6;
let n1 = 5;

console.log(a(m1, n1));
console.log(m1, n1);
