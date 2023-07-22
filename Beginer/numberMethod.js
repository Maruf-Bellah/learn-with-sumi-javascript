


/* 
4 return a string 
toString()==	Returns a number as a string
toExponential()==	Returns a number written in exponential notation
toFixed()==  Returns a number written with a number of decimals
toPrecision()==	Returns a number written with a specified length

================================================================================

return a vlaue 
ValueOf()==	Returns a number as a number

*/

let a = 45;
let b = a.toString()
// console.log(b);

let c = 9.656;
let d = c.toExponential(2) // সূচকীয় নাম্বার দেয় 
// console.log(d);

let e = 9.545;
let f = e.toFixed(0) //return a string আর peramiter যা দেওয়া হবে তার মদ্ধে থাকবে 
let g = e.toFixed(1)
let h = e.toFixed(3)
let i = e.toFixed(5)
/* console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i); */

// ========================================================
// toPrecision  

// let x = 9.656; 
// // x.toPrecision(); //যেটা আছে সেটাই দেখাবে 
// let y= x.toPrecision(2); // দশমিক নিয়ে ২ টা সংখ্যা দেখাবে 
// x.toPrecision(4); // দশমিক নিয়ে 4 টা সংখ্যা দেখাবে 
// x.toPrecision(6); // দশমিক নিয়ে 6 টা সংখ্যা দেখাবে 
// console.log(y);



// valueOf যা নাম্বার আছে সেটাই দেখাবে 

// let x = 123;
// // let y=  x.valueOf();
// let z = (123).valueOf();
// let y = (100 + 23).valueOf();



// Converting Variables to Numbers 

// Number()==	Returns a number converted from its argument.
// parseFloat()==	Parses its argument and returns a floating point number
// parseInt()==	Parses its argument and returns a whole number



// Number Method ================================


// Number(true); = 1
// Number(false); = 0
// Number("10"); = 10
// Number("  10");= 10 
// Number("10  "); = 10
// Number(" 10  "); = 10
// Number("10.33"); = 10 

// এই ৩ টা বাদে 
// Number("10,33");= NaN 
// Number("10 33"); =NaN
// Number("John"); = NaN 

// ===================================
// parseInt string কে number বানায় এবং প্রথম নাম্বার টা রিটার্ন করে 


/*
 parseInt("-10");  = 10
parseInt("-10.33"); = 10
parseInt("10"); = 10 
parseInt("10.33");= 10
parseInt("10 20 30"); =10
parseInt("10 years"); =10 
parseInt("years 10"); NaN  
*/

// parseFloat string কে number বানায় এবং প্রথম নাম্বার টা রিটার্ন করে  


/*

parseFloat("10"); = 10
parseFloat("10.33"); = 10 
parseFloat("10 20 30"); = 10 
parseFloat("10 years"); = 10
parseFloat("years 10"); Nan 

 */