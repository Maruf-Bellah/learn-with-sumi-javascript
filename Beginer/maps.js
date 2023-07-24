// Maps হলো যে key-value pairs (objer এর value ও Element এক জোড়ায় ) রাখতে পারে , এবং key যে কোন datatype হতে পারে 

// map holo objer moto tobe objer chele behsi kaj kora jay 



// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map

// size	Returns the number of elements in a Map


// map ২ ভাবে তৈরি করা যায় 

// Passing an Array to  new Map()
/* const fruits = new Map([
    ['apple', 100],
    ['orange', 200],
    ['banana', 300],
    ['kiwi', 400]
]); */

// console.log(fruits);
// Create a Map and use  Map.set()

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("kiwi", 800);

// console.log(fruits);

// let show = fruits.set('apples', 1000); // element change kore 

// let show = fruits.get('kiwi'); // maper moddho theke value ber kore

// let show = fruits.size; // maper koy ta element acher tar number dekhay

// let show1 = fruits.delete('kiwi'); // maper value delete kore day  

// let show = fruits.has('kiwi'); // maper value delete kore day  


// forEeach ======================
/* let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
  console.log(key, value);
}) */


// entries ======= key-value return ek ek ta array er moto kore 

let text = "";
for (const x of fruits.entries()) {
  text += x;
//   console.log(text);
console.log(x);

}

// console.log(fruits);


// console.log(show);