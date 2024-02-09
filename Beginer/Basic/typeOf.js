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


// jodi Array test korte chaw tahole ei vabe kora jay =============================

/* 
function isArray(myArray) {
    return console.log(myArray.constructor === Array);;
}
isArray([1,2]);
 */


function isArray(myArray) {
    return console.log(myArray.constructor === Date);;
}
isArray(new Date)
