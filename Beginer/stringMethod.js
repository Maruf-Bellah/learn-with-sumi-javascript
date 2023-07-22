// // String Method 


 
// String length  পুরা জায়গায় সংখ্যা দেখায় 


// // Extracting String Parts  কোন জায়গা থেকে কোন জায়গা পর্যন্ত বাহির করবে 

// আর position যদি শেষের থেকে হয় তাহলে শেষ থেকে গণনা শুরু করে 





// String slice(start, end)
// String substring() ও slice এর মত 


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// let part = text.slice(0, 5);
// let part = text.slice(6);
// let part = text.slice(-12);
// let part = text.slice(-12, -6);
// console.log(part);
// console.log(text);

// =============================================

// substr() এটা ও slice এর মতো তবে second peramiter টা length গননা করে 
// String substr(start, end )

// let str = "Apple, Banana, Kiwi";
// let part2 = str.substr(7, 14);
// let part2 = str.substr(-4);
// console.log(part2);




// String replace() লেখা কে পরিবর্তন করে ফেলে 
let one = "Please visit Microsoft!";
let one1 = one.replace("Microsoft", "W3Schools");
// console.log(one1);



// String replaceAll() যেখানে যেখানে করতে বলবে সব জায়গায় করে দিবে 

/* 


let text10 = "I love cats. Cats are very easy to love. Cats are very popular."

let text11 = text10.replaceAll("Cats","Dogs");
let text12 = text10.replaceAll("cats","dogs");
// console.log(text11);
// console.log(text12);

let text8 = text10.replaceAll(/Cats/g,"Dogs");
let text9 = text10.replaceAll(/cats/g,"dogs");
console.log(text8);
console.log(text9);

*/


// String toUpperCase()
// String toLowerCase()
/* let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
console.log(text2);
console.log(text3);
 */

// String concat() লেখাকে জোড়া দেয় 

/* let text1 = "Hello Maruf ";
let text2 = "I am Bellah";
let text3 = text1.concat( " ", text2); */

/* 
let text5 = "Hello" + " " + "World!";
console.log(text5);
let text6 = "Hello".concat(" ", "World!");
console.log(text6);

*/



// String trim() এটা দুপাশে জায়গা remove করে দেয় 
// String trimStart() সামনে remove ফাকা করে 
// String trimEnd() পিছনে remove ফাকা করে 

// let trim1 = 'hello maruf';
// let see = trim1.trim()
// // console.log(see);

// let text1 = "              Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);


// String padStart() সামনে ততক্ষন চলতে থাকবে যতক্ষন না সেটার নাম্বার শেষ হয় 
// String padEnd() পিছনে ততক্ষন চলতে থাকবে যতক্ষন না সেটার নাম্বার শেষ হয় 

/* 
let text = "5";
let padded = text.padEnd(4,"0");
console.log(padded); 

*/
// String charAt() কত নাম্বারে কোন অক্ষর টা আছে সেটা বলে দেয় , আর যদি না থাকে তাহলে emty দেখায় 
let text = "HELLO WORLD";
let char = text.charAt(45); 
console.log(char);


// String charCodeAt() কোন একটা  নাম্বার দিলে একটা unic নাম্বার দেয় , 

let text2 = "HELLO WORLD";
let char2 = text.charCodeAt(8);
// console.log(char2);

// String split() 

// Property Access আর যদি না থাকে তাহলে undefined দেখায় 

let text4 = "HELLO WORLD";
let char5 = text[0];
// console.log(char5);


let text5 = "HELLO WORLD";
// let char6 = text5.split(" , "); // ekta array return korbe 
// let char6 = text5.split(""); // ekta array return korbe  and portek ta k alada alada kore dibe 
let char6 = text5.split(" | "); // ekta array return korbe 
console.log(char6);