// invocation মানে কাকে দিয়ে কল করা হচ্ছে 
//this হলো কে আসলে call করছে 
// call হচ্ছে শুধু মাত্র function কে call করা 

// Invoking a Function as a Function============================

function myFunction(a, b) {
    return a * b;
}
let show = myFunction(10, 2);
// console.log(show);


// The Global Object=====================================

let x = myFunction();            // x will be the window object

function myFunction() {
    return this;
}
// console.log(x);



// Invoking a Function as a Method================================

const myObject = {
    firstName: "Maruf",
    lastName: "Bellah",
    age: 32,
    MyFunction0: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
let shows = myObject.MyFunction0();
console.log(shows);
