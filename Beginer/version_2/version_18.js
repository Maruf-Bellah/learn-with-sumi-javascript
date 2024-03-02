// array Flat

// অনেক গুলি array কে এক সাথে করে

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// console.log(myArr.flat());

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr = myArr1.flatMap((x) => x * 2);
console.log(newArr);
