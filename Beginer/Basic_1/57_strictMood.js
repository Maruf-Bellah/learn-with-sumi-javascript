// eta aro valo kore shikhte hobe

// strict moode হলে bad syntex যে সব syntex লেখা উচিৎ না সে গুলি কে error দেখায় , তবে strict mood ছাড়া আপনি লেখলে js রান করবে , তবে না লেখাই ভালো

// "use strict"; global page এর শুরুতে এভাবেই লেখলেই হবে ====================

"use strict";
// x = 3.14; // This will cause an error because x is not declared
// console.log(x);

// ("use strict");
myFunction();

function myFunction() {
  y = 3.14; // This will also cause an error because y is not declared
}

// Declared inside a function, it has local scope (only the code inside the function is in strict mode): =================

x = 3.14; // This will not cause an error.

// myFunction();
function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
  // console.log(y);
}

// Using an object, without declaring it, is not allowed:

("use strict");
x = { p1: 10, p2: 20 }; // This will cause an error
