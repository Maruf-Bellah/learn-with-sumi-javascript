// invocation মানে কাকে দিয়ে কল করা হচ্ছে 
//this হলো কে আসলে call করছে 
// call হচ্ছে শুধু মাত্র function কে call করা 

// Invoking a Function as a Function============================

function myFunction(a, b) {
    return a * b;
}
let show = myFunction(10, 2);
// console.log(show);


function sh(a, b) {
    let result = a + b;
    return result;
}
 sh(2, 3);
const re = sh(12, 35);
console.log(re);