// for Loops কোডের একটি ব্লককে বহুবার কার্যকর করতে পারে।

let cars =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','K'];



for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i]);
}

/* 

Different Kinds of Loops========================
JavaScript supports different kinds of loops:

=====================================================

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/

// And you can omit expression 1 (like when your values are set before the loop starts):

for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    // text += cars[i] ;
    // console.log(text);
    // console.log(cars[i]);
}

/* 

let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
    //   text += cars[i] + "<br>";
    console.log(cars[i]);
}
 */


// evabe o lekha jay 


/* let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
  console.log(cars[i]);
} */


var i = 5;

for (var i = 0; i < 10; i++) {
  // some code
  console.log(i);
}
// console.log(i); ekahne 10 pawa jabe karon var is gloper ===eta k thik korte let use korun 