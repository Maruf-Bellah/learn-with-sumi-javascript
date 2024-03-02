// const redeclear kora jay na
// declaring a variable means setting aside memory space for that variable,

// const resing kora jay na
// assigning a value to a variable means giving it a value to store in the memory space that was set aside

// tobe array o object er moddhe const er valu update korte o add kora jay

const cars = ["Saab", "Volvo", "BMW"];

cars[3] = "Toyota";
cars.push("Audi");
cars.pop();

// console.log(cars);

var car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
// car.color = "black"
// car.type = "aboul"

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
