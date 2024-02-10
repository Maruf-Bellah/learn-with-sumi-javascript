// Array Search===========

/* 
Array Find and Search Methods
1 = Array indexOf()
2 = Array lastIndexOf()
3 = Array includes()
4 = Basic Methods
5 = Sort Methods
6 = Iteration Methods
7 = Array find()
8 = Array findIndex()
9 = Array findLast()
10 = Array findLastIndex()
 */

// 1 ================== The indexOf() method searches an array for an element value and returns its position.

// Note: The first item has position 0, the second item has position 1, and so on.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
let position1 = fruits.indexOf("Apple") + 1;

// console.log(position);
// console.log(position1);

// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.

// 2================== Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let position2 = fruits1.lastIndexOf("Apple") + 1;
// console.log(position2);

// array.lastIndexOf(item, start)
// item	Required. The item to search for
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning

// 3=================ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

const a = fruits2.includes("Mango"); // is true
// console.log(a);

// 4================The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:

// Note that the function takes 3 arguments:=================

// The item value
// The item index
// The array itself

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 4;
}
// console.log(first);

// 5============ The findIndex() method returns the index of the first array element that passes a test function.

const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// console.log(first1);

// 6 ==========findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
// console.log(high);

// 7 ============== The findLastIndex() method finds the index of the last element that satisfies a condition.

const temp1 = [27, 28, 30, 40, 42, 35, 30];
let pos1 = temp.findLastIndex((x) => x > 40);
console.log(pos1);
