const fruits = { bananas: 300, orange: 200, apple: 500 };

let text = "";

for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ":" + value + ", ";
}

// console.log(text);

// Object.entries() also makes it simple to convert objects to maps:
const myMap = new Map(Object.entries(fruits));
// console.log(myMap);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text1 = Object.values(person);
let text2 = Object.keys(person);

// console.log(text1);
// console.log(text2);

// javascript async functio

async function myDisplay() {
  let myPermision = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I Love You !!");
    }, 3000);
  });

  let show = await myPermision;
  console.log(show);
}

myDisplay();
