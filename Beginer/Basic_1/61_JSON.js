// JSON = JavaScript Object Notation

// JSON দেখতে পুরাই object এর মত তবে সেটা object না
// JSON কে object এ রুপান্তর করতে JSON.parse() এটা লেখতে হবে
// object কে JSON এ রুপান্তর করতে JSON.stringify() এটা লেখতে হবে

// JSON Syntax Rules========================================

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let show = JSON.parse(text);
// console.log(show);

let obj = {
  firstName: "Maruf",
  lastName: "Bellah",
  age: 20,
};

let show1 = JSON.stringify(obj);
console.log(show1);
