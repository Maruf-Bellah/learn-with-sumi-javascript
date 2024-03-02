// JavaScript has 3 types of scope:

// Block scope
// Function scope
// Global scope

// ver {} block scop এর বাহিরে ও অ্যাক্সেস করা যায় তবে funtion এর বাহিরে অ্যাক্সেস করা যায় না
/* 

// Block Scope =========================
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

*/

{
  let x = 2;
}
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.=========
// Variables declared inside a { } block can be accessed from outside the block.

{
  var x = 2;
}
// x CAN be used here

// Variables declared within a JavaScript function, are LOCAL to the function:

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

// Local variables have Function Scope:
// They can only be accessed from within the function.
// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
// Local variables are created when a function starts, and deleted when the function is completed.

/*
 Function Scope============================
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:
 */

function myFunction() {
  var carName = "Volvo"; // Function Scope
}

function myFunction() {
  let carName = "Volvo"; // Function Scope
}

function myFunction() {
  const carName = "Volvo"; // Function Scope
}

/* 
Global JavaScript Variables  =======================
A variable declared outside a function, becomes GLOBAL. 
*/

let carName = "Volvo";
// code here can use carName
// console.log(carName);

function myFunction() {
  // code here can also use carName
  //   console.log(carName);
}
myFunction();

/* 
// Global Scope==================
// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.
// They all have Global Scope:

*/

// var x = 2; // Global scope
// let x = 2; // Global scope
// const x = 2; // Global scope

// In JavaScript, objects and functions are also variables.==============
// স্কোপ কোডের বিভিন্ন অংশ থেকে ভেরিয়েবল, বস্তু এবং ফাংশনগুলির অ্যাক্সেসযোগ্যতা নির্ধারণ করে।

/* 
// Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName, even if the value is assigned inside a function.
 */
myFunction1();

// code here can use carName

function myFunction1() {
  let carName = "Volvo by function";
  console.log(carName);
}

// In "Strict Mode", undeclared variables are not automatically global.

/* 
Global Variables in HTML ==============================
// With JavaScript, the global scope is the JavaScript environment.
// In HTML, the global scope is the window object.
// Global variables defined with the var keyword belong to the window object:
 */

var carName1 = "Volvo";
// code here can use window.carName

// Global variables defined with the let keyword do not belong to the window object:

let carName1 = "Volvo";
// code here can not use window.carName

/* 
// The Lifetime of JavaScript Variables=============
// The lifetime of a JavaScript variable starts when it is declared.
// Function (local) variables are deleted when the function is completed.
// In a web browser, global variables are deleted when you close the browser window (or tab).
 */
