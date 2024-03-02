// array এর Element এর প্রথম অক্ষর কে সিরিয়াল ভাবে সাজায় 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let test = fruits.sort();
// console.log(test);

// Reversing an Array========================

// let test1 = fruits.reverse()
// console.log(test1);

const points = [40, 50, 6,5,67,9,7,8,74,9874,85,47,5,4,5,6,1];

/* const see = points.sort(function(a , b){
    return a - b;
}); */
const see = points.sort(function(a , b){
    return b - a;
});
console.log(points);