// constactor মানে যে একটা function তৈরি করে

// In JavaScript there are 5 different data types that can contain values:

// string
// number
// boolean
// object
// function

// There are 6 types of objects:

// Object
// Date
// Array
// String
// Number
// Boolean

// And 2 data types that cannot contain values:
// null
// undefined

// The typeof Operator===============================

/* 
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
 */

/*

// Please observe:====================

The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined * 

*/

// Primitive Data==========================================

// The typeof operator can return one of these primitive types:

// string
// number
// boolean
// undefined

// typeof "John"              // Returns "string"
// typeof 3.14                // Returns "number"
// typeof true                // Returns "boolean"
// typeof false               // Returns "boolean"
// typeof x                   // Returns "undefined" (if x has no value)

// The constructor Property===================================
// constactor মানে যে একটা বড় Function তৈরি করে

/* 
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}

*/

/* 

// Complex Data==============================
The typeof operator can return one of two complex types:
1==== function
2==== object

The typeof operator returns "object" for objects, arrays, and null.
The typeof operator does not return "object" for functions. 


typeof {name:'John', age:34} =>  // Returns "object"
typeof [1,2,3,4]       =>      // Returns "object" (not "array", see note below)
typeof null                     // Returns "object"
typeof function myFunc(){}  =>  // Returns "function"

*/

// You can check the constructor property to find out if an object is an Array (contains the word "Array"):

function isArray1(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

const show = isArray1([1, 1, 3, 54, 6, 7, 8, 90, 4]);
// console.log(show);
// jodi Array test korte chaw tahole ei vabe kora jay =============================

function isArray2(myArray) {
  //   return console.log(myArray.constructor === Array);
}
// isArray2([1, 2]);

// You can check the constructor property to find out if an object is a Date (contains the word "Date"):

function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}
// console.log(isDate(new Date()));

function isArray(myArray) {
  //   return console.log(myArray.constructor === Date);
}
// isArray(new Date());

// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let car; // Value is undefined, type is undefined

// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

car = undefined; // Value is undefined, type is undefined

/* 
Empty Values===================================
An empty value has nothing to do with undefined.
An empty string has both a legal value and a type. 
*/

let car1 = ""; // The value is "", the typeof is "string"

/*
 Null======================
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
// Unfortunately, in JavaScript, the data type of null is an object.
// You can consider it a bug in JavaScript that typeof null is an object. It should be null.
// You can empty an object by setting it to null:

*/

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// console.log(person);
let show2 = (person = null); // Now value is null, but type is still an object
// console.log(show2);

/* 
Difference Between Undefined and Null

// undefined and null are equal in value but different in type:
*/

/* 
typeof undefined    =>    // undefined
typeof null         =>    // object
null === undefined  =>    // false
null == undefined   =>   // true 
*/

// The instanceof operator returns true if an object is an instance of the specified object:

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars instanceof Array);
console.log(cars instanceof Object);
console.log(cars instanceof String);
console.log(cars instanceof Number);

// The void operator evaluates an expression and returns undefined. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).

{
  /* 
<a href="javascript:void(0);">
  Useless link
</a>

<a href="javascript:void(document.body.style.backgroundColor='red');">
  Click me to change the background color of body to red
</a> 
*/
}
