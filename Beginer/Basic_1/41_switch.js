// switch statement কাজ করে বিভিন্ন কাজ বিত্তিক বিভিন্ন conditions এর উপরে

// default switch এর যে কোন জায়গায় দিতে পারো

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
  default:
    console.log("hey bro how are you");
}

// এভাবে ও করা যায়

switch (new Date().getDay()) {
  case 4:
  case 5:
    console.log("Soon it is Weekend");
    break;
  case 1:
  case 6:
    console.log("It is Weekend");
    break;
  default:
    console.log("Looking forward to the Weekend");
}

// Strict Comparison===============

// Switch cases use strict comparison (===).
// The values must be of the same type to match.
// A strict comparison can only be true if the operands are of the same type.
// In this example there will be no match for x:

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
