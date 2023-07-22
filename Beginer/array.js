// array এমন এক variabel যেটা একের অধিক value ধারন করতে পারে 

const names = ['maruf', 'bellah', 'hasan', 'mamun', 'khalid'];
// console.log(names);

// accessing array =====================

const you = names[0];
// console.log(you);

// Changing an Array Element================

names[0] = "ayesha bellah";
// console.log(names);

// Converting an Array to a String==================

 const convert = names.toString();
//  console.log(convert);


//  Arrays are Objects============================
// console.log(typeof names);

// The length Property================
// console.log(names.length);

// Accessing the First Array Element=============

let acces = names[0];
// console.log(acces);

// Accessing the Last Array Element============

let acceses = names[names.length -1];
// console.log(acceses);

// How to Recognize an Array  ===========

let test = Array.isArray(names); //evabe korte paro 

 let test2 = names instanceof Array; //evabe korte paro 
console.log(test2);