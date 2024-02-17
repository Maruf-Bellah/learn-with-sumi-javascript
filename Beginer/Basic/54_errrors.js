/*
 Throw, and Try...Catch...Finally ===================
// // The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

Errors Will Happen!================================
// When executing JavaScript code, different errors can occur.
// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.
 */
// মুল কোড
try {
  // regular code lekhkbe
  //   aaalert("hello alert");
} catch (err) {
  //   console.log(err); // ekhane error dekhabe
}

// The finally Statement

function myFunction() {
  let x = 89;
  try {
    // if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  } finally {
    console.log("hey finally");
  }
}
// myFunction();

// একটি RangeError নিক্ষেপ করা হয় যদি আপনি এমন একটি সংখ্যা ব্যবহার করেন যা আইনি মানের সীমার বাইরে।

// উদাহরণস্বরূপ: আপনি একটি সংখ্যার উল্লেখযোগ্য সংখ্যা 500 সেট করতে পারবেন না।

let num = 100;
try {
  let n = num.toPrecision(500); // A number cannot have 500 significant digits
  //   console.log(n);
} catch (err) {
  //   console.log(err.name);
}

//ReferenceError== আপনি যদি ঘোষণা করা হয়নি এমন একটি ভেরিয়েবল ব্যবহার করেন (রেফারেন্স) তাহলে একটি রেফারেন্স ত্রুটি নিক্ষেপ করা হয়:

let x = 5;
try {
  let a = xy + 1; // y cannot be used (referenced)
  //   console.log(a);
} catch (err) {
  //   console.log(err.name);
}

// একটি TypeError নিক্ষেপ করা হয় যদি একটি অপারেন্ড বা যুক্তি একটি অপারেটর বা ফাংশন দ্বারা প্রত্যাশিত প্রকারের সাথে বেমানান হয়।

let num1 = 1;
try {
  num1.toUpperCase(); // You cannot convert a number to upper case
} catch (err) {
  //   document.getElementById("demo").innerHTML = err.name;
  //   console.log(err.name);
}

// আপনি একটি URI ফাংশনে অবৈধ অক্ষর ব্যবহার করলে একটি URIError নিক্ষেপ করা হয়:

try {
  decodeURI("%%%"); // You cannot URI decode percent signs
} catch (err) {
  //   document.getElementById("demo").innerHTML = err.name;
  // console.log(err.name);
}
