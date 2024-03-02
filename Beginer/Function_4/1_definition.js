// function keyword দিয়ে আপনি একটা  javascript function বর্ণনা করতে পারবেন

// আপনি function decration use করতে পারবে আবার function ecpression use ও করতে পারবেন

// 1---- function declaraton ==================================
function myFunction(a, b) {
  return a * b;
}
let show = myFunction(4, 5);
// console.log(show);

// 2-------- function expressions==================================

// যখন কোন function কে কোন variable এ রাখা হয় , তখন সেই function এর নাম প্রয়োজন হয় না তার সেই function কে anonymous function বলে

const myExpression = function (a, b) {
  return a * b;
};
let show1 = myExpression(8, 6);
// console.log(show1);

// The Function() Constructor=========================================

const myFunction1 = new Function("a", "b", "return a * b");
let show2 = myFunction1(4, 3);
// console.log(show2);

// Function Hoisting==========================================

let show3 = myFunction2(5);
// console.log(myFunction2(6));

function myFunction2(y) {
  return y * y;
}
// console.log(show3);

// Self-Invoking Functions / Queue Function=====================================

(function (a, b) {
  a = 6;
  b = 5;
  let c = a * b;
  // console.log(c);
})();

// Functions Can Be Used as Values================
function myFunction3(a, b) {
  return a * b;
}

let x = myFunction3(4, 3) + 8;
// console.log(x);

// Arrow Functions=========================================

// ES5
var ES5 = function (x, y) {
  return x * y;
};
// console.log(ES5(5, 6));

// ES6
const ES6 = (x, y) => x * y;
// console.log(ES6(6,9));
