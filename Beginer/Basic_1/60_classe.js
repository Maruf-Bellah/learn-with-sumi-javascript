// class ekhon kicui buji nai pore abar valo moto dekhe buje nibe

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Food", 2005);
const myCar1 = new Car("Food", 2005);

// console.log("my car is " + myCar.age() + " old");

// You can send parameters to Class methods:======================

class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}
const date2 = new Date();
let year = date2.getFullYear();

const myCar2 = new Car2("BMW", 2022);

console.log(`my car is ${myCar2.age(year)} old`);
