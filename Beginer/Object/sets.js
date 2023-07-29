// একটি জাভাস্ক্রিপ্ট সেট অনন্য মানগুলির একটি সংগ্রহ।

// প্রতিটি মান একটি সেটে একবারই ঘটতে পারে।

// একটি সেট যেকোন ডেটা টাইপের যে কোন মান ধারণ করতে পারে।


// You can create a JavaScript Set by:

// Passing an Array to new Set()
// Create a new Set and use add() to add variables
// Create a new Set and use add() to add values

const letters = new Set(["a","b","c"]);
// console.log(letters);

const letters1 = new Set();

// add values to the set
letters1.add('Maruf');
letters1.add('Samim');
letters1.add('Faruk');

// console.log(letters1);

const a = "Amir";
const b = "Bellah";
const c = "Calak";

const letters2 = new Set()

letters2.add(a)
letters2.add(b)
letters2.add(c)



// forEach =================================

let text = '';
letters2.forEach(function(value){
    text +=  value;
})
// console.log(text);

// const myiterator = letters2.values;+++++++++++++++++++++++++++

// Set.values() returns a Set Iterator: [object Set Iterator]

// vlaue ==============================

let text1 = '';
for(const x of letters2.values()){
    text1 += x;
}
console.log(text);