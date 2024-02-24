// constructor হলো অনেক কিছু একটা function এর দ্বারা লেখা যায়

function Person(first, last, age) {
  (this.fistName = first),
    (this.lastName = last),
    (this.age = age),
    (this.fullName = function () {
      return (
        this.fistName +
        " " +
        this.lastName +
        " " +
        this.age +
        " " +
        " " +
        this.nationality
      );
    });
}

const maruf = new Person("Maruf", "Bellah", 20);
const arif = new Person("Arif", "Bellah", 25);
const masum = new Person("Masum", "Bellah", 50);

Person.prototype.nationality = "Bangladesh";
maruf.nationality = "Bangladesh"; // add korar jnno evabe use kores

console.log(maruf.fullName());
console.log(arif.fullName());
console.log(masum.fullName());

// console.log(maruf);
// console.dir(Person);
