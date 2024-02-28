// iterable মানে যার মধ্যে দিয়ে এক একটা করে iterate / loop করা যায় বা যেই order আছে সেই order ধরে ধরে এক একটা করে যেতে পারি তাকেই iterable বলে

const myNumber = {};

// make it iterable

myNumber[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};

for (let num of myNumber) {
  //   console.log(num);
}

// একটি বস্তু একটি পুনরাবৃত্তিকারী হয় যখন এটি একটি next() পদ্ধতি প্রয়োগ করে।
// The next() method must return an object with two properties:

//1== value	The value returned by the iterator (Can be omitted if done is true)
//2== done	true if the iterator has completed false if the iterator has produced a new value

// Home made iterable
function myNumber1() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}

// create iterable

const n = myNumber1();
n.next();
n.next();
n.next();
n.next();

// console.log(n);
// console.log(n.next().value);

// The problem with a home made iterable:
// It does not support the JavaScript for..of statement.

// A JavaScript iterable is an object that has a Symbol.iterator.
// The Symbol.iterator is a function that returns a next() function.
// An iterable can be iterated over with the code: for (const x of iterable) { }

// Create an Object

myNumber2 = {};

// Make it Iterable

myNumber2[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

for (const num of myNumber2) {
  //   console.log(num);
}

// The Symbol.iterator method is called automatically by for..of.
// But we can also do it "manually":

let iterator = myNumber2[Symbol.iterator]();

let text = "";
while (true) {
  const result = iterator.next();
  if (result.done) break;
  text += result.value;
  // Any Code Here
}

console.log(text);
