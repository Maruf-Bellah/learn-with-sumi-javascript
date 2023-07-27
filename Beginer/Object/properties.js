// Accessing JavaScript Properties
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// const x = person;
// x.firstName = "maruf bellah"
// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(x);


// for in loop 
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// add new property ==========
person1.nationality = 'English'

// delete property from object =====
delete person1.nationality
delete person1['age']

for (let x in person1) {
    // console.log(person1[x]);
}


// Nested Objects==================

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

// console.log(myObj.cars);
// console.log(myObj.cars.car1);
// console.log(myObj.cars['car2']);
// console.log(myObj["cars"]["car2"]);

//  evabe o kora jay ===================
let p1 = "cars";
let p2 = "car2";
// console.log(myObj[p1][p2]);









// Nested Arrays and Objects=============================
const myObj2 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}


for(let i in myObj2.cars){
    console.log(myObj2.cars[i].name);
    console.log(myObj2.cars[i].models[0]);
    // console.log(myObj2.cars[i].);

}