// কোন একটা object এর prototype এর মধ্যে যদি কিছু দিতে পারি তাহলে সেটা সমস্ত object এর জন্য available হয়ে যাবে

function Person(first, last, age) {
  (this.fistName = first),
    (this.lastName = last),
    (this.age = age),
    (this.fullName = function () {
      return this.fistName + " " + this.lastName + " " + this.age;
    });
}

const maruf = new Person("Maruf", "Bellah", 20);

Person.prototype.nationality = "Bangladesh";
// console.dir(Person);

function Person2(first, last, age, eyeColor) {
  this.fistName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}

let name = new Person2("maruf", "bellah", 23, "black");
console.log(name);
