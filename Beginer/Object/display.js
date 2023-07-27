// kivabe object er value guli display te dekhabe tar alochona ekhane kora hoyese 

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
//   document.getElementById("demo").innerHTML =
//   person.name + "," + person.age + "," + person.city;


let text = '';
for(let x in person){
    text += person[x] + " ";
};

// Using Object.values() এটা দিয়ে ও করা যায় ==========================
let myArray =Object.values(person)

// Using JSON.stringify() এটা দিয়ে ও করা যায় ==========================
let myString = JSON.stringify(person)
document.getElementById('demo').innerHTML = myString;


