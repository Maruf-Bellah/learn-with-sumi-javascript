// const resing kora jay na 
// const redeclear kora jay na 


// tobe array o object er moddhe const er valu update korte o add kora jay 


const cars = ["Saab", "Volvo", "BMW"];

cars[3] = "Toyota";
cars.push("Audi")
cars.pop()

// console.log(cars);

var car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
// car.color = "black"
// car.type = "aboul"


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);