// sets এ অনেক গুলি একরকমের Element থাকলে একটা রিটার্ন করবে 



// new Set()	Creates a new Set
const letter1 = new Set(["a","b","c"]);
// console.log(letter1);




// add()	Adds a new element to the Set

// Create a Set
/* const letters= new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters); */

// এভাবে ও করা যায় 

/* // Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters); */






// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// forEach diye iterate kora jay 

// Create a Set
/* const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
//   console.log(letters);
console.log(value);
}) */



// values()	Returns an iterator with all the values in a Set
// console.log(letter1.values());

// size	Returns the number of elements in a Set
console.log(letter1.size);