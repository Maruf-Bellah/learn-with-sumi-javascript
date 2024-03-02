/* Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E 

*/

// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	Returns x rounded to its nearest integer

let a = 4.6;
let b = Math.round(a);

// let a = 4.4;
// let b = Math.round(a)
// console.log(b);

// Math.ceil(x)	Returns x rounded up to its nearest integer
let a2 = 4.15;
let b2 = Math.ceil(a2);
// console.log(b2);

// Math.floor(x)	Returns x rounded down to its nearest integer

let a3 = 3.2564;
let b3 = Math.floor(a3);
// console.log(b3);

// Math.trunc(x)	Returns the integer part of x (new in ES6)
let a4 = 4.5454;
let b4 = Math.trunc(a); // khali sonkha return korbe doshomiker porer sonkha return korbe na
// console.log(b4);

// Math.sign এটা minus number thakle -1 dibe , 0 thakle 0 dekhabe , positive number thakle sudhu 1 dekhabe

let a5 = Math.sign(-4);
let b5 = Math.sign(0);
let c = Math.sign(4);

// console.log(a5);
// console.log(b5);
// console.log(c);

// Math.pow() eta power songkha dekhay =====================================

let a6 = Math.pow(8, 2);
// console.log(a6);

// Math.sqrt() eta rooter sonkha dekhay ======================

let a7 = Math.sqrt(64);
// console.log(a7);

// Math.abs() eta minus thakle o positive number dekhabe
// let a = Math.abs(-4.5);
// let a = Math.abs(-4);
// console.log(a);

// Math.min = holo sob theke choto number dibe
// let a = Math.min(0, 150, 30, 20, -8, -200);
// console.log(a);

// Math.max = holo sob theke boro number dibe
// let a = Math.max(0, 150, 30, 20, -8, -200);
// console.log(a);

// Math.random holo ek ek somoy vinno vinno number dekhabe

let a0 = Math.floor(Math.random() * 10) + 1;
console.log(a0);
