// variable data gulo k dhore rakhe / joma kore rakhe / stor kore rakhe

// variable 4 vabe declared kora jay

/* 1= automatically

// If you assign a value to a variable that has not been declared, 
// it will automatically become a GLOBAL variable.
//
// This code example will declare a global variable carName, 
//even if the value is assigned inside a function.
//
// In "Strict Mode", undeclared variables are not automatically global.



2= using var 
2= using let 
2= using const   */

"use strict";

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

var name = "masum";
let letNames = "bellah";
const constName = "aminul";

x = 5;
y = 5;
z = x + y;
console.log(z);
