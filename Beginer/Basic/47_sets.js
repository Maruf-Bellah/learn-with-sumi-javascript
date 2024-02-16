// sets এ অনেক গুলি একরকমের Element থাকলে সেটা কে একটা  object আকারে রিটার্ন করবে

// Essential Set Methods=====================

// new Set() =>	Creates a new Set
// add() =>	Adds a new element to the Set
// delete() =>	Removes an element from a Set
// has() =>	Returns true if a value exists in the Set
// forEach() =>	Invokes a callback for each element in the Set
// values() =>	Returns an iterator with all the values in a Set

// new Set()	Creates a new Set

// Pass an Array to the new Set() constructor ====
const letter1 = new Set(["a", "b", "c"]);
// console.log(letter1);

// add() =>	Add a new element to the Set ===========

// Create a Set
const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
// console.log(letters);

// এভাবে ও করা যায়===============================
// Create a Set
const letters2 = new Set();
// Create Variables
const a = "a";
const b = "b";
const c = "c";
// Add Variables to the Set
letters2.add(a);
letters2.add(b);
letters2.add(c);
// console.log(letters2);

// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// forEach diye iterate kora jay

// The forEach() method invokes (calls) a function for each Set element:========
// Create a Set
const letters3 = new Set(["a", "b", "c"]);
// List all Elements
let text = "";
letters3.forEach(function (value) {
  text += value;
  // console.log(letters);
  // console.log(value);
});

// console.log(text);

// The values() method returns a new iterator object containing all the values in a Set:
const showValue = letters3.values();
// console.log(showValue);

// Now you can use the Iterator object to access the elements:====

let text1 = "";
for (const x of letters3.values()) {
  text1 += x;
  console.log(x);
}

// size	Returns the number of elements in a Set
// console.log(letter1.size);
