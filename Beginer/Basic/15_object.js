// object হলো variable এর মত , তবে variable একটা value বহন করে আর object অনেক গুলি value বহন করে

let person = {
  firstName: "Maruf",
  lastName: "Bellah",
  age: 20,
  eyeColor: "black",
};

// object কে দুই ভাবে access করা যায়

// console.log(person.age);
// console.log(person['age']);

// A method is a function stored as a property.

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person1.id);

let names = person1.fullName();
// console.log(names);

x = new String(); // Declares x as a String object
y = new Number(); // Declares y as a Number object
z = new Boolean(); // Declares z as a Boolean object
// x = "maruf";
// y = 23423;
// z = true;
console.log(x);
console.log(y);
console.log(z);
