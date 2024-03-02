// "use strict";
// স্কোপ হলো একটা দুনিয়া
// parent এর মদ্ধে যা কিছু আছে সব কিছু child নিতে পারে , কিন্তু child এর মদ্ধে যা কিছু আছে সেগুলি parent নিতে পারে না , এটা হলো scope এর মুল কথা

var x = 23;

// parent er duniya

function myFunc() {
  // myFunc/child er duniya
  x = 12;
  //   console.log(`${x} from myFunc`);
}

console.log(window.x);
myFunc();
