// JavaScript Accessors (Getters and Setters)

// Getters and setters allow you to define Object Accessors (Computed Properties).
// Getters এবং setters আপনাকে অবজেক্ট এক্সেসরস (কম্পিউটেড প্রপার্টি) নির্ধারণ করতে দেয়।

/*
Computed Property Names is ES6 feature which allows 
the names of object properties in JavaScript OBJECT LITERAL NOTATION
to be determined dynamically, i.e. computed.
*/

let propertyname = "c";

let obj1 = {
  a: 11,
  b: 12,
  [propertyname]: 13,
};

// obj; // result is  {a:11 , b:12 , c:13}

//or incase if you want a as your object you can set in this way

let a_value = {
  a: obj1,
  // [obj.a] = obj
  // a_value's key name as (a) and the complete (obj) present above itself will act as a value
};
// console.log(a_value);

const person = {
  firstName: "Maruf",
  lastName: "Bellah",
  language: "Bangla",
  lang: function () {
    return this.language.toUpperCase();
  },
};

// The getter example provides a simpler syntax. // গেটার উদাহরণ একটি সহজ সিনট্যাক্স প্রদান করে।

console.log(person.lang());

const person1 = {
  firstName: "Maruf",
  lastName: "Bellah",
  language: "Bangla",
  get lang() {
    return this.language;
  },
};

// console.log(person1.lang);

const person2 = {
  firstName: "Maruf",
  lastName: "Bellah",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};

person2.lang = "Bangla and English";
// console.log(person2.language);

/* 
// Why Using Getters and Setters?====================
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
 */

// The Object.defineProperty() method can also be used to add Getters and Setters:

// Define object
const obj = { counter: 0 };

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});

Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});

Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});

Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});

Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj);
