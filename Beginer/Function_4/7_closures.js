// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// A function can access all variables defined inside the function, like this:

function myFunction() {
  let a = 4;
  return a * a;
}

// console.log(myFunction());

// But a function can also access variables defined outside the function, like this:

let a = 4;
function myFunction1() {
  return a * a;
}

// console.log(myFunction1());

// It did not work because we display the global counter instead of the local counter.

// Initiate counter
// let counter = 0;  ====

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}

// Call add() 3 times
// console.log(add());

// We can remove the global counter and access the local counter by letting the function return it:

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

// It did not work because we reset the local counter every time we call the function.
// Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

// A JavaScript inner function can solve this.====================

function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

// console.log(add());

// JavaScript Closures

const add1 = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add1());

// একটি ক্লোজার হল একটি ফাংশন যার প্যারেন্ট স্কোপে অ্যাক্সেস থাকে, এমনকি প্যারেন্ট ফাংশন বন্ধ হওয়ার পরেও৷
