// String Search Methods

/*
 String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith() 

*/

// String indexOf() কত নাম্বার index এর positin এ আছে সেটা দেখায় এবং ২ টার মদ্ধে  fast তে যেটা থাকে সেটা দেখাবে   আর যদি না থাকে -1 দেখাবে
/* 
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); 
console.log(index);

*/

// String lastIndexOf() কত নাম্বার index এর positin এ আছে সেটা দেখায় এবং ২ টার মদ্ধে  last তে যেটা থাকে সেটা দেখাবে  আর যদি না থাকে -1 দেখাবে

/* 
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index); */

// আবার search করে যেটা দরকার সেটা পাওয়া যায়

/* let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
console.log(index);
let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.lastIndexOf("locate", 15);
console.log(index1); */

// String search() কোন লেখা লেখে দেখা যায় সেই লেখাটা কয় নাম্বার index এ  আছে  আর না থাকলে -1 দেখাবে

// let text = "Please locate where 'locate' occurs!";
// let index =  text.search("where");

/* let text = "Please locate where 'locate' occurs!";
let index =  text.search(/locate/);
console.log(index); */

// indexOf and search method একই তবে searhc method পরের index এ নিতে পারে না , তবে indexOf পারে এই টুকু পার্থক্য

// String match() এই টা যে যে অক্ষর মিলে যাবে সেটা দেখাবে এবং একটা array ও রিটার্ন করবে
/* 
let text = "The rain in SPAIN stays mainly in the plain";
let see = text.match('ain');
console.log(see.length + ' ' + see); */

/* let text = "The rain in SPAIN stays mainly in the plain";
let see = text.match(/ain/g);
console.log(see.length + ' ' + see); */

/* let text = "The rain in SPAIN stays mainly in the plain";
let see = text.match('ain');
console.log(see); 
*/

// String matchAll()  এই টা যে কয়টা  অক্ষর মিলে যাবে সেটা দেখাবে এবং একটা array ও রিটার্ন করবে

/* let text = "I love cats. Cats are very easy to love. Cats are very popular.";
let see = text.matchAll("Cats");
let sow = Array.from(see)
console.log(sow.length + sow); */

// String includes() যদি লেখাটা থাকে তাহলে সেটা true দেখাবে

/* let text = "Hello world, welcome to the universe.";
let show = text.includes("world");
console.log(show ); */

// String startsWith() jodi smane thake tahole true return dibe ar na thakle false
/* 
let text = "Hello world, welcome to the universe.";
let show  = text.startsWith("to");
console.log(show ); */

// String endsWith() jodi laste thake tahole true return dibe ar na thakle false
let text = "Hello world, welcome to the universe.";
let show = text.endsWith("universe.");
console.log(show);
