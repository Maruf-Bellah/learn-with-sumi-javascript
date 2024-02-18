// this holo = js this key word টা  কোন bojcet এর মধ্যে আছে

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getFullName: function () {
    return this.fullName();
  },
};

let show1 = person1.getFullName();
// console.log(show1);

const person0 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};
let show = person0.fullName.call(person2); ///অন্য একটা function থেকে value নিলে এভাবে নিতে হয়ে call()

// console.log(show);

// bind() মানে সে ধার করে অন্য একটা object থেকে

const person = {
  firstName: "maruf",
  lastName: "Bellah",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Ayesha",
  lastName: "Bellha",
};

let show2 = person.fullName.bind(member);
// console.log(show2());

// this is not a variable. It is a keyword. You cannot change the value of this.

// Explicit Function Binding=========================

const person3 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person4 = {
  firstName: "John",
  lastName: "Doe",
};

// Return "John Doe":
const show4 = person3.fullName.call(person4);
console.log(show4);
