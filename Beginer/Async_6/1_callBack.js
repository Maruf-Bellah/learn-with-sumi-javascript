// sequence হলো ক্রম ভাবে যাওয়া , মানে একটার পর একটা করে

// কোন একটা function এর মধ্যে যদি আরেকটা function কে callBack function আকারে পাঠানো হয় তাহলে তাকে callBack function বলে

// "আমি পরে কল করব!"==================================
//   কলব্যাক হল একটি ফাংশন যা অন্য ফাংশনে আর্গুমেন্ট হিসাবে পাস করা হয়
// এই কৌশলটি একটি ফাংশনকে অন্য ফাংশনকে কল করতে দেয়
// একটি কলব্যাক ফাংশন অন্য ফাংশন শেষ হওয়ার পরে চালানো যেতে পারে

function display(some) {
  console.log(some);
}
function calculator(num1, num2, callBack) {
  let sum = num1 + num2;

  if (callBack) {
    callBack(some);
  }
  return sum;
}

const result = calculator(5, 5, +display(4));
// console.log(result);

// This example will end up displaying "Hello":====================

function myFirst() {
  console.log("Hello MyFirst Function");
  mySecond();
}

function mySecond() {
  console.log("Goodbye MySecond Function");
}
// myFirst();

// Sequence Control==========================

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result2 = myCalculator(5, 5);
// console.log(result2);

const myNumber = [4, 3, 2, 3, -5, 3, 9];

// call removeNeg with a callback
const posNumber = removeNeg(myNumber, (x) => x >= 0);

console.log(posNumber);

function removeNeg(number, callback) {
  const myArray = [];
  for (const x of number) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

// example from sumit vai youtube============================

let paymentSuccess = true;
let mark = 70;

function enroll() {
  console.log("Course enrollment is in progress");

  setTimeout(function () {
    if (paymentSuccess) {
      progress();
    } else {
      console.log("Payment Failed");
    }
  }, 2000);
}

function progress(callBack) {
  console.log("Course on progress");

  setTimeout(function () {
    if (mark >= 80) {
      callBack();
    } else {
      console.log("You could not get enough marks to get the certificate");
    }
  });
}
enroll(progress());
