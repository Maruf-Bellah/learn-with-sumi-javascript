// iterable এক লুপের মধ্যে প্রত্যেক টা value/ Element কে  aterate (পুনরাবৃত্তিযোগ্য) করে

// iterating ২ জায়গায় করে

// Iterating over a String

const name = "W3Schools";

for (const x of name) {
  // code block to be executed
  //   console.log('I am iterating string' +  ' ' + x);
  // console.log(x);
}

// Iterating over an Array
const letters = ["a", "b", "c", "d", "e", "f", "g"];

for (const x of letters) {
  // code block to be executed
  console.log(x);
}
