// map key value pairs কে ধারন করে আর সেই key যে কোন datatype হতে পারে 


// How to Create a Map
// You can create a JavaScript Map by:========================

// Passing an Array to new Map()
// Create a Map and use Map.set()

const fruits = new Map([
    ["apple", 500],
    ["orange", 600],
    ["pain apple", 300],
    ["kiwi", 800],
])

// console.log(fruits);

// Map.set()=========================

const fruits1 = new Map();

fruits1.set("apple", 200);
fruits1.set("orange", 300);
fruits1.set("pain apple", 400);
fruits1.set("kiwi", 800);
fruits1.set("mango", 1000);

// set() method value ও change করতে ও পারে =======================
fruits1.set("apple", 100000);

// get() method key এর value পাওয়ার জন্য use করা হয় ====================
const show = fruits1.get("apple")
// size property element এর নাম্বার টা দেন  ====================
const show1 =fruits1.size;

// delete() method একটি map element কে delete করে
// fruits1.delete('apple')

// clear() method map থেকে সব Element remove করে দেয় 
// fruits1.clear();


// has() method দেখে map এর মধ্যে আছে কি নাই , যদি থাকে true না থাকলে false দেখাবে 

const show4 = fruits1.has('apple')

// instanceof return the true ===================
// console.log(fruits1 instanceof Map);


// Map.forEach() return the key / value===========================================

let text = '';
fruits1.forEach(function( value , key){
    text += key += value;
})

// myEntries() method একটা object কে iterator করে key আর value return দেয়  

let text1 = '';
fruits1.forEach(function( value , key){
    text1 += key += value;
})

// key() method সেটা iteartor object রিটার্ন করে key এর সাথে 

let text2 = '';
for(const x of fruits.keys()){
    text2 += x;
}

// value() method এটা value এর সাথে iterator value রিটার্ন করে 

let text3 = '';
for(const x of fruits1.values()){
    text3 += x;
}
// console.log(text3);


// এভাবে করলে পুরা value যোগ করে দিবে ============================

let text4 = 0;
for(const x of fruits1.values()){
    text4 += x;
}


// Objects as Keys===========================




console.log(text4);
// console.log(show4);