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

let text0 = "Please locate where 'locate' occurs!";
let index = text0.search(/locate/);
// console.log(index);

// indexOf and search method একই তবে searhc method পরের index এ নিতে পারে না , তবে indexOf পারে এই টুকু পার্থক্য

// String match() এই টা যে যে অক্ষর মিলে যাবে সেটা দেখাবে এবং একটা array ও রিটার্ন করবে

let text1 = "The rain in SPAIN stays mainly in the plain";
let see1 = text1.match("ain");
// console.log(see1);

let text2 = "The rain in SPAIN stays mainly in the plain";
let see2 = text2.match(/ain/g);
// console.log(see2.length + " " + see2);

let text3 = "The rain in SPAIN stays mainly in the plain";
let see3 = text3.match("ain");
// console.log(see3);

// String matchAll()  এই টা যে কয়টা  অক্ষর মিলে যাবে সেটা দেখাবে এবং একটা array ও রিটার্ন করবে

let text4 = "I love cats. Cats are very easy to love. Cats are very popular.";
let see4 = text4.matchAll("Cats");
let sow = Array.from(see4);
// console.log(sow.length + sow);

// String includes() যদি লেখাটা থাকে তাহলে সেটা true দেখাবে

let text5 = "Hello world, welcome to the universe.";
let show5 = text5.includes("world");
// console.log(show5);

// String startsWith() jodi sobdher samne thake tahole true return dibe ar na thakle false

let text6 = "to Hello world, welcome to the universe to.";
let show6 = text6.startsWith("to");
// console.log(show6);

// String endsWith() jodi laste thake tahole true return dibe ar na thakle false
let text = "Hello world, welcome to the universe.";
let show = text.endsWith("universe.");
// console.log(show);
