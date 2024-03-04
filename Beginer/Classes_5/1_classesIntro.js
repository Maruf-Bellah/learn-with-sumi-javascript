// basic lekha===================
// JavaScript Classes are templates for JavaScript Objects.

/* 
 class ClassName {
    constructor(){...}
}  */

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("BMW", 1524);
// console.log(myCar1);

class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar2 = new Car2("adiu", 78987);
// console.log(myCar2);

class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar3 = new Car("adiu", 2010);
console.log("my car is " + " " + myCar3.age + " " + "old");
