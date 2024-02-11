// It has become a common practice to declare arrays using const:

// Cannot be Reassigned
// An array declared with const cannot be reassigned:

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // ERROR

// Arrays are Not Constants
// The keyword const is a little misleading.
// It does NOT define a constant array. It defines a constant reference to an array.
// Because of this, we can still change the elements of a constant array.

// You can create a constant array:
const cars1 = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars1[0] = "Toyota";

// You can add an element:
cars1.push("Audi");

// Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:

var cars0 = ["Volvo", "BMW"]; // Allowed
const cars2 = ["Volvo", "BMW"]; // Not allowed
{
  var cars3 = ["Volvo", "BMW"]; // Allowed
  const cars4 = ["Volvo", "BMW"]; // Not allowed
}

// Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:

const cars6 = ["Volvo", "BMW"]; // Allowed
const cars7 = ["Volvo", "BMW"]; // Not allowed
var cars8 = ["Volvo", "BMW"]; // Not allowed
cars9 = ["Volvo", "BMW"]; // Not allowed

{
  const cars10 = ["Volvo", "BMW"]; // Allowed
  const cars11 = ["Volvo", "BMW"]; // Not allowed
  var cars12 = ["Volvo", "BMW"]; // Not allowed
  cars12 = ["Volvo", "BMW"]; // Not allowed
}
