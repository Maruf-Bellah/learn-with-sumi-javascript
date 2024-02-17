// hoisting হলো js এর default behavior (আচারণ) যা declear কে উপরে নিয়ে যায়

/* 
// JavaScript Declarations are Hoisted=========
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// Example 1 gives the same result as Example 2:

*/

x1 = 5; // Assign 5 to x
console.log(x1);
var x1; // Declare x

x = 5; // Assign 5 to x
console.log(x);
var x; // Declare x

var x; // Declare x
x = 55; // Assign 5 to x
console.log(x);

// let x; // Declare x
// x = 55; // Assign 5 to x
// console.log(x);

var y;
console.log(y); //eta undefined dekhabe
y = 60;

/* 
// The let and const Keywords =================
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared: 
*/

// This will result in a ReferenceError:================
// carName = "Volvo";
// let carName;
// console.log(carName);

// Using a const variable before it is declared, is a syntax error, so the code will simply not run.

// This code will not run.=========================

// carName2 = "Volvo";
// const carName2;
// console.log(carName2);

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// var x = 5; // Initialize x
// var y = 7; // Initialize y

// ================================
/* 

// Does it make sense that y is undefined in the last example?
// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined. 
*/

var x5 = 590099; // Initialize x
console.log(x5, y5);
var y5 = 79090 - 90; // Initialize y
