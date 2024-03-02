// conversion হলো একটা থেকে অন্য টায় convert করা যায়

// এটা তোমার আরো শিখতে হবে 

// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

// JavaScript Type Conversion======================
// JavaScript variables can be converted to a new variable and another data type:

// ১= একটি জাভাস্ক্রিপ্ট ফাংশন ব্যবহার করে
// ২= নিজে নিজে করে নেয়

/* 
Converting Strings to Numbers=============================
// The global method Number() converts a variable (or a value) into a number.
// A numeric string (like "3.14") converts to a number (like 3.14).
// An empty string (like "") converts to 0.
// A non numeric string (like "John") converts to NaN (Not a Number).
 */

// The unary + operator can be used to convert a variable to a number:====
let y = "5"; // y is a string
let x = +y; // x is a number
// console.log(x);

// If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

let a = "John"; // y is a string
let b = +a; // x is a number (NaN)
// console.log(b);

let d = new Date();
let c = d.getTime(); // returns 1404568027739
// console.log(c);

let f = new Date();
console.log(f.toString());
// Number Methods==========================================

// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

// The Unary + Operator==========================================

// The unary + operator can be used to convert a variable to a number:

// let y = "5";      // y is a string
// let x = + y;      // x is a number

// ==============================================

// let y = "John";   // y is a string
// let x = + y;      // x is a number (NaN)

// Automatic Type Conversion===============================

/* 
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
 */
