/* 

JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

*/



// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
// let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
// const date = new Date("2022-03-25");
const date = new Date();

console.log(date);

// var x;       // Now x is undefined
// x = 5;       // Now x is a Number
// x = "John";  // Now x is a String
// console.log(x);

let x = BigInt("123456789012345678901234567890");
console.log(x);




car = undefined;
console.log(car);

// Empty Values 

let car = "";    // The value is "", the typeof is "string"