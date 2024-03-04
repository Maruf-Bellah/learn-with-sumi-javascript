// inheritance মানে নিয়ে আসা ,  যেমন আমার বাবার কিছু গুন আমার ভিতরে চলে এসেছে তার বাবার গুন তার ভিতরে কিছু চলে এসেছে এভাবে ১৪ গুস্টি পর্যন্ত

// এই কোড ভুল এবং বুজা হয় নি আবার ভালো মত বুজে লেখো

class Car {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return "I have a " + this.carName;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + " , " + "it is a " + " " + this.model;
  }
}

let myCar = new Model("BMW", "Mustange");
// console.log(myCar);

// You can use the underscore character to separate the getter/setter from the actual property:

class Car2 {
  constructor(brand) {
    this._carName = brand;
  }
  get carName() {
    return this._carName;
  }
  set carName(x) {
    this._carName = x;
  }
}

const myCar2 = new Car2("BMW");
myCar2.carName = "Volvo"; // setter volvo
// console.log(myCar2);

// Hoisting=====================================
// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
// That means that you must declare a class before you can use it:

//You cannot use the class yet.
// const myCar3 = new Car3("Ford"); //will raise an error.
// console.log(myCar3);

class Car3 {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
// const myCar3 = new Car("Ford");
console.log(myCar3);
