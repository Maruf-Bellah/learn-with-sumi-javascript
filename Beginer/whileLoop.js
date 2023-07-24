// while loop হলো একটা block code এর মধ্যে  যতক্ষন পর্যন্ত নির্দিস্ট শর্ত পুরন না করবে ততক্ষন পর্যন্ত চলতে থাকবে 

/* let i = 0;

text = '';

while (i < 10) {
    text += "The number is " + i;
    // console.log(text);
    // console.log(i);
    i++;
} */


/* do {
    text += "The number is " + i;
    i++;
    console.log(i);
}
while (i < 10); */

/* 
do {
   
    console.log('hello bro' + ' ' + i);
    i++;
}
while (i < 10); */


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
//   console.log(cars[i]);
console.log(text);
  i++;
}